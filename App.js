import React, { useState ,useContext, createContext } from "react";

import {
  View,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


import Login from "./Screens/Login";
import Basket from "./Screens/Basket";
import BookDetay from "./Screens/BookDetay";
import Books from "./Screens/Books";
import Search from "./Screens/Search";
import Home from "./Screens/Home";



function HomeScreen() {
  return (
    <Home />
  );
}

function Article() {
  return <Basket />;
}
function Details(props) {
  return <BookDetay props={props} />;
}

function BooksScreen() {
  return <Books />;
}

function SearchScreen() {
  return <Search />;
}

function LoginScreen() {
  return <Login />;
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={Details} />
      <HomeStack.Screen name="Books" component={BooksScreen} />
      <HomeStack.Screen name="Art" component={Article} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={LoginScreen} />
    </SettingsStack.Navigator>
  );
}
const BasketStack = createNativeStackNavigator();

function BasketStackScreen() {
  return (
    <BasketStack.Navigator>
      <BasketStack.Screen name="Basket" component={Article} />
      <BasketStack.Screen name="Details" component={LoginScreen} />
    </BasketStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
 
  
  return (  
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home"
                color={"black"}
                style={styles.icons}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="ios-search"
                size={24}
                style={styles.icons}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name=" "
          component={BasketStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <View style={styles.iconsAdd}>
                <FontAwesome name="shopping-basket" size={26} color="white" />
                <Text style={styles.iconsAddText}>140</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Message",
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name="message1"
                size={24}
                style={styles.icons}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={LoginScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name="profile"
                size={24}
                style={styles.icons}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
 
  iconsAdd: {
    position: "relative",
    width: 60,
    height: 60,
    backgroundColor: "#9DD6EB",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 6,
    marginBottom: 15,
  },
  iconsAddText: {
    color: "#fafafa",
    paddingVertical: 10,
  }
});
