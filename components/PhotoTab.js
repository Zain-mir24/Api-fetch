import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right
} from "native-base";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

function PhotoTab(props,{ navigation, route }) {
  const [show, setShow] = useState();
  const id =props.route.params.id
  console.log(id)
    useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users/"+id+"/albums" 
      //   +
     
    )
      .then((response) => response.json())
      .then((json) => setShow(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Container>
    <Header />
    <Content>
      {
        <FlatList
        data={show}
        renderItem={({ item, index }) =>(
          <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri:item.thumbnailUrl}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
         
          
        </Card>
      
        
        )} />}
    </Content>
  </Container>
    
  );
}

export default PhotoTab;
