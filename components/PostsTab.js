import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    StyleSheet,
   SafeAreaView,
    View,
    FlatList,
    TouchableOpacity,Text
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
                        <TouchableOpacity>
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
                      )}
                    />
                  }
        </View>
    )
}

export default PostsTab
