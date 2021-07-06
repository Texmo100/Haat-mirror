import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView, Dimensions} from 'react-native';
import icon from '../../images/icon-02.png'

const CraftTabTemplate = (props) => {
    const { tabData } = props

    return(
        <View style={styles.container}>
            <ScrollView>
                {/* ---- headerCard ----*/}
                <View style={styles.headerCard}>
                    <View style={styles.iconContainer}>
                        <Image source={icon} style={styles.headerCardIcon}/>
                    </View>
                </View>
                {/* ---- contentCard ----*/}
                <View style={styles.contentCard}>
                    <Text style={styles.titleCard}>{tabData.title}</Text>
                </View>
                {/* ---- footerCard ----*/}
                <View style={styles.footerCard}>
                    <Text style={styles.footerText}>{tabData.title}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

// ---- Get the real screen sizes (Width and Height)
const {screenWidth, screenHeight} = Dimensions.get('window');

// ---- Styles Section
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        width: screenWidth
    },
    headerCard: {
        height: 50,
        backgroundColor: '#b26231',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        marginHorizontal: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 70,
        width: 70,
        borderRadius: 50,
        marginBottom: -55
    },
    headerCardIcon: {
        height: '90%',
        width: '80%'
    },
    contentCard: {
        alignItems: 'center',
        minHeight: 500,
        maxHeight: '100%',
        marginTop: 40,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#b26231',
        borderRadius: 10
    },
    titleCard: {
        fontSize: 30,
        fontWeight: '300',
        textTransform: 'uppercase',
        color: '#2b2b2b',
        marginVertical: 10
    },
    footerCard:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#f1f1f1',
        marginTop: 10,
        marginHorizontal: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    footerText: {
        color: '#b26231'
    }
})

export default CraftTabTemplate