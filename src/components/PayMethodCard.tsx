import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { s, vs } from 'react-native-size-matters'
import Feather from '@expo/vector-icons/Feather';

interface PayMethodCardProps {
    isSelected?: boolean,
    title: string,
    icon: ReactNode,
    onPress?: () => void
}
const PayMethodCard: FC<PayMethodCardProps> = ({ isSelected = false, title, icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
            {isSelected && <View style={styles.checkMarkContainer}>
                <Feather name="check" size={s(12)} color="#fff" />
            </View>}
            <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
                {icon}
            </View>
            <Text style={{
                marginTop: vs(4),
                color: "#464E57",
                fontSize: s(14),
                textAlign: "center"
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default PayMethodCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#F0F5FA",
        borderRadius: s(10),
        width: s(85),
        height: s(72),
        alignItems: "center",
        justifyContent: "center"
    },
    selectedCardStyle: {
        backgroundColor: "#fff",
        borderColor: "#FF7622",
        borderRadius: s(10),
        borderWidth: s(2)
    },
    checkMarkContainer: {
        backgroundColor: "#FF7622",
        borderColor: '#fff',
        borderWidth: s(2),
        height: s(24),
        width: s(24),
        borderRadius: s(12),
        position: "absolute",
        zIndex: 1,
        top: s(-8),
        right: s(-8),
        alignItems: "center",
        justifyContent: "center"
    }
})