import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import Feather from '@expo/vector-icons/Feather';

const AddButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Feather name="plus" size={24} color="#FF7622" />
            <Text style={{ color: '#FF7622', fontSize: s(14), fontWeight: '700', marginStart: s(10) }}>Add New</Text>
        </TouchableOpacity>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: s(10),
        borderWidth: s(2),
        borderColor: "#F0F5FA",
        paddingVertical: vs(16),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vs(15),
        flexDirection: 'row'
    }
})