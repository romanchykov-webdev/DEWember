import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {router} from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View >
        <Text>DayDetailsScreen 1 works!</Text>
          <Pressable onPress={()=>router.back()}>
              <Text>go to back</Text>
          </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({})

export default DayDetailsScreen;