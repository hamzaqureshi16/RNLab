import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { validateName, validatePassword, validateEmail } from "../Validations/Validations";

export default function Registration() {
  const [data, setData] = useState({});


  const register = () => {
    if(
        validateName(data.name) &&
        validateEmail(data.email) &&
        validatePassword(data.password, data.confpassword)
    ){
        alert(`
        Name: ${data.name}
        Email: ${data.email}
        Password: ${data.password}
        `)
    }
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Registration
      </Text>

      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        placeholder="Name"
        value={data.name}
        onChangeText={(text) => {
          setData({ ...data, name: text });
        }}
      />

      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        placeholder="Email"
        value={data.email}
        onChangeText={(text) => {
          setData({ ...data, email: text });
        }}
      />

      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        placeholder="Password"
        secureTextEntry={true}
        value={data.password}
        onChangeText={(text) => {
          setData({ ...data, password: text });
        }}
      />

      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={data.confpassword}
        onChangeText={(text) => {
          setData({ ...data, confpassword: text });
        }}
      />

      <TouchableOpacity
        onPress={() => register()}
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ textAlign: "center" }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
