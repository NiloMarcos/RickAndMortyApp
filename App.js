import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { useFonts } from 'expo-font';
import { 
  Poppins_400Regular, 
  Poppins_400Regular_Italic,
  Poppins_700Bold, 
  Poppins_700Bold_Italic } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_400Regular_Italic,
    Poppins_700Bold, 
    Poppins_700Bold_Italic
  });

  if(!fontsLoaded){
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <StatusBar visibility={false} />
        <Routes />
      </NavigationContainer>
    );
  }
}
