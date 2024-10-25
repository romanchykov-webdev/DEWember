import {Stack} from "expo-router";
import {Inter_900Black, Inter_700Bold, Inter_600SemiBold, Inter_400Regular, useFonts} from "@expo-google-fonts/inter";
import {AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc";
import {useEffect, useState} from "react";

import {Gesture,  GestureHandlerRootView} from 'react-native-gesture-handler';
import AnimatedSplashScreen from "@components/day4/animatedSplashScreen";
import Animated, { FadeIn} from 'react-native-reanimated'

// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [appReady, setAppReady] = useState(false)
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false)

    const tap = Gesture.Tap();


    // add google fonts
    const [loaded, error] = useFonts({
        Inter: Inter_400Regular,
        InterBold7: Inter_700Bold,
        InterBold9: Inter_900Black,
        InterSemi: Inter_600SemiBold,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    })
    useEffect(() => {
        if (loaded || error) {
            // SplashScreen.hideAsync();
            // setTimeout(()=>{
            //
            // },3000)
            setAppReady(true)

        }
    }, [loaded, error]);

    //
    // const showSplashScreen = !appReady || !splashAnimationFinished
    //
    //
    // if (showSplashScreen) {
    //     return (
    //         <AnimatedSplashScreen onAnimationFinish={(isCanceled) => {
    //             if (!isCanceled) {
    //                 {
    //                     // console.log('Finished Animation',isCanceled)
    //                     setSplashAnimationFinished(true)
    //                 }
    //             }
    //         }}/>
    //     )
    // }

    return (
        <GestureHandlerRootView style={{flex: 1}}>


            <Animated.View style={{flex: 1}} entering={FadeIn}>
                <Stack
                    screenOptions={{}}
                >
                    <Stack.Screen
                        name="index"
                        options={{title: "DEVember"}}
                    />
                </Stack>
            </Animated.View>


        </GestureHandlerRootView>

    )
}