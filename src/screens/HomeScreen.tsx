import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import TopTabs from '../components/TopTabs'
import MeditationCard from '../components/MeditationCard'
import { dummyData } from '../data/data'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ paddingHorizontal: s(16), paddingTop: vs(48) }}>
            <Text style={{ color: "#1D150F", fontWeight: "semibold", fontSize: s(20), marginBottom: s(6) }}>Meditations</Text>
            <Text style={{ color: "#2C2016", fontSize: s(14), marginBottom: vs(16) }}>Lorem Ipsum is simply dummy text</Text>

            <TopTabs />
            <FlatList
                data={dummyData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen", { name: item.title })}>
                        <MeditationCard imageUrl={item.image} title={item.title} date={item.date} />
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{ marginBottom: vs(16), justifyContent: "space-between" }}
                contentContainerStyle={{ paddingBottom: vs(150), paddingTop: vs(24) }}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})