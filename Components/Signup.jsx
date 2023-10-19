import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Style } from "./Styles/Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
export default function Signup() {
  return (
    <View>
      <View style={{ marginBottom: 40 }}>
        <View style={Style.leftView}>
          <Text style={Style.heading}>Create Account</Text>
        </View>
      </View>
      <View style={Style.main}>
        <View style={Style.inputContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            size={30}
            color="black"
            style={Style.icon}
          />
          <TextInput
            style={{
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
            placeholder="First Name"
          />
        </View>

        <View style={Style.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={30}
            color="black"
            style={Style.icon}
          />
          <TextInput
            style={{
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
            placeholder="Email"
          />
        </View>
        <View style={Style.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={30}
            color="black"
            style={Style.icon}
          />
          <TextInput
            style={{
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
            placeholder="Password"
            secureTextEntry
          />
        </View>

        <View style={Style.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={30}
            color="black"
            style={Style.icon}
          />
          <TextInput
            style={{
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>

        <View style={Style.loginbtnContainer}>
          <TouchableOpacity style={Style.loginbtn}>
            <Text style={Style.btnText}>
              Sign Up
              <MaterialCommunityIcons
                name="arrow-right-circle-outline"
                size={24}
                color="white"
                style={Style.icon}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
