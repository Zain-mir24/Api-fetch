import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View,FlatList } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
function Screen2({navigation,route}) {
    const phone=route.params.Data
    return (
      <Tab.Navigator>

          <Tab.Screen name="UserDetails"/>
              </Tab.Navigator>
    )
}


export default Screen2
