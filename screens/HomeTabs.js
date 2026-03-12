import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';

import GcashHome from './GcashHome';

const Tab = createBottomTabNavigator();

const Placeholder = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{title}</Text>
  </View>
);

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 10, backgroundColor: '#ffffff', borderTopWidth: 1, borderTopColor: '#e0e0e0' },
        tabBarActiveTintColor: '#005CEE',
        tabBarInactiveTintColor: '#888888',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={GcashHome} 
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home-outline" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Inbox" 
        component={() => <Placeholder title="Inbox" />} 
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="message-outline" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="QR" 
        component={() => <Placeholder title="QR" />} 
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 10, marginTop: -20, borderWidth: 1, borderColor: '#e0e0e0', shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 3, elevation: 5, width: 55, height: 55, justifyContent: 'center', alignItems: 'center' }}>
               <Icon name="qrcode-scan" color="#005CEE" size={28} />
            </View>
          ),
          title: 'QR'
        }}
      />
      <Tab.Screen 
        name="Transactions" 
        component={() => <Placeholder title="Transactions" />} 
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="receipt" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={() => <Placeholder title="Profile" />} 
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="account-outline" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}
