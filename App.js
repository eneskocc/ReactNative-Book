import React, { useState } from 'react';
import { View, TouchableOpacity, Button, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { SlideModal } from 'react-native-slide-modal';

import Swiper from './components/Swipers';
import Card from './components/Card';
import Login from './Screens/Login';

import Basket from './Screens/Basket';
function Feed() {
  return (
    <View>
      <View style={styles.swiper}>
        <Swiper />
      </View>
      <View style={styles.card}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </View>


  );
}

function Article() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Basket />
  );
}



function LoginScreen() {
  return (
    <Login />
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Feed} />
      <HomeStack.Screen name="Details" component={Article} />
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
        <Tab.Screen name="Home" component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={'black'} style={styles.icons} size={24} />
            ),
          }} />
        <Tab.Screen name="Search" component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-search" size={24} style={styles.icons} color="black" />
            ),
          }} />
        <Tab.Screen name=" " component={BasketStackScreen}
          options={{

            tabBarIcon: ({ color, size }) => (
              <View style={styles.iconsAdd}>
                <FontAwesome name="shopping-basket" size={26} color="white" />
                <Text style={styles.iconsAddText}>140</Text>
              </View>

            ),
          }} />
        <Tab.Screen name="Messages" component={SettingsScreen}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="message1" size={24} style={styles.icons} color="black" />
            ),
          }} />
        <Tab.Screen name="Settings" component={LoginScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="profile" size={24} style={styles.icons} color="black" />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  swiper: {
    height: 200,
  },
  card: {
    width: '100%',
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsAdd: {
    position: 'relative',
    width: 60,
    height: 60,
    backgroundColor: '#9DD6EB',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 6,
    marginBottom: 15,
  },
  iconsAddText: {
    color: '#fafafa',
    paddingTop: 4,
  }
});


