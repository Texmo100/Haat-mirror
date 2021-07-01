import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import EthnicTabBar from './ethnicTabBar/EthnicTabBar';
import ProfileScreen from './ProfileScreen';
import QrScanner from './QrScanner'

// ---- Create a stack variable
const Stack = createStackNavigator();

// ---- Default function bar styles
const optionsScreenDefault = (titleScreen) => {
  return {
    title: titleScreen,
    headerStyle: {
      backgroundColor: '#6a2b22',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}

// ---- Main function
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={optionsScreenDefault('Haat')}
        />
        {/* EthnicTabBar */}
        <Stack.Screen
          name="EthnicTabBar"
          component={EthnicTabBar}
          options={optionsScreenDefault('Ethnicity')}
        />
        {/* QrScanner Screen */}
        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options={optionsScreenDefault('QrScanner')}
        />
        {/* Profile Screen */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={optionsScreenDefault('profile')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack