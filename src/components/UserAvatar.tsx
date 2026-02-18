import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const UserAvatar = () => {
    return (
        <View>
            <Image source={{
                uri: "https://fastly.picsum.photos/id/291/200/300.jpg?hmac=5htP1HYHWPOMv5wbTtTsh6GjRk__SPxuXIv6gHLBHHg"
            }}
                style={styles.avatar} />
        </View>
    )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar: {
        height: s(32),
        width: s(32),
        borderRadius: s(16)
    }
})