import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    StyleSheet,
   SafeAreaView,
    View,
    FlatList,
    TouchableOpacity,
    Text
  } from "react-native";
import { Item } from "native-base";

function PostDetail(props) {
    const [show, setShow] = useState();
    const postid=props.route.params.id
    useEffect(() => {
    fetch( "https://jsonplaceholder.typicode.com/users/"+postid+"/comments")
    .then((response) => response.json())
      .then((json) => setShow(json))
      .catch((error) => console.error(error));
    }, []);
    console.log(postid)
    return (
        <View>
        {
                    <FlatList
                      data={show}
                     
                      renderItem={({ item, index }) => (
                        <View>
                        
                          <Text
                            style={{
                              marginBottom: 10,
                              fontSize: 18,
                              color: "#6b0505",
                            }}
                          >
                            {item.name}
                        
                          </Text>
                         
                         
                         
                     
                          </View>
                        
                      )}
                    />
                  }
        </View>
    )
}

export default PostDetail
