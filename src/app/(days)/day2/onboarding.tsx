import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {Link, router, Stack} from "expo-router"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {StatusBar} from "expo-status-bar";


const onboardingSteps = [
    {
        icons: 'snowflake',
        title: 'Welcome DEVember',
        descriptions: 'Daily React Native tutorials during December',
    },
    {
        icons: 'people-arrows',
        title: 'Learn and grow together',
        descriptions: 'Learn by building 24 projects wits React Native and Expo ',
    },
    {
        icons: 'people-arrows',
        title: 'Education for Children ',
        descriptions: 'Contribute to the fundraiser "Education for Children" to help Save Children in effort of providing education to every children ',
    },
]

const OnboardingScreen = () => {

    const [screenIndex, setScreenIndex] = useState(0)
    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        console.log('continue')
        const isLastScreen = screenIndex === onboardingSteps.length - 1

        if (isLastScreen) {
            endOnboarding()
        } else {
            setScreenIndex(screenIndex + 1)
        }


    }
    const endOnboarding = () => {
        setScreenIndex(0)
        console.log('lastscreen')
        router.back()
    }

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{headerShown: false}}/>
            <StatusBar style={'dark'}/>

            <View style={styles.pageContent}>

                <FontAwesome5 style={styles.image} name={data.icons} size={100} color="#CEF202"/>

                <View style={styles.footer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>
                        {data.descriptions}
                    </Text>

                    <View style={styles.wrapperStep}>

                        {
                            onboardingSteps.map((item, index) => (
                                <View key={index}
                                      style={[
                                          styles.step,
                                          {width: index === screenIndex ? 50 : 20}
                                      ]}
                                ></View>
                            ))
                        }


                    </View>

                    {/*    buttons  */}
                    <View style={styles.wrapperButtons}>

                        <Text
                            onPress={endOnboarding}
                            style={[styles.buttonText]}>Skip</Text>

                        <Pressable
                            onPress={onContinue}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',

    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 50,
    },
    footer: {
        marginTop: 'auto'
    },
    title: {
        color: '#FDFDFD',
        fontSize: 26,
        fontFamily: 'InterBold7',
        letterSpacing: 1.3,
        marginVertical: 20,
    },
    description: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'Inter',
        marginBottom: 20,
    },
    // step style
    wrapperStep: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        marginBottom: 20,
    },
    step: {
        width: 20,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#302E38'
    },
    activeStep: {
        width: 50,
    },

    // button style
    wrapperButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#EDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,
        padding: 15,
        // backgroundColor: 'red',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#302E38',
        // padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
})

export default OnboardingScreen;
