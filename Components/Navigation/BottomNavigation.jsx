import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Layout from "../Layout";
import Login from "../Login";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


export default function App() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      //style it
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          navigation: navigation,
          tabBarBadge: 5,
        }}
        component={Layout}
      />
      <Tab.Screen
        name="Login"
        options={{
          navigation: navigation,
        }}
        component={Login}
      />
    </Tab.Navigator>
  );
}
