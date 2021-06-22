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

const userDetail = (props) => {
  const myData = props.route.params.alldata;
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text style={styles.Text}>
                companyDetails:
                {myData[0].company.name}
                {myData[0].company.bs}
                {myData[0].company.catchPhrase}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card> 
          <CardItem>
            <Body>
              <Text style={styles.Text}>
                user address
                {myData[0].address.street}
                {myData[0].address.suit}
                {myData[0].address.city}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
// user details
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    flex: 1,
    flexDirection: "column",
    padding: 1,
    letterSpacing: 1,
  },
});

export default userDetail;
