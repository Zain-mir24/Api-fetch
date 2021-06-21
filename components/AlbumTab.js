import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from "react-native";

function AlbumTab(props) {
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
    <View> 
        {<FlatList 
            data={show}
            renderItem={({ item,index }) => (
                <TouchableOpacity >
                <Text style={{marginBottom:10,fontSize:18,color:'#6b0505'}}>{item.title} </Text>
                 </TouchableOpacity>
              )}
              />
        }
        
           </View>
  );
}

export default AlbumTab;
