import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_300Light, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Routes from './src/router';

export default function App() {

  let [fontsLoaded] = useFonts({Montserrat_300Light, Montserrat_500Medium, Montserrat_700Bold});

  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" translucent={false} />
      <Routes />
    </>
  );
}


