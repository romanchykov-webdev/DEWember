import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Animated splash screen
`;

const DayDetailsScreen = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'Day 5: Map' }} />

            <MarkdownDisplay>{description}</MarkdownDisplay>


            <Link href="/day5" asChild style={{marginBottom:50 ,backgroundColor:'red',padding:20}}>
                <Pressable >
                    <Text>
                        Go to the animation
                    </Text>
                </Pressable>
            </Link>


        </SafeAreaView>
    );
};

export default DayDetailsScreen;