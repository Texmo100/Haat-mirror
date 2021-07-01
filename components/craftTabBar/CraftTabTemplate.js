import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView, Dimensions} from 'react-native';

const CraftTabTemplate = (props) => {
    const { tabData } = props

    return(
        <View style={styles.container}>
            <Text>{tabData.title}</Text>
        </View>
    )
}

// ---- Get the real screen sizes (Width and Height)
const { screenWidth } = Dimensions.get('window');

// ---- Styles Section
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default CraftTabTemplate