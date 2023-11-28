import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Login";
import Signup from "../Signup";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../Layout";

export default function App() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Signup"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Signup") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "ios-log-in" : "ios-log-in-outline";
          }
 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Signup"
        options={{
          navigation: navigation,
          headerShown: false,
        }}
        component={Signup}
      />
      <Tab.Screen
        name="Login"
        options={{
          navigation: navigation,
          headerShown: false,
        }}
        component={Login}
      />

    </Tab.Navigator>
  );
}
