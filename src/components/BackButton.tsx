import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo';

const BackButton = () => {
    return (
        <TouchableOpacity style={styles.background}>
            <Entypo name="chevron-left" size={s(16)} color="black" />
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ECF0F4',
        height: s(32),
        width: s(32),
        borderRadius: s(16),
        justifyContent: "center",
        alignItems: 'center'
    }
})