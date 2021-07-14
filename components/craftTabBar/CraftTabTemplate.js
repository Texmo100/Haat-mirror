import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView, Dimensions } from 'react-native';
import CardProcess from './CardProcess';
import CraftVideo from './CraftVideo';
import icon from '../../images/icon-02.png'

const CraftTabTemplate = ({ tabData }) => {
    if (tabData.title === 'process') {
        const { procedure } = tabData
        const CardsRender = procedure.map(process => <CardProcess key={process.id} cardData={process} counter={procedure.length}/>)

        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* ---- headerCard ----*/}
                    <View style={styles.headerCard}>
                        <View style={styles.iconContainer}>
                            <Image source={icon} style={styles.headerCardIcon} />
                        </View>
                    </View>
                    {/* ---- contentCard ----*/}
                    <View style={styles.contentCard}>
                        <Text style={styles.titleCard}>{tabData.title}</Text>
                        <View style={styles.cardsContainer}>
                            {CardsRender}
                        </View>
                    </View>
                    {/* ---- footerCard ----*/}
                    <View style={styles.footerCard}>
                        <Text style={styles.footerText}>{tabData.title}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    } else if(tabData.title === 'videos'){
        const { videos } = tabData
        const videosRender = videos.map(video => <CraftVideo key={video.id} videoData={video}/>)

        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* ---- headerCard ----*/}
                    <View style={styles.headerCard}>
                        <View style={styles.iconContainer}>
                            <Image source={icon} style={styles.headerCardIcon} />
                        </View>
                    </View>
                    {/* ---- contentCard ----*/}
                    <View style={styles.contentCard}>
                        <Text style={styles.titleCard}>{tabData.title}</Text>
                        <View style={styles.cardsContainer}>
                            {videosRender}
                        </View>
                    </View>
                    {/* ---- footerCard ----*/}
                    <View style={styles.footerCard}>
                        <Text style={styles.footerText}>{tabData.title}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }else{
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* ---- headerCard ----*/}
                    <View style={styles.headerCard}>
                        <View style={styles.iconContainer}>
                            <Image source={icon} style={styles.headerCardIcon} />
                        </View>
                    </View>
                    {/* ---- contentCard ----*/}
                    <View style={styles.contentCard}>
                        <Text style={styles.titleCard}>{tabData.title}</Text>

                        {/* Image Tab */}
                        <View style={styles.sectionImage}>
                            <Image
                                style={styles.image}
                                source={require('../../images/image-01.jpg')}
                            />
                        </View>

                        {/* Description tab */}
                        <Text style={styles.description}>{tabData.desc}</Text>
                    </View>
                    {/* ---- footerCard ----*/}
                    <View style={styles.footerCard}>
                        <Text style={styles.footerText}>{tabData.title}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

// ---- Get the real screen sizes (Width and Height)
const { screenWidth, screenHeight } = Dimensions.get('window');

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
        marginTop: 40,
        padding: 10,
        marginHorizontal: 10,
    },
    titleCard: {
        fontSize: 30,
        fontWeight: '300',
        textTransform: 'uppercase',
        color: '#2b2b2b',
        marginVertical: 10
    },
    // ---- process tab content styles section
    sectionImage: {
        width: '100%',
        height: 400,
        marginVertical: 10
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    description: {
        fontSize: 15,
        textAlign: 'justify',
        lineHeight: 25
    },
    cardsContainer: {
        width: '100%',
    },
    // ----
    footerCard: {
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
        color: '#b26231',
        textTransform: 'capitalize'
    }
})

export default CraftTabTemplate