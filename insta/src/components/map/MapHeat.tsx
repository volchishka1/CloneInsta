import React, {Component} from "react";
import {StyleSheet, View, Platform} from "react-native";

import MapView, {Heatmap, PROVIDER_GOOGLE} from "react-native-maps";

export default class MapHeat extends Component {

    static navigationOptions = {
        title: "New York"
    };

    state = {
        initialPosition: {
            latitude: 40.7143,
            longitude: -74.0042,
            latitudeDelta: 0.4,
            longitudeDelta: 0.15,
        }
    }

    points = [
        {latitude: 40.7128, longitude: -74.0065, weight: 1},
        {latitude: 40.7121, longitude: -74.0042, weight: 1},
        {latitude: 40.6102, longitude: -74.0060, weight: 1},
        {latitude: 40.7123, longitude: -74.0052, weight: 1},
        {latitude: 40.7232, longitude: -74.0042, weight: 1},
        {latitude: 40.7128, longitude: -74.0224, weight: 1},
        {latitude: 40.7123, longitude: -74.0053, weight: 1},
        {latitude: 40.7181, longitude: -74.0042, weight: 1},
        {latitude: 40.7124, longitude: -74.0123, weight: 1},
        {latitude: 40.7148, longitude: -74.0012, weight: 1},
        {latitude: 40.6128, longitude: -74.0127, weight: 1},
        {latitude: 40.7223, longitude: -74.0153, weight: 1},
        {latitude: 40.7193, longitude: -74.0052, weight: 1},
        {latitude: 40.724, longitude: -74.0013, weight: 1},
        {latitude: 40.7518, longitude: -74.0012, weight: 1},
    ];

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => this._map = map}
                    style={styles.map}
                    initialRegion={this.state.initialPosition}>
                    <Heatmap
                        initialRegion={this.state.initialPosition}
                        points={this.points}
                        radius={40}
                        opacity={1}
                        gradient={{
                            colors: ["black","purple", "red", "yellow", "white"],
                            startPoints: Platform.OS ==="ios" ?
                                [0.01, 0.04, 0.1, 0.45, 0.5] :
                                [0.1, 0.25, 0.5, 0.75, 1],
                            colorMapSize: 2000
                        }}

                    >

                    </Heatmap>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    map: {
        height: "100%",
    },
})
