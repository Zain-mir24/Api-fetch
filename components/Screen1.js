import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View,FlatList,TouchableOpacity} from "react-native";
import Screen2 from "./Screen2";

function Screen1({navigation}) {
    const [data,setData]=useState("")
     
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then((json)=>setEmail(json.email))
      .catch((error) => console.error(error))

  }, []);
  return (
    <View>
        {
            <FlatList 
            data={data}
            renderItem={({ item,index }) => (
                <TouchableOpacity onPress={()=>navigation.navigate("Screen2")}>
                <Text style={{marginBottom:10,fontSize:18,color:'#6b0505'}}> {item.email} {item.username}</Text>
                 </TouchableOpacity>
              )}
            />}
         
         
    </View>
  );
}
        
     

export default Screen1;
