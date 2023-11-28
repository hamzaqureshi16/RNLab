import React from "react";
import { FlatList,View ,Text} from "react-native";
import { Style } from "./Styles/Style";
import {str} from '../Data/str';
export default function FLt() {
  const list = [
    { name: "Ali", age: 33, city: "Karachi" },
    { name: "Faisal", age: 20, city: "Lahore" },
    { name: "Noman", age: 53, city: "Karachi" },
  ];
  return <View
            style={Style.main} 
        >
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View style={Style.list}>
                        <Text style={Style.main}>{item.name}</Text>
                        <Text style={Style.main}>{item.age}</Text>
                        <Text style={Style.main}>{item.city}</Text>
                    </View>
                )}
            />
        </View>;
}
