import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Animated, {
    interpolate,
    SharedValue,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
    runOnJS
} from "react-native-reanimated"
import {Gesture, GestureDetector} from "react-native-gesture-handler";

const screenWidth = Dimensions.get('screen').width;
export const tinderCardWidth = screenWidth * 0.8

type TinderCard = {
    user: {
        image: string;
        name: string;
    },
    numOfCards: number;
    curIndex: number;
    activeIndex: SharedValue<number>;
    onResponse: (a: boolean) => void;
    yesNo: boolean;
}

const TinderCard = ({
                        user,
                        numOfCards,
                        curIndex,
                        activeIndex,
                        onResponse,
                        yesNo
                    }: TinderCard) => {


    const translationX = useSharedValue(0)


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    const gesture = Gesture.Pan()
        .onChange((event) => {
            translationX.value = event.translationX;

            activeIndex.value = interpolate(
                Math.abs(translationX.value),
                [0, 500],
                [curIndex, curIndex + 0.8]
            );
            runOnJS(onResponse)(event.velocityX > 0);
        })
        .onEnd((event) => {
            if (Math.abs(event.velocityX) > 400) {
                translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
                    velocity: event.velocityX,
                });
                activeIndex.value = withSpring(curIndex + 1);

                runOnJS(onResponse)(event.velocityX > 0);
            } else {
                translationX.value = withSpring(0);
            }
        });

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


    const animatedCard = useAnimatedStyle(() => ({
        opacity: interpolate(
            activeIndex.value,
            [curIndex - 1, curIndex, curIndex + 1],
            [1 - 1 / 5, 1, 1]
        ),
        transform: [
            {
                scale: interpolate(
                    activeIndex.value,
                    [curIndex - 1, curIndex, curIndex + 1],
                    [0.95, 1, 1]
                ),
            },
            {
                translateY: interpolate(
                    activeIndex.value,
                    [curIndex - 1, curIndex, curIndex + 1],
                    [-30, 0, 0]
                ),
            },
            {
                translateX: translationX.value,
            },
            {
                rotateZ: `${interpolate(
                    translationX.value,
                    [-screenWidth / 2, 0, screenWidth / 2],
                    [-15, 0, 15]
                )}deg`,
            },
        ],
    }));


    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[
                styles.card,
                animatedCard,
                {
                    zIndex: numOfCards - curIndex,
                    // opacity: 0.5,
                    // opacity: 1 - curIndex * 0.2,
                    // transform: [
                    //     {translateY: -curIndex * 30},
                    //     // {scale: 1 - curIndex * 0.05}
                    // ]
                }
            ]}
            >
                <Image
                    style={[StyleSheet.absoluteFillObject, styles.image]}
                    source={{uri: user.image}}
                />

                {
                    yesNo !== null
                        ? (<View style={[styles.yesNo, {left: yesNo &&  0}]}>
                            <Text style={styles.yesNoText}>{yesNo ? 'Yes' : 'Noo'}</Text>
                        </View>)
                        : null
                }


                <LinearGradient
                    // Background Linear Gradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={[StyleSheet.absoluteFillObject, styles.background]}
                />

                <View style={styles.footer}>
                    <Text style={styles.name}>{user.name}</Text>
                </View>
            </Animated.View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    card: {
        width: tinderCardWidth,
        position: 'absolute',
        // height: tinderCardWidth * 1.67,
        aspectRatio: 1 / 1.67,
        // borderRadius:15,
        // overflow: 'hidden',
        justifyContent: 'flex-end',
        // ?shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3

    },
    image: {
        borderRadius: 15,
    },
    yesNo: {
        position: 'absolute',
        top: 50,
        right: 0,
        width: 100,
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,
    },
    yesNoText: {
        color: 'red',
        fontSize: 24,
        fontFamily: 'AmaticBold',
        textAlign: 'center',
    },
    background: {
        top: '50%',
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 0,
        height: '50%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        // transform:'rotate(180deg)',
    },
    footer: {},
    name: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'InterBold9'
        // backgroundColor:'white',
    },
})

export default TinderCard;
