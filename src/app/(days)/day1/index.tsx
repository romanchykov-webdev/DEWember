import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {router} from "expo-router";
import {Stack} from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View >
        <Stack.Screen options={{title:'Day 1'}}/>
        <Text style={{fontFamily:'AmaticBold',fontSize:70}}>DayDetailsScreen 1 works!</Text>
          <Pressable onPress={()=>router.back()}>
              <Text>go to back</Text>
          </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({})

export default DayDetailsScreen;
