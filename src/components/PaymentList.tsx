import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CashIcon, MasterCardIcon, PayPalIcon, VisaIcon } from '../assests/icons'
import PayMethodCard from './PayMethodCard'
import { s, vs } from 'react-native-size-matters'

const PaymentMethods = [
    { label: "Cash", icon: <CashIcon /> },
    { label: "Visa", icon: <VisaIcon /> },
    { label: "Mastercard", icon: <MasterCardIcon /> },
    { label: "PayPal", icon: <PayPalIcon /> }
]
const PaymentList = () => {
    const [selectedMethod, setSelectedMethod] = useState("Cash")
    return (
        <View>
            <FlatList
                data={PaymentMethods}
                keyExtractor={(item) => item.label}
                renderItem={({ item }) => <PayMethodCard title={item.label} icon={item.icon}
                    onPress={() => setSelectedMethod(item.label)}
                    isSelected={selectedMethod === item.label} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: s(16), paddingHorizontal: s(24), paddingTop: vs(15) }}
            />
        </View>
    )
}

export default PaymentList

const styles = StyleSheet.create({})