import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function New({onPress, cover, name, description, price}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image 
            source={cover}
            style={styles.cover}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.dot} />
                <Text style={styles.badge}>Novo!</Text>
            </View>

            <Text style={styles.description}>{description}</Text>

            <View style={styles.footer}>
                <View style={{width: '80%'}}>
                    <Text style={styles.price}>R$ {price}</Text>
                </View>
                <View style={{width: '20%'}}>
                    <Ionicons name='ios-add-circle' size={24} />
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
        height: 250,
        width: 200,
        elevation: 1,
        borderRadius: 10,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    cover: {
        width: 200,
        height: 110,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    content: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        color: '#4f4a4a'
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: 'red',
        marginHorizontal: 4
    },
    badge: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 10,
        color: 'red',
    },
    description: {
        fontFamily: 'Montserrat_300Light',
        fontSize: 11,
        color: '#4f4a4a',
        paddingHorizontal: 15
    },
    footer: {
        flexDirection: 'row',
        top: 5,
        alignItems: 'center',
        width: '100%'
    },
    price: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 15,
        paddingHorizontal: 15
    }
});
