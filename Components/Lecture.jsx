import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Style } from "./Styles/Style";
import { Alert } from "react-native";


export default function Lecture() {
  const [status, setStatus] = useState(true);
  const [marks, setMarks] = useState(75);
  const [name, setName] = useState("Lecture");
  const [mycolor, setColor] = useState("green");
  const [property, setProperty] = useState("color");
  const [count, setCount] = useState(0)

  return (
    <View style={[Style.main, Style.font]}>
      <Text
        style={[
          Style.main,
          { [property]: mycolor },
          name.toLowerCase() === "lecture" && Style.italicize,
        ]}
      >
        {name}
      </Text>
      <TextInput
        style={Style.input}
        value={mycolor}
        onChangeText={(txt) => setColor(txt.toLowerCase())}
      />
      <TextInput
        style={Style.input}
        value={property}
        onChangeText={(txt) => setProperty(txt)}
      />
      <TouchableOpacity activeOpacity={0.5} style={Style.button}onPress={() => {setCount(count+1)}}>
        <Text style={Style.main}>Touchable Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={mycolor}
        onPress={() => {setCount(count+1)}}
        style={Style.button}
      >
        <Text style={Style.main}>Touchable Highlight</Text>
      </TouchableHighlight>

      <Text style={Style.main}>Pressed <Text style={{[property]:mycolor}}>{count}</Text> times</Text>
    </View>
  );
}
