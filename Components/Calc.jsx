import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

export default function Calc() {
  const [str, setStr] = useState("");
  const [inp, setInp] = useState("");

  const operators = ["+", "-", "*", "/", "%"];
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Calc
      </Text>

      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        value={inp}
        onChangeText={(text) => {
          setInp(text);
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 10,
        }}
      >
        {operators.map((item) => (
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              padding: 10,
              margin: 10,
              borderRadius: 50,
              width: 50,
            }}
            onPress={() => {
              setStr(str + inp + item);
              setInp("");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: 10,
            margin: 10,
            borderRadius: 50,
            width: 50,
          }}
          onPress={() => {
            console.log(eval(mystr));
            setStr("");
            setInp("");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {"="}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 10,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              padding: 10,
              margin: 10,
              borderRadius: 50,
              width: 40,
            }}
            onPress={() => {
              setInp(inp + item.toString());
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        onPress={() => {
          setStr("");
          setStr("");
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Clear
        </Text>
      </TouchableOpacity>
    </View>
  );
}
