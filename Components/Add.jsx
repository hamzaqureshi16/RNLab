import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
export default function Add() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Add
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        placeholder="number"
        value={num1}
        onChangeText={(text) => {
          setNum1(parseInt(text));
        }}
      />

      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        placeholder="number"
        value={num2}
        onChangeText={(text) => {
          setNum2(parseInt(text));
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        onPress={() => {
            let res = num1 + num2;
            res == NaN ? alert("Enter only numbers") : alert(res); 
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}
