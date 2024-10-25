import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TinderCard from "@/app/(days)/day6/tinderCard";
import {Stack} from 'expo-router';
import {
    interpolate,
    useAnimatedReaction,
    useDerivedValue,
    useSharedValue,
    withDecay,
    withSpring,
    runOnJS
} from "react-native-reanimated";

import {GestureDetector, Gesture} from "react-native-gesture-handler"

const dummuUsers = [
    {
        id: 1,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg',
        name: 'Dani',
    },
    {
        id: 2,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/2.jpg',
        name: 'Jon',
    },
    {
        id: 3,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/3.jpg',
        name: 'Dani',
    },
    {
        id: 4,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/4.jpeg',
        name: 'Alice',
    },
    {
        id: 5,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/5.jpg',
        name: 'Dani',
    },
    {
        id: 6,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg',
        name: 'Kelsey',
    },
    {
        id: 7,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg',
        name: 'Kelsey',
    },
    {
        id: 8,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg',
        name: 'Kelsey',
    },
    {
        id: 9,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg',
        name: 'Kelsey',
    },
    {
        id: 10,
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg',
        name: 'Kelsey',
    },
]


const TinderScreen = () => {

    const [users, setUsers] = useState(dummuUsers)
    const [yesNo, setYesNo] = useState<null | boolean>(null)

    const activeIndex = useSharedValue(0)
    const [index, setIndex] = useState(0)

    useAnimatedReaction(
        () => activeIndex.value,
        (value,prevValue) => {
            {
                if (Math.floor(value) !== index) {
                    runOnJS(setIndex)(Math.floor(value));
                }
            }
        }
    )


    useEffect(() => {
        if(index>users.length-8){
            console.log('last 8 card')
           setUsers((users)=>[...users, ...dummuUsers.reverse()])
        }
    }, [index]);

    const onResponse=(res:boolean)=>{
        console.log('on Response',res)
        setYesNo(res)
    }
    useEffect(() => {

    }, [yesNo]);


    return (

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Stack.Screen options={{headerShown: false}}/>

            <Text style={{top:70,position:'absolute'}}> Current index: {index}</Text>

            {
                users.map((item, index) => (
                    <TinderCard
                        key={index}
                        user={item}
                        numOfCards={users.length}
                        curIndex={index}
                        activeIndex={activeIndex}
                        onResponse={onResponse}
                        yesNo={yesNo}
                    />
                ))
            }


        </View>
    );
};

const styles = StyleSheet.create({})

export default TinderScreen;
