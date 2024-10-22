import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {Link} from "expo-router";

type DayListItemProps = {
    day: number;
}

const DayListItem = ({day}: DayListItemProps) => {

    const lessen=['dey1','animated Screen','Markdown','Splash Screen','Map AIRBNB']
    return (
        <Link href={`/(days)/day${day}`} asChild>
        <Pressable style={styles.box}>
            <Text style={styles.text}>{day}</Text>

                {
                    lessen.map((item, index) => (
                        <Text key={index} style={styles.description}>
                            { day === index+1 &&item}
                        </Text>
                    ))
                }

        </Pressable>
        </Link>
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
    },
    description:{
        position:"absolute",
        bottom:20,
        fontSize:16,
        letterSpacing:2,
        fontFamily: 'AmaticBold',
    }
})

export default DayListItem;
