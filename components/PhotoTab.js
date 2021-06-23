import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  List,
  ListItem,
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
} from "react-native";

function PhotoTab(props, { navigation, route }) {
  const [show, setShow] = useState();
  const id = props.route.params.id;
  console.log(id);
  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users/" + id + "/photos"
      //   +
    )
      .then((response) => response.json())
      .then((json) => setShow(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={show}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
        
          return (
            <List>
              <ListItem thumbnail>
                <Left>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("Albumphoto", { url: item.url })
                    }
                  >
                    <Thumbnail square source={{ uri: item.thumbnailUrl }} />
                  </TouchableOpacity>
                </Left>
                <Body>
                  <Text style={{ color: "gray" }} note numberOfLines={2}>
                    {item.title}
                  </Text>
                </Body>
              </ListItem>
            </List>
          );
        }}
      />
    </View>
  );
}

export default PhotoTab;
