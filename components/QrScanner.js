import React from 'react'
import { StyleSheet, Dimensions, View, ALert, Alert} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import craftData from '../data/craftData'

const QrScanner = ({ navigation, route }) => {
    // Function used by QRscanner
    const onSuccess = async e => {
        const {data} = e

        if(kitsuneCentinel(data).flag){
            const { craftData } =  kitsuneCentinel(data)
            await navigation.navigate("CraftTabBar", { qrData: craftData })
        }else{
            Alert.alert("Sorry, this craft doesn't exit in the database")
        }
        
    }

    // kitsuneCentinel Function to search craft by id
    const kitsuneCentinel = objective => {
        let flag = false
        let box = {}

        craftData.forEach(craft => {
            if(craft.id === objective){
                box = {
                    flag: true,
                    craftData: craft
                }
            }
        })

        return box
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