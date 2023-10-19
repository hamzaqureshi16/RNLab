import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
export default function Attendance({ students }) {
  return (
    <View>
      <View
        style={{
            backgroundColor: "lightblue",  
            flexDirection: "row",
            justifyContent: "space-around",
        }}
      >
        <Text style={{ margin: 10 }}>{"Name"}</Text>
        <Text>{"Status"}</Text>
      </View>

      <FlatList
        data={students}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "lightblue",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ margin: 10 }}>{item.name}</Text>
              <Text>{item.attendance}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
