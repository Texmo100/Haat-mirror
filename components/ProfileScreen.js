import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
    const { qrData } = route.params

    return <Text>{qrData}</Text>;
}

export default ProfileScreen