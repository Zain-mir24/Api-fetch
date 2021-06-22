import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
} from "native-base";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PhotoTab from "./PhotoTab";
function AlbumTab(props,{route,navigation}) {
  const [show, setShow] = useState();
  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users/" +
        props.route.params.Id.toString() +
        "/albums"
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
            renderItem={({ item, index }) => (
              <Card>
                <CardItem>
                  <Body>
                    <SafeAreaView>
                      <TouchableOpacity onPress={()=>props.navigation.navigate("PhotoTab",{   ID:item.id    })}>
                        <Text
                          style={{
                            marginBottom: 10,
                            fontSize: 18,
                            color: "#6b0505",
                          }}
                        >
                          {item.title}{" "}
                        </Text>
                      </TouchableOpacity>
                    </SafeAreaView>
                  </Body>
                </CardItem>
              </Card>
            )}
          />
        }
      </Content>
    </Container>
  );
}

export default AlbumTab;
