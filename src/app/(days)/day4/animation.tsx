import React, {useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);
    return (
        <View>
            <Text>AnimationScreen works!</Text>

            <LottieView
                // autoPlay
                ref={animation}
                style={{
                    width: '100%',
                    height: 400,
                    backgroundColor: '#eee',
                }}
                source={require('@assets/littie/Netflix.json')}
            />
            <View style={styles.wrapperButton}>
                <Button color='red' title="Play" onPress={() => animation.current?.play()}/>
                <Button color='green' title="Reset" onPress={() => animation.current?.reset()}/>
                <Button title="Pause" onPress={() => animation.current?.pause()}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    wrapperButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})

export default AnimationScreen;
