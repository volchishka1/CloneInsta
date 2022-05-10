import React, {Component} from "react";
import {StyleSheet, View, Platform} from "react-native";

import MapView, {Heatmap, PROVIDER_GOOGLE} from "react-native-maps";

export default class MapHeat extends Component {

    static navigationOptions = {
        title: "New York"
    };

    state = {
        initialPosition: {
            latitude: 53.9,
            longitude: 27.5667,
            latitudeDelta: 0.4,
            longitudeDelta: 0.15,
        }
    }

    points = [
        {latitude: 53.9, longitude: 27.5667, weight: 0.3},
        {latitude: 53.7121, longitude: 27.5642, weight: 0.25},
        {latitude: 53.6102, longitude: 27.5660, weight: 0.25},
        {latitude: 53.7123, longitude: 27.5652, weight: 0.25},
        {latitude: 53.7232, longitude: 27.5642, weight: 0.25},
        {latitude: 53.7128, longitude: 27.5624, weight: 0.25},
        {latitude: 53.7123, longitude: 27.5653, weight: 0.25},
        {latitude: 53.7181, longitude: 27.5642, weight: 0.25},
        {latitude: 53.7124, longitude: 27.5623, weight: 0.25},
        {latitude: 53.7148, longitude: 27.5612, weight: 0.25},
        {latitude: 53.6128, longitude: 27.5627, weight: 0.25},
        {latitude: 53.7223, longitude: 27.5653, weight: 0.25},
        {latitude: 53.7193, longitude: 27.5652, weight: 0.25},
        {latitude: 53.724, longitude: 27.5613, weight: 0.25},
        {latitude: 53.7518, longitude: 27.5612, weight: 0.25},
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
