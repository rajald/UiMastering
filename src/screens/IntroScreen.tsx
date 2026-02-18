import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FoodLogo from '../assests/FoodLogo'
import SunImage from '../assests/SunImage'
import Feather from '@expo/vector-icons/Feather';
import { vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <FoodLogo />
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                <Feather
                    name="arrow-right-circle"
                    size={32} color="#FF7622"
                    style={styles.arrow}
                />
            </TouchableOpacity>
            <SunImage style={styles.sunImage} />
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sunImage: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    arrow: {
        marginTop: vs(16)
    }
})