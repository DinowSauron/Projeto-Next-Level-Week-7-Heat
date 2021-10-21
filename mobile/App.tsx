
import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { Home } from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";
import AppLoading from 'expo-app-loading';
import { AuthProvider } from "./src/hooks/auth"


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <AuthProvider>
      <StatusBar 
        style="light"
        translucent
        backgroundColor="transparent"
      />
      
      <Home />
    </AuthProvider>
  );
}
