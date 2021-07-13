import React from 'react'
import { StyleSheet, Button, View, Text, Image, Dimensions } from 'react-native';

const CardProcess = ({cardData, counter}) => {
    return (
        <View style={styles.cardProcess}>
            {/* ---- card image ----*/}
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../images/image-01.jpg')}
                />
            </View>
            {/* ---- card Title / Indicator ---- */}
            <View style={styles.titleIndicatorContainer}>
                <Text style={styles.indicator}>Process {cardData.id}/{counter}</Text>
                <Text style={styles.title}>{cardData.processTitle}</Text>
            </View>
            {/* ---- card description ---- */}
            <Text style={styles.cardDesc}>{cardData.desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardProcess: {
        borderWidth: 1,
        borderColor: '#aeaeae',
        borderRadius: 10,
        marginVertical: 10
    },
    imageContainer: {
        width: '100%',
        height: 300,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    titleIndicatorContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    indicator: {
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: '#e59852',
        padding: 5,
        borderRadius: 50
    },
    title: {
        fontSize: 25,
        textTransform: 'capitalize'
    },
    cardDesc: {
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 15,
        textAlign: 'justify',
        lineHeight: 25
    },
})

export default CardProcess