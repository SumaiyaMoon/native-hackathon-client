import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeedHome from '../screens/FeedHome';
import AppProject from '../screens/AppProject';
import AppTask from '../screens/AppTask';
import AppChat from '../screens/AppChat';
import AppProfile from '../screens/AppProfile';
import AppAdd from '../screens/AppAdd';

const Tab = createBottomTabNavigator();

export default function TabBottom() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="FeedHome"
          component={FeedHome}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color}></Icon>
            ),
          }}
        />
        <Tab.Screen
          name="AppProject"
          component={AppProject}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: ({color, size}) => (
              <Icon name="folder" size={size} color={color}></Icon>
            ),
          }}
        />
        <Tab.Screen
          name="AppAdd"
          component={AppAdd}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: ({color, size}) => (
              <Icon name="add" size={size} color={color}></Icon>
            ),
          }}
        />
        {/* <Tab.Screen
          name="AppTask"
          component={AppTask}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: ({color, size}) => (
              <Icon name="add" size={size} color={color}></Icon>
            ),
          }}
        /> */}
        <Tab.Screen
          name="AppChat"
          component={AppChat}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: ({color, size}) => (
              <Icon name="sms" size={size} color={color}></Icon>
            ),
          }}
        />
        <Tab.Screen
          name="AppProfile"
          component={AppProfile}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: ({color, size}) => (
              <Icon name="person" size={size} color={color}></Icon>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
