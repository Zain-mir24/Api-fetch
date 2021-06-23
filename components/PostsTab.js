import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";

function PostsTab(props) {
  const [show, setShow] = useState();
  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users/" +
        props.route.params.Id.toString() +
        "/posts"
    )
      .then((response) => response.json())
      .then((json) => setShow(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
      {
        <FlatList
          data={show}
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("PostDetail", { id: item.id })
                }
              >
                <Text
                  style={{
                    marginBottom: 10,
                    fontSize: 18,
                    color: "blue",
                    borderWidth: 1,
                    padding: 11,
                  }}
                >
              Title    {item.title}
                </Text>
              </TouchableOpacity>
           <View style={{flexDirection:"row"}}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  color: "blue",
                  borderWidth: 1,
                  padding: 11,
                }}
              >
             body   
              </Text>
              <Text  style={{
                  marginBottom: 10,
                  fontSize: 18,
                  color: "blue",
                  borderWidth: 1,
                  padding: 11,
                }}>
              {item.body}
              </Text>
              </View>
            </View>
          )}
        />
      }
    </View>
  );
}

export default PostsTab;
