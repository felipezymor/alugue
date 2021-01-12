import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function HomeSwiper() {
    return (
        <View>
            <Swiper
            style={styles.wrapper}
            dotStyle={{
                backgroundColor: '#000',
                borderColor: '#000',
                borderWidth: 1,
                width: 8,
                height: 8,
                borderRadius: 8
            }}
            activeDotColor='#fff'
            activeDotStyle={{
                borderColor: '#fff',
                borderWidth: 1,
                width: 8,
                height: 8,
                borderRadius: 8
            }}
            >
            <View style={styles.slide}>
                <Image 
                source={require('../assets/house1.jpg')}
                style={{width: '100%', height: 200, borderRadius: 10}}
                />
            </View>
            <View style={styles.slide}>
                <Image 
                source={require('../assets/house2.jpg')}
                style={{width: '100%', height: 200, borderRadius: 10}}
                />
            </View>
            <View style={styles.slide}>
                <Image 
                source={require('../assets/house3.jpg')}
                style={{width: '100%', height: 200, borderRadius: 10}}
                />
            </View>
            <View style={styles.slide}>
                <Image 
                source={require('../assets/house4.jpg')}
                style={{width: '100%', height: 200, borderRadius: 10}}
                />
            </View>
            <View style={styles.slide}>
                <Image 
                source={require('../assets/house5.jpg')}
                style={{width: '100%', height: 200, borderRadius: 10}}
                />
            </View>
            <View style={styles.slide}>
                <Image 
                source={require('../assets/house6.jpg')}
                style={{width: '100%', height: 200, borderRadius: 10}}
                />
            </View>
            </Swiper>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {

    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 10
    }
});
