import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from './History';
import Craft from './Craft';
import Festivities from './Festivities';
import Living from './Living';
import Economic from './Economic';
import Nutrition from './Nutrition';

// createMaterialTopTabNavigator
const Tab = createMaterialTopTabNavigator();


const EthnicTabBar = () => {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: '#6a2b22', labelStyle: { fontSize: 12 }, tabStyle: {height: 60}, scrollEnabled: true}}>
            {/* History tab */}
            <Tab.Screen name="History">
                {() => <History name="history"/>}
            </Tab.Screen>
            {/* Craft tab */}
            <Tab.Screen name="Craft">
                {() => <Craft name="Craft"/>}
            </Tab.Screen>
            {/* Festivities tab */}
            <Tab.Screen name="Festivities">
                {() => <Festivities name="Festivities"/>}
            </Tab.Screen>
            {/* Living tab */}
            <Tab.Screen name="Living">
                {() => <Living name="Living"/>}
            </Tab.Screen>
            {/* Economic tab */}
            <Tab.Screen name="Economic">
                {() => <Economic name="Economic"/>}
            </Tab.Screen>
            {/* Nutrition tab */}
            <Tab.Screen name="Nutrition">
                {() => <Nutrition name="Nutrition"/>}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default EthnicTabBar