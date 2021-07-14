import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, Button, View, Text, Image, Dimensions, Alert } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

const CraftVideo = ({ videoData }) => {

    return (
        <View style={styles.videoContainer}>
            <YoutubePlayer
                videoId={videoData.videoId}
                webViewStyle={styles.video}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    videoContainer: {
        marginVertical: 10
    },
    video: {
        width: '100%',
        height: 200,
    },
})

export default CraftVideo