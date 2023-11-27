import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import { Image } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import SearchScreen from "./app/screens/SearchScreen";
import ShareScreen from "./app/screens/ShareScreen";
import MailScreen from "./app/screens/MailScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import { colors } from "./app/utils.js/theme";

export default function App() {
  const HomeStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Search") {
              iconName = focused ? "search1" : "search1";
            } else if (route.name === "Share") {
              iconName = focused ? "sharealt" : "sharealt";
            } else if (route.name === "Mail") {
              iconName = focused ? "mail" : "mail";
            }
            // You can return any component that you like here!
            return (
              <AntDesign name={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: colors.white,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
        <Tab.Screen name="Mail" component={MailScreen} />
      </Tab.Navigator>
    );
  }
  const HomeStackScreens = () => (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Login" component={LoginScreen} />
      <HomeStack.Screen name="Signup" component={SignUpScreen} />
      <HomeStack.Screen name="HomeTab" component={HomeTabs} />
    </HomeStack.Navigator>
  );

  return (
    <NavigationContainer>
      <HomeStackScreens />
    </NavigationContainer>
  );
}
