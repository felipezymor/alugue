import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent from '../components/Swiper';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent />
            </View>

            <View style={styles.headerContent}>
                <View style={{width: '65%'}}>
                    <Text style={styles.house}>Casa de Praia</Text>
                </View>
                <View style={{width: '35%'}}>
                    <Text style={styles.rating}>Avaliações:</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Stars 
                        default={4}
                        count={5}
                        starSize={20}
                        fullStar={<Ionicons name='md-star' size={24} style={styles.myStarStyle} />}
                        emptyStar={<Ionicons name='md-star-outline' size={24} style={styles.myStarStyle} />}
                        halfStar={<Ionicons name='md-star-half' size={24} style={styles.myStarStyle} />}
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.price}>R$ 1.250,00</Text>
            <Text style={styles.description}>Casa nova a uma quadra do mar, lugar seguro e monitorado 24h. Pronta pra morar.</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35}}>
                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/house1.jpg')}
                    style={{width: 100, height: 100, borderRadius: 6}}
                    />
                </View>
                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/house2.jpg')}
                    style={{width: 100, height: 100, borderRadius: 6}}
                    />
                </View>
                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/house3.jpg')}
                    style={{width: 100, height: 100, borderRadius: 6}}
                    />
                </View>
                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/house4.jpg')}
                    style={{width: 100, height: 100, borderRadius: 6}}
                    />
                </View>
                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/house5.jpg')}
                    style={{width: 100, height: 100, borderRadius: 6}}
                    />
                </View>
                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/house6.jpg')}
                    style={{width: 100, height: 100, borderRadius: 6}}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    swiperContent: {
        flexDirection: 'row',
        height: 340,
        width: '100%'
    },
    headerContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        color: '#4f4a4a',
        fontSize: 18
    },
    rating: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 10,
        color: '#4f4a4a'

    },
    myStarStyle: {
        color: '#e7a748',
        backgroundColor: 'transparent'
    },
    price: {
        paddingHorizontal: 20,
        color: '#000',
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold'
    },
    description: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_300Light',
        color: '#999',
        lineHeight: 20,
        marginTop: 20
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 6,
        marginRight: 10
    }
});
