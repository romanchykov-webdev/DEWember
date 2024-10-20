import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type DayListItemProps = {
    day: number;
}

const DayListItem = ({day}: DayListItemProps) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        // width: 100,
        // height: 100,
        flex: 1,
        aspectRatio: 1,  //Ширина и высота элемента равны. Например, если ширина 100px, то высота тоже будет 100px

        backgroundColor: '#F9EDE3',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: StyleSheet.hairlineWidth,  //StyleSheet.hairlineWidth  very small height border
        borderColor: '#9b4521',
        borderRadius: 20,
    },
    text: {
        color: '#9b4521',
        fontSize: 70,
        fontFamily: 'AmaticBold',
    }
})

export default DayListItem;
