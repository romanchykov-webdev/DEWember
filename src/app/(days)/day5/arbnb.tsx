import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Stack} from "expo-router";

import apartments from "@assets/data/day5/apartment.json"

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from "@components/day5/CustomMarker";
import ApartmentListItem from "@components/day5/ApartmentListItem";
import BottomSheet, {BottomSheetView,BottomSheetFlatList} from '@gorhom/bottom-sheet';
// console.log(apartments)

// Определяем интерфейс для объекта Apartment
interface Apartment {
    id: number;
    latitude: number;
    longitude: number;
    price: number;
    title: string;
    numberOfStars: number;
    rating: number;
    image: string;
}

const AirBNB = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    // from bottom sheet

// variables
    const snapPoint = useMemo(() => [70, "25%", "90%"], []);

// from bottom sheet

    // Определяем тип состояния как null или объект Apartment
    const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

    return (
        <View>
            <Stack.Screen options={{headerShown: false}}/>

            <MapView style={styles.map}
                // provider={PROVIDER_GOOGLE}
                //      initialRegion={mapRegion}
                     region={mapRegion}
            >

                {
                    apartments.map((apartment) => (
                        <CustomMarker
                            key={apartment.id}
                            apartment={apartment}
                            onPressss={() => setSelectedApartment(apartment)}
                            selectedApartment={selectedApartment}
                        />
                    ))
                }


            </MapView>

            {/*    display selected apartment*/}
            {
                selectedApartment && (

                    <ApartmentListItem apartment={selectedApartment} containerStyle={{
                        position: "absolute",
                        bottom: 80,
                        left: 10,
                        right: 10,
                    }}/>
                )
            }

            <BottomSheet
                // enablePanDownToClose
                index={0}
                onChange={(index)=>console.log('on change' + index)}
                // ref={bottomSheetRef}
                // onChange={handleSheetChanges}
                snapPoints={snapPoint}
            >
                {/*<BottomSheetView>*/}
                    <Text style={styles.listTitle}>Over 1000 places 🎉</Text>

                    <BottomSheetFlatList
                        data={apartments}
                        contentContainerStyle={{gap: 10}}
                        renderItem={({item}) => <ApartmentListItem apartment={item}/>
                        }
                    />

                {/*</BottomSheetView>*/}
            </BottomSheet>

        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
    itemMarker: {
        paddingHorizontal: 10,
        padding: 5,
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
        color: 'white',
        // borderCurve:'circular'
        overflow: 'hidden',
    },
    listTitle: {
        textAlign: 'center',
        fontFamily: 'AmaticBold',
        fontSize: 30,
        marginBottom: 15,
    }
});

export default AirBNB;
