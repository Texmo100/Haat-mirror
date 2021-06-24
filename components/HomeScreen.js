import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import map from '../images/sonora-map.png'
import etnicIcon from '../images/icon-01.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Status bar */}
            <StatusBar
                backgroundColor={'#4F211A'}
                barStyle={'light-content'}
            />

            {/* HomeScreen's Title */}
            <Text style={styles.title}>etnias de sonora</Text>

            {/* Map image background */}
            <ImageBackground source={map} style={styles.map}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile', { name: 'isaac' })}>
                    <Image source={etnicIcon} style={styles.icon} />
                </TouchableOpacity>
            </ImageBackground>

            {/* Scan Button */}
            <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('Profile', { name: 'isaac' })}>
                <Icon name="qr-code-2" style={styles.buttonIcon}/>
                <Text style={styles.textButton}>Escanear QR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    title: {
        flex: 1,
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#2b2b2b',
    },
    map: {
        flex: 10,
        height: 400,
        width: '100%',
        resizeMode: "cover",
        position: 'relative'
    },
    iconContainer: {
        position: 'absolute',
        top: 160,
        left: 110,
        width: 60,
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 50,
    },
    icon: {
        width: '100%',
        height: '100%',
    },
    scanButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        backgroundColor: '#1591e6',
        borderRadius: 50,
    },
    buttonIcon: {
        fontSize: 30,
        color: '#e8e8e8',
        marginRight: 10
    },
    textButton: {
        fontSize: 15,
        color: '#e8e8e8'
    }
})

export default HomeScreen