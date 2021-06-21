import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View,FlatList } from "react-native";

function Screen2({navigation,route}) {
    const phone=route.params.Data
    return (
        <View>
        <Text>{phone}</Text>
        </View>
    )
}

export default Screen2
