import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";
export default function Transfer() {
  const [text, setText] = useState("");
  const [transferText, setTransferText] = useState("");
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Transfer Text
      </Text>
      <TextInput
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
      />

      <TextInput
        value={transferText}
        onChangeText={(text) => {
          setText(text);
        }}
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        editable={false}
      />
      <TouchableOpacity
        onPress={() => {
          alert(text === "" ? "Please Enter Something" : text);
        }}
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ textAlign: "center" }}>Show Alert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTransferText(text)}
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ textAlign: "center" }}>Transfer</Text>
      </TouchableOpacity>
    </View>
  );
}
