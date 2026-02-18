import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'
import { s, vs } from 'react-native-size-matters'
import PayMethodCard from '../components/PayMethodCard'
import PaymentList from '../components/PaymentList'
import BankCardBox from '../components/BankCardBox'
import AddButton from '../components/AddButton'
import ContactIcon from '../components/ContactIcon'
import { useRoute } from '@react-navigation/native'

const PaymentScreen = () => {
    const { name, params } = useRoute()
    console.log(name)
    console.log(params)
    return (
        <View style={{ flex: 1, paddingTop: vs(50) }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: s(24),
                marginBottom: s(37)
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <BackButton />
                    <Text style={{ marginStart: s(18), fontSize: s(17), color: "#181C2E" }}>Payment</Text>
                </View>
                <ContactIcon />
            </View>
            <Text style={{ fontSize: s(24), paddingHorizontal: s(24) }}>{params?.name}</Text>
            <PaymentList />
            <View style={{ paddingHorizontal: s(24) }}>
                <BankCardBox />
                <AddButton />
            </View>

        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({})