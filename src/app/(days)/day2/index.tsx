import React from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import {router, Stack, Link} from "expo-router";

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{title: 'Day 2: Onboarding'}}/>
            <Text>DayDetailsScreen 2 works!</Text>
            <Pressable onPress={() => router.back()}>
                <Text>go to back</Text>
            </Pressable>

            <Link href="/(days)/day2/onboarding" asChild>
                <Pressable>
                    <Text>Go to onboarding</Text>
                </Pressable>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({})

export default DayDetailsScreen;
