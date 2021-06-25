import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

const Festivities = (props) => {
    return(
        <View style={styles.container}>
            <Text>{props.name} tab</Text>
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

export default Festivities