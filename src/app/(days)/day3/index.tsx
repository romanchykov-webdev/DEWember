import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`;

const DayDetailsScreen = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'Day 3: Markdown' }} />

            <MarkdownDisplay>{description}</MarkdownDisplay>

            <Link href="/day3/editorScreen" asChild>
                <Pressable >
                    <Text>
                        go to Markdown
                    </Text>
                </Pressable>
            </Link>
        </SafeAreaView>
    );
};

export default DayDetailsScreen;