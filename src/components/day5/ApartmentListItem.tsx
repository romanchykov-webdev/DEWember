import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

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

const ApartmentListItem :React.FC<MarkerComponentProps>= ({apartment}) => {
    return (
        <View style={styles.wrapperApart}>
            <Image
                source={{uri: apartment.image}}
                style={styles.img}
                resizeMode="cover"
            />
            <View style={styles.wrapDesc}>
                <Text style={styles.title}>{apartment.title}f gg dffg</Text>
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
        position: "absolute",
        flexDirection:'row',
        bottom: 50,
        left: 10,
        right: 10,
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
