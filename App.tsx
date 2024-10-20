import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import DayListItem from "./src/components/core/DayListItem";
import {Inter_900Black, useFonts} from '@expo-google-fonts/inter';
import {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen';
import {AmaticSC_400Regular,AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc"

SplashScreen.preventAutoHideAsync()

const days = [...Array(24)].map((val, index) => index + 1)
// [...Array(24)] :Создает новый массив с длиной 24, но без значений (пустой).
// .map((val, index) => index+1) Мы берём индекс каждого элемента и прибавляем к нему 1 (чтобы получить числа от 1 до 24).

export default function App() {



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
        <View style={styles.container}>
            <FlatList
                data={days}
                numColumns={2}
                contentContainerStyle={styles.content}
                columnWrapperStyle={styles.column}
                renderItem={({item}) => (
                    <DayListItem day={item}/>
                )}
            />


            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        //
        // gap: 10,

    },
    content: {
        // backgroundColor: 'red',
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    },

});
