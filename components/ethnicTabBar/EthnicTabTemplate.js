import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView, Dimensions} from 'react-native';

const EthnicTabTemplate = (props) => {
    const { tabData } = props

    return(
        <View style={styles.container}>
            <ScrollView>
                {/* Tittle Tab */}
                <View style={styles.sectionTitle}>
                    <Text style={styles.title}>{tabData.title}</Text>
                </View>

                {/* Image Tab */}
                <View style={styles.sectionImage}>
                    <Image
                        style={styles.image}
                        source={require('../../images/image-01.jpg')}
                    />
                </View>

                {/* Description tab */}
                <View style={styles.sectionDesc}>
                    <Text style={styles.description}>{tabData.desc}</Text>
                </View>
            </ScrollView>
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
    },
    sectionTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: screenWidth,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 25,
        textTransform: 'uppercase'
    },
    sectionImage:{
        height: 400,
        width: screenWidth,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    },
    sectionDesc: {
        minHeight: 200,
        maxHeight: '100%',
        width: screenWidth,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    description: {
        fontSize: 15,
        textAlign: 'justify',
        lineHeight: 25
    }
})

export default EthnicTabTemplate