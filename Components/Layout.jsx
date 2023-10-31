import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import { Style } from "./Styles/Style";
import Radio from "./Radio";
import Dropdown from "./Dropdown";
import Checkbox from "./Check";
import BigTextArea from "./BigTextArea";
import { TouchableOpacity } from "react-native";
import { useWindowDimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Redux/Slices/CounterSlice";
import { addAge, subAge } from "../Redux/Slices/ageSlice";

export default function Layout({ navigation, route }) {
  const { colors } = useTheme();
  const { width, height } = useWindowDimensions();
  const count = useSelector((state) => state.counter.value);
  const age = useSelector((state) => state.age.value);
  const [orientation, setOrientation] = useState("portrait");
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  useEffect(() => {
    if (height > width) {
      setOrientation("portrait");
    } else {
      setOrientation("landscape");
    }
  }, [height, width]);

  useEffect(() => console.log(count), [count]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            backgroundColor: colors.backdrop,
            borderRadius: 10,
            padding: 10,
            margin: 20,
            height: 50,
          }}
          onPress={() => handleIncrease()}
          onLongPress={() => setCount(0)}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: colors.text,
              textAlign: "center",
              marginBottom: 40,
              height: 30,
            }}
          >
            {count}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [count]);

  return (
    <ScrollView
      contentContainerStyle={[
        Style.main,
        {
          flexDirection: orientation === "portrait" ? "column" : "row",
        },
      ]}
    >
      {route?.params?.name ? (
        <Text style={Style.main}> Hi, {route?.params?.name}</Text>
      ) : (
        <></>
      )}

      <Text style={Style.main}>Age: {age}</Text>
      <TouchableOpacity
        style={Style.button}
        onPress={() => {
          dispatch(addAge());
        }}
      >
        <Text style={Style.main}>Add Age</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Style.button}
        onPress={() => {
          dispatch(subAge());
        }}
      >
        <Text style={Style.main}>Sub Age</Text>
      </TouchableOpacity>

      <TextInput
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "left",
          marginBottom: 40,
        }}
        placeholder="30 chars max"
        maxLength={10}
        label={"Email"}
        placeholderTextColor={colors.text}
      />

      <TextInput
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "left",
          marginBottom: 40,
        }}
        placeholder="50 chars max"
        maxLength={50}
        label={"Name"}
        placeholderTextColor={colors.text}
      />

      <Radio />
      <Dropdown />
      <Checkbox />
      <BigTextArea placeholder={"Skills"} />
      <BigTextArea placeholder={"Address"} />

      <TouchableOpacity
        style={Style.button}
        onPress={() => {
          navigation.setOptions({ title: "Logged in!" });
          // navigation.push('Login')
        }}
      >
        <Text style={Style.main}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
