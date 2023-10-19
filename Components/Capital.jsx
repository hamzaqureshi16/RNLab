import React from "react";
import { View, Button, Text, TextInput, TouchableOpacity } from "react-native";
import { Style } from "./Styles/Style"; 
import { useState } from "react";
export default function Capital() {
  const [text, setText] = useState("");
  const handlebutton = (text) =>{
    if(text == "Islamabad"){
      setText(text)
    }
    else{
      alert("Wrong Answer")
    }
  }
  return (
    <View style={Style.main}>
      <Text style={Style.main}>The Capital Of Pakistan is</Text>
      <TextInput style={Style.input} editable={false} value={text}/>

      <TouchableOpacity style={Style.button} onPress={()=>handlebutton('Islamabad')}>
        <Text style={Style.main}>Islamabad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Style.button} onPress={()=>handlebutton('Lahore')}>
        <Text style={Style.main}>Lahore</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Style.button} onPress={()=>handlebutton('Karachi')}>
        <Text style={Style.main}>Karachi</Text>
      </TouchableOpacity>
    </View>
  );
}
