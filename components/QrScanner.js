import React from 'react'
import { StyleSheet, Dimensions, View} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

const QrScanner = ({ navigation, route }) => {
    // Function used by QRscanner
    const onSuccess = async e => {
        const {data} = e
        await navigation.navigate("Profile",{ qrData: data })
    }

    return (
        <View style={styles.container}>
            <QRCodeScanner
                onRead={onSuccess}
                showMarker={true}
                checkAndroid6Permissions={true}
                cameraStyle={{ height: Dimensions.get('window').height }}
                reactivate={true}
                reactivateTimeout={2000}
            />
        </View>
    )
}

// Component Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default QrScanner