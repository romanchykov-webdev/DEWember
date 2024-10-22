import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from "lottie-react-native";
import Animated, {FadeIn, ZoomOut} from 'react-native-reanimated'

const AnimationLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
                                  onAnimationFinish = (isCanceled) => {
                                  }
                              }: { onAnimationFinish?: (isCanceled: boolean) => void }) => {
    const animation = useRef<LottieView>(null);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
            }}>

            <AnimationLottieView
                exiting={ZoomOut}
                autoPlay
                ref={animation}
                onAnimationFinish={onAnimationFinish}
                loop={false}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#000',
                }}
                source={require('@assets/littie/Netflix.json')}
            />
        </View>
    );
};

const styles = StyleSheet.create({})

export default AnimatedSplashScreen;
