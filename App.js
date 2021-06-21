import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './components/Screen1';

export default function App() {
  return (
    <View style={styles.container}>
      <myDrawer />
    </View>
  );
}
const Stack = createStackNavigator();
function myDrawer(){

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
