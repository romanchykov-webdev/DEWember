import {Stack} from "expo-router";
import {Inter_900Black, Inter_700Bold, Inter_600SemiBold, Inter_400Regular, useFonts} from "@expo-google-fonts/inter";
import {AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc";
import {useEffect} from "react";
import * as SplashScreen from "expo-splash-screen";

import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler';


SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
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
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    // add google fonts

    // console.log('hello')

    return (
        <GestureHandlerRootView style={{flex: 1}}>

                <Stack
                    screenOptions={{}}
                >
                    <Stack.Screen
                        name="index"
                        options={{title: "DEVember"}}
                    />
                </Stack>
        </GestureHandlerRootView>

    )
}