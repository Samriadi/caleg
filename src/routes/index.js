import { View, Text } from 'react-native'
import React from 'react'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Login from '../view/Login';

import Home from '../view/Home';
import DataCalon from '../view/DataCalon';
import DataTps from '../view/DataTps';

import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MainScreen(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="red"
        barStyle={{ backgroundColor: 'white' }}
        shifting={false}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarBadge:false,
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="DataCalon"
          component={DataCalon}
          options={{
            tabBarLabel: 'Data Calon',
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="DataTps"
          component={DataTps}
          options={{
            tabBarLabel: 'Data TPS',
            tabBarIcon: ({ color }) => (
              <Icon name="cube" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
}

const NavigationRoutes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRoutes