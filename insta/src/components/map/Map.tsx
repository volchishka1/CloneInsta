import React, {Component} from "react";
import MapView, {Callout, Circle, Marker, Polygon, PROVIDER_GOOGLE} from "react-native-maps";
import {Alert, Dimensions, Image, Platform, StyleSheet, View} from "react-native";
import {AgEnum, Text} from "../ui/Text";
import Geolocation from "@react-native-community/geolocation";
import {PERMISSIONS, request} from "react-native-permissions";
import Carousel from "react-native-snap-carousel";


export default class Map extends Component<any, any> {

    state = {
        markers: [],
        coordinates: [
            {name: "Burger", latitude: 37.420, longitude: -122.081, image: {uri: "https://img.lovepik.com/element/40025/7074.png_860.png"}},
            {name: "Pizza", latitude: 37.422, longitude: -122.082, image: {uri: "https://img.lovepik.com/element/40025/7074.png_860.png"}},
            {name: "Soup", latitude: 37.424, longitude: -122.083, image: {uri: "https://img.lovepik.com/element/40025/7074.png_860.png"}},
            {name: "Sushi", latitude: 37.426, longitude: -122.088, image: {uri: "https://img.lovepik.com/element/40025/7074.png_860.png"}},
            {name: "Curry", latitude: 37.425, longitude: -122.089, image: {uri: "https://img.lovepik.com/element/40025/7074.png_860.png"}},
            {name: "Chicken", latitude: 37.420, longitude: -122.089, image: {uri: "https://img.lovepik.com/element/40025/7074.png_860.png"}},
        ]
    }

    componentDidMount() {
        this.requestLocationPermission();
    }

    showWelcomeMessage = () => {
        Alert.alert(
            "Welcome to the California",
            "The food is amazing",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Ok",
                },
            ]
        )
    }

    requestLocationPermission = async () => {
        if (Platform.OS === "android") {
            const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log("Android: " + response)

            if (response === "granted") {
                this.locateCurrentPosition();
            }
        } else {
            const response = request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            console.log("Iphone: " + response)


            // if (response === "granted") {
            //     this.locateCurrentPosition();
            // }
        }
    }

    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position));

                let initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.07,
                }

                this.setState({initialPosition});
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
        )
    }

    onCarouselItemChange = (index: any) => {
        let location = this.state.coordinates[index];

        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.012,
            longitudeDelta: 0.004,
        })

        this.state.markers[index].showCallout()
    }

    onMarkerPressed = (location, index) => {
        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.012,
            longitudeDelta: 0.006,
        })

        this._carousel.snapToItem(index);
    }

    renderCarouselItem = ({item}: any) =>
        <View style={styles.cardContainer}>
            <Text Ag={AgEnum.H1} style={styles.cardTitle}>{item.name}</Text>
            <Image style={styles.cardImage} source={item.image}/>
        </View>

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => this._map = map}
                    showsUserLocation={true}
                    style={styles.map}
                    initialRegion={this.state.initialPosition}>

                    <Circle
                        center={{latitude: 37.423, longitude: -122.085}}
                        radius={100}
                        fillColor={"rgba(200, 300, 100, 0.5)"}
                    />

                    <Polygon
                        coordinates={this.state.coordinates}
                        fillColor={"rgba(100, 200, 200, 0.3)"}
                        strokeWidth={3}
                    />

                    <Marker
                        coordinate={{latitude: 37.423, longitude: -122.085}}
                        // image={require("../../img/7074.png_860.png")}
                        title={"San Francisco"}>
                        <Callout onPress={this.showWelcomeMessage}>
                            <Text Ag={AgEnum.H1}>Google</Text>
                        </Callout>
                    </Marker>
                    {
                        this.state.coordinates.map((marker, index) => (
                            <Marker
                                key={marker.name}
                                ref={ref => this.state.markers[index] = ref}
                                onPress={() => this.onMarkerPressed(marker, index)}
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude
                                }}>
                                <Callout onPress={this.showWelcomeMessage}>
                                    <Text Ag={AgEnum.H1}>{marker.name}</Text>
                                </Callout>
                            </Marker>
                        ))
                    }

                </MapView>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.coordinates}
                    containerCustomStyle={styles.carousel}
                    renderItem={this.renderCarouselItem}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={300}
                    removeClippedSubviews={false}
                    onSnapToItem={(index) => this.onCarouselItemChange(index)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    cardContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        height: 200,
        width: 300,
        padding: 24,
        borderRadius: 24,
    },
    cardTitle: {
        color: "white",
        fontSize: 22,
        alignSelf: "center"
    },
    cardImage: {
        height: 120,
        width: 300,
        bottom: 0,
        position: "absolute",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    map: {
        height: "100%",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    carousel: {
        position: "absolute",
        bottom: 0,
        marginBottom: 48
    }
})
