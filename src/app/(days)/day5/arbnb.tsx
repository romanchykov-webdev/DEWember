import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Stack} from "expo-router";

import apartments from "@assets/data/day5/apartment.json"

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from "@components/day5/CustomMarker";
import ApartmentListItem from "@components/day5/ApartmentListItem";

// console.log(apartments)

const AirBNB = () => {

    const [selectedApartment, setSelectedApartment] = useState(null)

    return (
        <View>
            <Stack.Screen options={{headerShown: false}}/>

            <MapView style={styles.map}
                     // provider={PROVIDER_GOOGLE}
                     initialRegion={{
                         latitude: 37.78825,
                         longitude: -122.4324,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}
            >

                {
                    apartments.map((apartment) => (
                       <CustomMarker
                           key={apartment.id}
                           apartment={apartment}
                           onPressss={()=>setSelectedApartment(apartment)}
                           selectedApartment={selectedApartment}
                       />
                    ))
                }


            </MapView>

        {/*    display selected apartment*/}
            {
                selectedApartment && <ApartmentListItem apartment={selectedApartment} />
            }


        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
    itemMarker:{
        paddingHorizontal:10,
        padding:5,
        backgroundColor:'grey',
        borderWidth:1,
        borderColor:'red',
        borderRadius:20,
        color:'white',
        // borderCurve:'circular'
        overflow:'hidden',
    },
});

export default AirBNB;
