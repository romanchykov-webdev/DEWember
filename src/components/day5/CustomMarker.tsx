import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';


interface ApartmentType {
    id: number;
    latitude: number;
    longitude: number;
    price: number;
    title: string;
    numberOfStars: number;
    rating: number;
    image: string;
}

interface MarkerComponentProps {
    apartment: ApartmentType;
}

const MarkerComponent: React.FC<MarkerComponentProps> = ({apartment,onPressss,selectedApartment }) => {
    return (
        <Marker
            onPress={onPressss}
            coordinate={{
            latitude: apartment.latitude,
            longitude: apartment.longitude,
        }}
                // title={apartment.title}
                // description="description"
        >
            <View style={{
                backgroundColor: selectedApartment.id===apartment.id ? 'red':'white',
                padding:5,
                paddingHorizontal:8,
                borderWidth:1,
                borderColor:'grey',
                borderRadius:20,
            }}>
                <Text style={{fontFamily:'InterBold9'}}>
                   $ {apartment.price}
                </Text>
            </View>
        </Marker>
    );
};

const styles = StyleSheet.create({})

export default MarkerComponent;
