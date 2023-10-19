import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Style } from "./Styles/Style";

export default function StyleObj() {
  const [color, setcolor] = useState("red");

  const style = StyleSheet.create({
    background: {
      backgroundColor: color,
    },
  });
  return (
    <View style={Style.main}>
      <Text style={[Style.button, style.background, Style.main]}>
        {color} is clicked
      </Text>

      <TouchableOpacity
        style={[Style.button, { backgroundColor: "red" }]}
        onPress={() => setcolor("red")}
      >
        <Text style={Style.main}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Style.button, { backgroundColor: "green" }]}
        onPress={() => setcolor("green")}
      >
        <Text style={Style.main}>Green</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Style.button, { backgroundColor: "blue" }]}
        onPress={() => setcolor("blue")}
      >
        <Text style={Style.main}>Blue</Text>
      </TouchableOpacity>
    </View>
  );
}
