import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function House({cover, description, price}) {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                source={cover}
                style={styles.cover}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>R$ {price}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 260,
        height: 80,
        backgroundColor: '#fff',
        elevation: 1,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10
    },
    cover: {
        width: 80,
        height: 80,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    content: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        height: '100%',
        width: '70%'
    },
    description: {
        fontSize: 10,
        fontFamily: 'Montserrat_500Medium'
    },
    price: {
        fontSize: 14,
        fontFamily: 'Montserrat_700Bold'
    }
});
