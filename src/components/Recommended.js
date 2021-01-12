import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function Recommended({cover, title, offerPercentage}) {
    return (
        <ImageBackground
        source={cover}
        style={styles.container}
        imageStyle={{borderRadius: 10}}
        blurRadius={3}
        >
        <Text style={[styles.house, styles.shadow]}>{title}</Text>
        <Text style={[styles.description, styles.shadow]}>{offerPercentage}% OFF</Text>

        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 250,
        borderRadius: 10,
        marginRight: 15,
        opacity: 0.9,
        backgroundColor: "#000",
        marginLeft: 15,
        padding: 12,
        marginTop: 20
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 15
    },
    description: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Montserrat_700Bold'
    },
    shadow: {
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 3,
        textShadowColor:'#000'
    }
});
