import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AlbumTab from "./AlbumTab";
import userDetail from "./userDetail";
import PhotoTab from "./PhotoTab";
const Tab = createMaterialBottomTabNavigator();
function Screen2({ navigation, route }) {
  const IID = route.params.ID;
  const allData=route.params.Data
  const data= allData.filter((item)=>item.id==IID)
  console.log(data)
  return (
    <Tab.Navigator 
    initialRouteName="UserDetails"
    activeColor="purple"
    inactiveColor="red"
    barStyle={{backgroundColor:"#694fad"}}>
      <Tab.Screen name="UserDetails" initialParams={{alldata:data }} component={userDetail} />
      <Tab.Screen name="Album" initialParams={{Id:IID }}  component={AlbumTab} />
      <Tab.Screen name ="Photo" initialParams={{Id:IID }}component={PhotoTab} />
    </Tab.Navigator>
  );
}

export default Screen2;
