import React, {useState} from 'react';
import {Animated, PanResponder, Text, TouchableOpacity, View} from 'react-native';

export const FadeInView = () => {

    // const leftValue = useState(new Animated.Value(0))[0]

    // function moveBall() {
    //     Animated.timing(leftValue, {
    //         toValue: 500,
    //         duration: 1000,
    //         useNativeDriver: true
    //     }).start()
    // }

    const opacity = useState(new Animated.Value(0))[0]

    const pan = useState(new Animated.ValueXY())[0]
    const panResponder = useState(
        PanResponder.create({
            // onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {dx: pan.x, dy: pan.y}
                ]
            ),
            onPanResponderMove: (_, gesture) => {
                pan.x.setValue(gesture.dx);
                pan.y.setValue(gesture.dy);
            },
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    )[0]

    // function fadeInBall() {
    //     Animated.timing(opacity, {
    //         toValue: 1,
    //         duration: 1000,
    //         useNativeDriver: true
    //     }).start()
    // }
    // function fadeOutBall() {
    //     Animated.timing(opacity, {
    //         toValue: 0,
    //         duration: 1000,
    //         useNativeDriver: true
    //     }).start()
    // }

    return (
        <View style={{flex: 1}}>
            <Animated.View
                style={[
                    {
                        width: 100,
                        height: 100,
                        top: pan.y,
                        left: pan.x,
                        borderRadius: 100 / 2,
                        backgroundColor: "red",
                        // transform: [{ translateX: leftValue}],
                        // opacity,
                    },
                    // pan.getLayout()
                ]}
                {...panResponder.panHandlers}
            />
            {/*<TouchableOpacity onPress={fadeInBall}>*/}
            {/*    <Text>Fade in ball</Text>*/}
            {/*</TouchableOpacity>*/}
            {/*<TouchableOpacity onPress={fadeOutBall}>*/}
            {/*    <Text>Fade out ball</Text>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
}

