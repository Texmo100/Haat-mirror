import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CraftTabTemplate from './CraftTabTemplate';


const CraftTabBar = ({ navigation, route }) => {
    // object destructuring
    const { qrData } = route.params
    const { tabs } = qrData

    // createMaterialTopTabNavigator
    const Tab = createMaterialTopTabNavigator()

    // TabRender function
    const tabRender = tabs.map(tab => <Tab.Screen key={tab.id} name={tab.title}>{() => <CraftTabTemplate tabData={tab} />}</Tab.Screen>)
    return(
        <Tab.Navigator tabBarOptions={{ activeTintColor: '#6a2b22', labelStyle: { fontSize: 12 }, tabStyle: { height: 60 }, scrollEnabled: true }}>
            {tabRender}
        </Tab.Navigator>
    )
}

export default CraftTabBar