import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { Style } from "./Styles/Style";
export default function Radio() {
  const [value, setValue] = useState("first");
  return (
    <View style={Style.main}>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        <Text style={Style.heading}>Gender:</Text>
        <View style={Style.radio}>
          <RadioButton value="first" />
          <Text style={Style.main}>Male</Text>
        </View>
        <View style={Style.radio}>
          <RadioButton value="second" />
          <Text style={Style.main}>Female</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
}
