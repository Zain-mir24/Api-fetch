import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from "react-native";


const userDetail=(props)=>{
    const myData=props.route.params.alldata
    return(
        <View>
            <Text>
              {myData[0].company.name}
              {myData[0].company.bs}
            </Text>
            
        </View>
    )

}

export default userDetail
