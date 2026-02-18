import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import HomeScreen from "../screens/HomeScreen";
import PaymentScreen from "../screens/PaymentScreen";

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="IntroScreen">
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen options={{
                headerShown: true
            }}
                name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator