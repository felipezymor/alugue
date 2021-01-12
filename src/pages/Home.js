import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';
import HomeSwiper from '../components/HomeSwiper';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name='search' size={24} color='#000' />
                    <TextInput 
                    placeholder='O que está procurando?'
                    style={styles.input}/>
                </View>
            </View>

            <View style={styles.homeSlider}>
                <HomeSwiper />
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <New 
                cover={require('../assets/house1.jpg')}
                name='Casa de Praia'
                description='Casa nova a uma quadra do mar, lugar seguro e monitorado 24h.'
                price='1.200,00'
                onPress={() => navigation.navigate('details')}
                />

                <New 
                cover={require('../assets/house2.jpg')}
                name='Casa Floripa'
                description='Casa nova a uma quadra do mar, lugar seguro e monitorado 24h.'
                price='980,00'
                onPress={() => navigation.navigate('details')}
                />

                <New 
                cover={require('../assets/house3.jpg')}
                name='Rancho SP'
                description='Casa nova a uma quadra do mar, lugar seguro e monitorado 24h.'
                price='2.600,00'
                onPress={() => navigation.navigate('details')}
                />
            </ScrollView>

            <View style={{flexDirection: 'row', marginVertical: 10, alignItems: 'center'}}>
                <Text style={[styles.title, {marginTop: 10}]}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <House 
                cover={require('../assets/house4.jpg')}
                description='Duplex em Nova Lima pronto pra morar'
                price='950,00'/>
                <House 
                cover={require('../assets/house5.jpg')}
                description='Casa em Feira de Santana com 4 quartos'
                price='1.400,00'/>
                <House 
                cover={require('../assets/house6.jpg')}
                description='Apartamento em Valinhos com sala para dois ambientes'
                price='2.100,00'/>
            </ScrollView>

            <Text style={[styles.title, {marginTop: 10}]}>Dica do dia</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom: 15}}>
                <Recommended 
                cover={require('../assets/house2.jpg')}
                title='Casa em Floripa'
                offerPercentage='25'
                />
                <Recommended 
                cover={require('../assets/house4.jpg')}
                title='Casa em Floripa'
                offerPercentage='25'
                />
                <Recommended 
                cover={require('../assets/house6.jpg')}
                title='Casa em Floripa'
                offerPercentage='25'
                />
            </ScrollView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    homeSlider: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 20
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 10,
        height: 37       
    },
    input: {
        fontFamily: 'Montserrat_300Light',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }

});
