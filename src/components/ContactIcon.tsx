import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ContactIcon = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ContactUsScreen")}>
            <Feather name="phone" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default ContactIcon

const styles = StyleSheet.create({})