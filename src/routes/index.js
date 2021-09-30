import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import StackRoutes from './StackRoutes';
import Episodes from '../screens/Episodes';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#090A0E",
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: "#E72F49",
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#FFFFFF",
      }}
    >
      <Drawer.Screen
        name="Personagens"
        component={StackRoutes}
        options={{
          title: "Personagens",
          drawerIcon: ({ focused, color, size }) => (
            <Feather
              name={focused ? 'layers' : 'life-buoy'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Episodios"
        component={Episodes}
        options={{
          title: "Episodios",
          drawerIcon: ({ focused, color, size }) => (
            <Feather
              name={focused ? 'layers' : 'life-buoy'}
              color={color}
              size={size}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}