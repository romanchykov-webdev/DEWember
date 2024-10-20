import {Stack} from "expo-router";
import {Inter_900Black, useFonts} from "@expo-google-fonts/inter";
import {AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc";
import {useEffect} from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

    // add google fonts
    const [loaded, error] = useFonts({
        Inter: Inter_900Black,
        Amatic:AmaticSC_400Regular,
        AmaticBold:AmaticSC_700Bold,
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
        <Stack
            screenOptions={{}}
        >

            <Stack.Screen
                name="index"
                options={{title:"DEVember"}}
            />

        </Stack>
    )
}