import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {router, Stack} from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View >
        <Stack.Screen options={{title:'Day 2'}}/>
        <Text>DayDetailsScreen 2 works!</Text>
          <Pressable onPress={()=>router.back()}>
              <Text>go to back</Text>
          </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({})

export default DayDetailsScreen;
