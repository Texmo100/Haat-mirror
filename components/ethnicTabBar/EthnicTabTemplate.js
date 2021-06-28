import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

const EthnicTabTemplate = (props) => {
    return(
        <View style={styles.container}>
            <Text>{props.title} tab</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EthnicTabTemplate