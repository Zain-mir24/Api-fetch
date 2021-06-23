import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons,MaterialIcons,FontAwesome} from '@expo/vector-icons';
import AlbumTab from "./AlbumTab";
import userDetail from "./userDetail";
import PostsTab from "./PostsTab";
import TodoTab from "./TodoTab";
const Tab = createMaterialBottomTabNavigator();
function Screen2({ navigation, route }) {
  const IID = route.params.ID;
  const allData=route.params.Data
  const data= allData.filter((item)=>item.id==IID)
  console.log(data)
  return (
    <Tab.Navigator 
    initialRouteName="UserDetails"
    activeColor="white"
    inactiveColor="black"
    >
      <Tab.Screen name="UserDetails" initialParams={{alldata:data }} component={userDetail}    options={{
        tabBarIcon:({ color, size }) => {
          return <MaterialCommunityIcons name="account-details" size={24} color={color} />
        }
      }}/>
      <Tab.Screen name="Album" initialParams={{Id:IID }}  component={AlbumTab}  options={{
        tabBarIcon:({ color, size }) => {
          return <MaterialCommunityIcons name="album" size={24} color={color} />
        }
      }}/>
      <Tab.Screen name ="Posts" initialParams={{Id:IID }}component={PostsTab}  options={{
        tabBarIcon:({ color, size }) => {
          return <MaterialIcons name="local-post-office" size={24} color={color} />
        }
      }} />
      <Tab.Screen name ="Todos" initialParams={{Id:IID }}component={TodoTab} 
      options={{
        tabBarIcon:({ color, size }) => {
          return <FontAwesome name="user" size={24} color={color}/>
        }
      }}/>
     
    </Tab.Navigator>
  );
}

export default Screen2;
