import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity} from 'react-native';
import map from '../images/sonora-map.png'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* HomeScreen's Title */}
            
            <Text style={styles.title}>etnias de sonora</Text>
            {/* Map image background */}
            <ImageBackground source={map} style={styles.map}>
            </ImageBackground>

            {/* Scan Button */}
            <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('Profile', {name: 'isaac'})}>
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
    textButton: {
        fontSize: 15,
        color: '#e8e8e8'
    }
})

export default HomeScreen