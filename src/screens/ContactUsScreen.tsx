import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from '../components/UserAvatar'
import BackButton from '../components/BackButton'
import { s, vs } from 'react-native-size-matters'
import SocialSection from '../components/SocialSection'
import { FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

const ContactUsScreen = () => {
    return (
        <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
            <View style={styles.header}>
                <BackButton />
                <UserAvatar />
            </View>
            <Text style={styles.screenTitle}>Contact Us</Text>
            <View style={styles.socialContainer}>
                <Text style={styles.socialTitle}>Social Media Platforms</Text>
                <SocialSection icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />} title={"WhatsApp"} />
                <SocialSection icon={<AntDesign name="twitter" size={24} color="#178AD9" />} title={"Twitter"} />
                <SocialSection icon={<Entypo name="instagram" size={24} color="#178AD9" />} title={"Instagram"} />
                <SocialSection icon={<FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />} title={"Snap Chat"} />
                <SocialSection icon={<FontAwesome5 name="tiktok" size={24} color="#178AD9" />} title={"Tik Tok"} />
            </View>
        </View>
    )
}

export default ContactUsScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    screenTitle: {
        fontSize: s(30),
        fontWeight: '600',
        marginStart: s(19),
        marginTop: s(20)
    },
    socialTitle: {
        fontSize: s(16),
        fontWeight: '600'
    },
    socialContainer: {
        backgroundColor: '#F5F5FA',
        borderRadius: s(14),
        paddingHorizontal: s(18),
        paddingVertical: s(20),
        marginTop: vs(22)
    }
})