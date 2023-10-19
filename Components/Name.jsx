import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Attendance from "./Attendance";

export default function Name() {
  const [student, setstudent] = useState({});
  const [nameList, setNameList] = useState([]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TextInput
          value={student.name}
          onChangeText={(text) => {
            setstudent({ ...student, name: text });
          }}
          placeholder="Name"
          style={{
            borderWidth: 1,
            padding: 5,
            width: 190,
            borderRadius: 50,
          }}
        ></TextInput>

        <TextInput
          value={student.attendance}
          onChangeText={(text) => {
            setstudent({ ...student, attendance: text });
          }}
          placeholder="Attendance"
          style={{
            borderWidth: 1,
            padding: 10,
            width: 190,
            borderRadius: 50,
          }}
        ></TextInput>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (student.name != "" && student.attendance != "") {
            let tempList = [...nameList];
            tempList.push(student);
            setNameList(tempList);
            setstudent({ name: "", attendance: "" });
          } else {
            alert("enter something");
          }
        }}
        style={{
          width: 200,
          borderRadius: 50,
          alignSelf: "center",
          margin: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            padding: 10,
            backgroundColor: "blue",
            color: "white",
            borderRadius: 50,
          }}
        >
          {"Add"}
        </Text>
      </TouchableOpacity>

      <Attendance students={nameList} />
    </View>
  );
}
