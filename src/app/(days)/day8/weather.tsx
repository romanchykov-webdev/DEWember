import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

// get location

import * as Location from 'expo-location';
// get location

//https://api.openweathermap.org/data/2.5/weather?lat=45.68629&lon=12.70027&appid=c480c725c0ac95eff8f6a2eb77fc2080
//https://api.openweathermap.org/data/2.5/weather?lat=45.68629&lon=12.70027&appid=c480c725c0ac95eff8f6a2eb77fc2080&units=metric
//https://api.openweathermap.org/data/2.5/weather?lat=45.68629&lon=12.70027&appid=c480c725c0ac95eff8f6a2eb77fc2080&units=metric&&lang=ru



const BASE_URL=`https://api.openweathermap.org/data/2.5/weather`
// const api_key='c480c725c0ac95eff8f6a2eb77fc2080'
const api_key=process.env.EXPO_PUBLIC_API_KEY;

//latitude: 45.68629  longitude:12.70027
// 45.688714, 12.711327
//apiKey:c480c725c0ac95eff8f6a2eb77fc2080

// create type
type Weather={
    name:string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    },
}

const WeatherScreen = () => {
    const [weather, setWeather] = useState<Weather>()
    
    // for location
    const [location, setLocation] = useState<Location>();
    const [errorMsg, setErrorMsg] = useState('');
    // for location
    console.log(weather.cod)



// get location user

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log('location',location.coords.latitude)
            console.log('location',location.coords.longitude)
        })();
    }, []);
// get location user

    const fetchWeather=async ()=>{
        //fetch data
        // const latitude='45.688714'
        const latitude=location?.coords?.latitude
        // const longitude='12.711327'
        const longitude=location?.coords?.longitude
        const units='metric'

        const result =await fetch(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=${units}`)
        const data=await result.json()
        // console.log(JSON.stringify(data,null,2))
        setTimeout(()=>{
            setWeather(data)
        },1000)
    }

    useEffect(()=>{
        fetchWeather();
    },[location])

    if(!weather || !location){
        return <ActivityIndicator color='red' size='large' />
    }


  return (
    <View style={styles.container}>
        <Text style={styles.location}>{weather?.name}</Text>
        <Text style={styles.temp}>{Math.round(weather?.main?.temp)} °</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'whitesmoke',
        justifyContent:'center',
        alignItems:'center'
    },
    location:{
        fontFamily:'AmaticBold',
        fontSize:50,
    },
    temp:{
        fontFamily:'InterBold9',
        fontSize:70,
        color:'gray'
    },
})

export default WeatherScreen;
