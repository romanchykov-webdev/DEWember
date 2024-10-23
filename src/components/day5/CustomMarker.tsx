import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE,MarkerPressEvent} from 'react-native-maps';


import apartment from "@assets/data/day5/apartment.json"

type ApartmentListItem={
    // apartment:any,
    apartment:(typeof apartment[0]),
    containerStyle?:ViewStyle,
    onPressss: (event: MarkerPressEvent) => void,
    selectedApartment:(typeof apartment[0]),
}

const MarkerComponent= ({apartment,onPressss,selectedApartment }:ApartmentListItem) => {
    return (
        <Marker
            onPress={onPressss}
            coordinate={{
            latitude: apartment?.latitude,
            longitude: apartment?.longitude,
        }}
                // title={apartment.title}
                // description="description"
        >
            <View style={{
                backgroundColor: selectedApartment?.id===apartment?.id ? 'red':'white',
                padding:5,
                paddingHorizontal:8,
                borderWidth:1,
                borderColor:'grey',
                borderRadius:20,
            }}>
                <Text style={{fontFamily:'InterBold9'}}>
                   $ {apartment?.price}
                </Text>
            </View>
        </Marker>
    );
};

const styles = StyleSheet.create({})

export default MarkerComponent;
