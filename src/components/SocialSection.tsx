import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import SendButton from './SendButton'
import SocialCircle from './SocialCircle'
import { s, vs } from 'react-native-size-matters'
import { SendIcon } from '../assests/icons'

interface SocialSection {
    title: string
    icon: React.ReactNode
}
const SocialSection: FC<SocialSection> = ({ title, icon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                {icon}
            </View>
            <Text style={styles.text}>{title}</Text>
            <SendButton />
        </View>
    )
}

export default SocialSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E6E8',
        paddingVertical: vs(15)
    },
    text: {
        fontSize: s(12),
        color: '#8083A3',
        marginStart: s(14),
        flex: 1,
    },
    circle: {
        backgroundColor: '#fff',
        borderColor: '#E4E6E8',
        borderWidth: s(1),
        height: s(46),
        width: s(46),
        borderRadius: s(23),
        justifyContent: 'center',
        alignItems: 'center'
    }
})