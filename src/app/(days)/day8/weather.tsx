import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,Image, ActivityIndicator, ImageBackground, FlatList} from 'react-native';

import {Stack} from "expo-router";


import { BlurView } from 'expo-blur';

// get location

import * as Location from 'expo-location';
// get location

//https://api.openweathermap.org/data/2.5/weather?lat=45.68629&lon=12.70027&appid=c480c725c0ac95eff8f6a2eb77fc2080
//https://api.openweathermap.org/data/2.5/weather?lat=45.68629&lon=12.70027&appid=c480c725c0ac95eff8f6a2eb77fc2080&units=metric
//https://api.openweathermap.org/data/2.5/weather?lat=45.68629&lon=12.70027&appid=c480c725c0ac95eff8f6a2eb77fc2080&units=metric&&lang=ru


const BASE_URL = `https://api.openweathermap.org/data/2.5`
// const api_key='c480c725c0ac95eff8f6a2eb77fc2080'
const api_key = process.env.EXPO_PUBLIC_API_KEY;

// for 16 day
// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
// api.openweathermap.org/data/2.5/forecast/daily?lat=45.688714&lon=12.711327&cnt=16&appid=c480c725c0ac95eff8f6a2eb77fc2080

//latitude: 45.68629  longitude:12.70027
// 45.688714, 12.711327
// const latitude='45.688714'
// const longitude='12.711327'
//apiKey:c480c725c0ac95eff8f6a2eb77fc2080

// create type
type Weather = {
    name: string;
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

type Forecast = {
    cod: string;
    message: number;
    cnt: number;
    list: Array<{
        dt: number;
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level: number;
            grnd_level: number;
            humidity: number;
            temp_kf: number;
        };
        weather: Array<{
            id: number;
            main: string;
            description: string;
            icon: string;
        }>;
        clouds: {
            all: number;
        };
        wind: {
            speed: number;
            deg: number;
            gust: number;
        };
        visibility: number;
        pop: number;
        rain?: {
            "3h": number;
        };
        sys: {
            pod: string;
        };
        dt_txt: string;
    }>;
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
};


const WeatherScreen = () => {
        // format time
        const formatTime = (unixTime: number, timezoneOffset: number) => {
            const date = new Date((unixTime + timezoneOffset) * 1000); // Конвертация в миллисекунды
            return date.toLocaleTimeString('ru-RU'); // Форматирование в понятное время
        };

        const formattedDate = (dt: number) => {
            const date = new Date(dt * 1000);
            // return date.toLocaleString(); // Выводит дату и время в локальном формате
            return date.toLocaleDateString("ru-RU", {weekday: 'long', day: 'numeric'});

        }



        // format time


        const [weather, setWeather] = useState<Weather>()
        const [forecast, setForecast] = useState<Forecast>()

        // for location
        const [location, setLocation] = useState<Location.LocationObject>();
        const [errorMsg, setErrorMsg] = useState('');
        // for location
        console.log(JSON.stringify(weather,null,2))
        // console.log('location',location)


// get location user


        // const fetchLocation = async () => {
        //     try {
        //         console.log('Requesting location permission...');
        //         let {status} = await Location.requestForegroundPermissionsAsync();
        //         if (status !== 'granted') {
        //             setErrorMsg('Permission to access location was denied');
        //             console.log('Permission denied');
        //             return;
        //         }
        //
        //         console.log('Permission granted, attempting to fetch location...');
        //         let loc = await Location.getCurrentPositionAsync({});
        //         console.log('Location retrieved successfully:', loc);
        //         setLocation(loc);
        //     } catch (error) {
        //         console.error('Error fetching location:', error);
        //         setErrorMsg('Error fetching location');
        //     }
        // };
        //
        // useEffect(() => {
        //     fetchLocation();
        // }, []);


        const latitude = '45.688714'
        const longitude = '12.711327'

// get location user

        useEffect(() => {

            fetchWeather();
            fetchForecast()


        }, [location])

        const fetchWeather = async () => {
            // if (!location) {
            //     return null
            // }

            //fetch data
            // const latitude='45.688714'
            // const latitude = location?.coords?.latitude
            // const longitude='12.711327'
            // const longitude = location?.coords?.longitude
            const units = 'metric'
            // console.log(`${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=${units}`)

            const result = await fetch(`${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=${units}`)
            const data = await result.json()
            // console.log(JSON.stringify(data,null,2))
            setTimeout(() => {
                setWeather(data)
            }, 1000)
        }


        const fetchForecast = async () => {
            // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
            // https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=45.688714&lon=12.711327&appid=c480c725c0ac95eff8f6a2eb77fc2080
            // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


            const numberOfDays = 1;
            const units = 'metric'


            // const result = await fetch(`${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&cnt=${numberOfDays}&appid=c480c725c0ac95eff8f6a2eb77fc2080&units=${units}`)
            const result = await fetch(`${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=c480c725c0ac95eff8f6a2eb77fc2080&units=${units}`)

            const data = await result.json()
            // console.log(JSON.stringify(data, null, 2))
            setForecast(data)

        }


        // if (!weather || !location) {
        if (!weather) {
            return <ActivityIndicator color='red' size='large'/>
        }


        return (
            <ImageBackground
                source={require('@assets/imageBg.png')}
                style={styles.container}
            >
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor:'rgba(250,250,250, 0.5)'}}/>
                <Stack.Screen options={{headerShown:false}}/>

                <Text style={styles.location}>{weather?.name}</Text>
                <Text style={styles.temp}>{Math.round(weather?.main?.temp)} °</Text>

                <Text>Forecast for 5 days</Text>
                <Text>City: {forecast?.city.name}</Text>
                <Text>Country:{forecast?.city.country}</Text>
                <Text>population: {forecast?.city.population}</Text>
                {/*<Text>timezone: {forecast?.city.timezone}</Text>*/}

                <Text>sunrise: {forecast?.city.sunrise}</Text>
                <Text>sunrise: {formatTime(forecast?.city.sunrise, forecast?.city.timezone)}</Text>
                <Text>sunset: {formatTime(forecast?.city.sunset, forecast?.city.timezone)}</Text>
                <View>
                    <Image
                    source={{uri:`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}}
                    style={{width:200,height:200}}
                    />
                </View>

       <View style={{height:200}}>
           <FlatList
               horizontal
               contentContainerStyle={{gap:15,}}
               data={forecast.list}
               renderItem={({item})=>(
                   <BlurView intensity={100}
                             style={styles.card}
                   >

                       <Text>{item.main.temp}</Text>
                       <Text>{item.weather[0].main}</Text>
                       <Image source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} style={{ width: 50, height: 50 }} />
                       <Text>{item.weather[0].description}</Text>
                   </BlurView>
               )}
           />
       </View>

            </ImageBackground>
        );
    }
;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center',
    },
    location: {
        fontFamily: 'AmaticBold',
        fontSize: 50,
        color:'white'
    },
    temp: {
        fontFamily: 'InterBold9',
        fontSize: 70,
        color: 'gray'
    },
    card:{
        aspectRatio:9/16,
        borderRadius:20,
        // borderWidth:1,
        overflow:'hidden',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
})

export default WeatherScreen;
