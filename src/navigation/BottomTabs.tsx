import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import { s } from 'react-native-size-matters';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#FF7622",
            tabBarInactiveTintColor: "#778899",
            tabBarStyle: {
                backgroundColor: "#DBDBDB"
            },
            tabBarLabelStyle: {
                fontSize: s(12),
                fontWeight: 'bold'
            }
        }}>
            <Tab.Screen
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) =>
                        < Feather name="home" size={24} color={color} />
                }}
                name="HomeScreen" component={HomeScreen} />
            <Tab.Screen
                options={{
                    title: "Payment",
                    tabBarIcon: ({ color }) =>
                        <MaterialIcons name="payment" size={24} color={color} />
                }} name="PaymentScreen" component={PaymentScreen} />
            <Tab.Screen
                options={{
                    title: "Contact Us",
                    tabBarIcon: ({ color }) =>
                        <AntDesign name="contacts" size={24} color={color} />
                }} name="ContactUsScreen" component={ContactUsScreen} />
        </Tab.Navigator>
    );
}