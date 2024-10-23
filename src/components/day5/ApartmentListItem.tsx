import React from 'react';
import {View, Text, StyleSheet, Image, ViewStyle} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import apartment from "@assets/data/day5/apartment.json"

type ApartmentListItem={
    // apartment:any,
    apartment:(typeof apartment[0]),
    containerStyle?:ViewStyle,
}

const ApartmentListItem = ({apartment,containerStyle={}}:ApartmentListItem) => {
    // console.log('apartment',JSON.stringify(apartment,null ,2));
    return (
        <View style={[styles.wrapperApart,containerStyle]}>
            <Image
                source={{uri: apartment.image}}
                style={styles.img}
                resizeMode="cover"
            />
            <View style={styles.wrapDesc}>
                <Text style={styles.title}>{apartment.title}</Text>
                <Text>${apartment.price}</Text>

                <View style={{flexDirection:'row'}}>
                    {/* Render the star icons based on numberOfStars */}
                    {Array.from({ length: apartment.numberOfStars }).map((_, index) => (
                        <AntDesign key={index} name="star" size={24} color="black" />
                    ))}
                </View>

                <Text>rating:{apartment.rating}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    wrapperApart: {
        backgroundColor: 'white',
        flexDirection:'row',

        // padding: 10,
        borderRadius: 20,
        overflow:'hidden'
    },
    wrapDesc:{
      padding: 15,
        flex:1,
    },
    title: {
        flexWrap:'wrap',
        // backgroundColor: 'red'
    },
    img: {
        width: 150,
        aspectRatio:1,
    },

})

export default ApartmentListItem;
