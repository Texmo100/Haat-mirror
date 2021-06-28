import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EthnicTabTemplate from './EthnicTabTemplate';
import ethnicData from '../../data/EthnicData';

// createMaterialTopTabNavigator
const Tab = createMaterialTopTabNavigator();

// TabRender function

const tabRender = ethnicData.map(tab => <Tab.Screen key={tab.id} name={tab.title}>{() => <EthnicTabTemplate title={tab.title}/>}</Tab.Screen>)

const EthnicTabBar = () => {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: '#6a2b22', labelStyle: { fontSize: 12 }, tabStyle: {height: 60}, scrollEnabled: true}}>
            {tabRender}
        </Tab.Navigator>
    )
}

export default EthnicTabBar