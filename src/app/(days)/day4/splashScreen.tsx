import React, {useRef} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Stack} from "expo-router";
import LottieView from "lottie-react-native";

const SplashScreen = () => {
    const animation = useRef<LottieView>(null);
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'black'}}>
            {/*<Stack.Screen options={{title:'Splash Screen'}}/>*/}
            <Stack.Screen options={{headerShown:false}}/>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: "100%",
                    height:"100%",
                    backgroundColor: '#000',
                }}
                source={require('@assets/littie/Netflix.json')}
            />
        </View>
    );
};

const styles = StyleSheet.create({})

export default SplashScreen;
