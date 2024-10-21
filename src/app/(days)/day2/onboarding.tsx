import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {router, Stack} from "expo-router"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {StatusBar} from "expo-status-bar";

// for gesture
import {Gesture, GestureDetector, Directions, } from 'react-native-gesture-handler';
import Animated, {FadeIn,FadeInLeft, FadeInDown, FadeInUp, FadeOut} from 'react-native-reanimated';


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
        icons: 'book-reader',
        title: 'Education for Children ',
        descriptions: 'Contribute to the fundraiser "Education for Children" to help Save Children in effort of providing education to every children ',
    },
]

const OnboardingScreen = () => {

    const [screenIndex, setScreenIndex] = useState(0)
    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        // console.log('continue')
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
    const onForwardSwipe = () => {
        onContinue()
    }
    const onBackSwipe = () => {
        // console.log('swipe')
        if(screenIndex===0){
            setScreenIndex(0)
        }else{

            setScreenIndex(screenIndex - 1)
        }
    }

    const swipe = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onForwardSwipe),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBackSwipe),
    )



    // animation step elements

    return (


        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{headerShown: false}}/>
            <StatusBar style="light"/>

            <GestureDetector gesture={swipe}>
                <Animated.View
                    entering={FadeIn}
                    exiting={FadeOut}
                    key={screenIndex}

                    style={[styles.pageContent, {backgroundColor: screenIndex === 1 ? 'red' : screenIndex === 2 ? 'green' : 'defaultColor'}]}

                >

                    <Animated.View
                        entering={FadeInDown.delay(100).springify()}
                        key={screenIndex}
                    >

                        <FontAwesome5 style={styles.image} name={data.icons} size={100} color="#CEF202"/>
                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text
                            entering={FadeInUp.duration(1000)}
                            style={styles.title}>{data.title}
                        </Animated.Text>
                        <Animated.Text
                            entering={FadeInLeft.delay(350).springify()}
                            style={styles.description}>
                            {data.descriptions}
                        </Animated.Text>

                        <View style={styles.wrapperStep}>

                            {
                                onboardingSteps.map((item, index) => (
                                    <Animated.View
                                        entering={FadeIn.delay(50).springify()}
                                        // exiting={FadeOut.delay(50).springify()}


                                        key={index}
                                        style={[
                                            styles.step,
                                            {width: index === screenIndex ? 50 : 20}
                                        ]}
                                    >
                                    </Animated.View>
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
                </Animated.View>
            </GestureDetector>

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
