import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

function Albumphoto(props,{route}) {
const Url=props.route.params.url
console.log(Url)
  return (
    <View>
  <Image  source={{
          uri: Url,
        }}>

  </Image>
    </View>
  );
}

export default Albumphoto;
