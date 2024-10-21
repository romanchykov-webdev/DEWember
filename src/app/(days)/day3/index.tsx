import React from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import {router, Stack, Link} from "expo-router";

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{title: 'Day 3: Markdown'}}/>
            <Text style={styles.textHeader}>DayDetailsScreen 2 works!</Text>
            <Pressable
                style={styles.buttonBack}
                onPress={() => router.back()}>
                <Text style={styles.buttonText}>go to back</Text>
            </Pressable>

            <Link
                style={styles.linkToLesson}
                href="/(days)/day3/editor" asChild>
                <Pressable>
                    <Text>Go to onboarding</Text>
                </Pressable>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonBack:{
        backgroundColor:'red',
        padding:10,
        width:150,
        marginBottom:50,
        borderRadius:50,

    },
    buttonText:{
        textAlign:'center',
    },
    textHeader:{
        fontSize:20,
        textAlign:'center',
        marginBottom:20,
        marginTop:10,
        fontFamily:'AmaticBold'
    },
    linkToLesson:{
        backgroundColor:'red',
        padding:10,
    },
})

export default DayDetailsScreen;
