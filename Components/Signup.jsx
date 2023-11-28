import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup({navigation}) {
  const [data, setData] = React.useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const checkAuthStatus = async (navigation) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if(token){
        navigation.navigate("Home");
      }
    } catch (error) {
      
    }
  }

  React.useEffect(()=>{
    checkAuthStatus(navigation);
  },[])

  const checkEmailAlreadyExists = async (email) => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user !== null) {
        const userData = JSON.parse(user);
        if (userData.email === email) {
          return true;
        }
      }
      return false;
    } catch (error) {
      
    }

    return false
  }

  const reset = () => {
    setData({
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }
  const submit = async () => {
      if(data.password !== data.confirmPassword){
          alert("Password and Confirm Password must be same");
          return;
      }
      const tempData = data;
      delete tempData.confirmPassword;

      const user = JSON.stringify(tempData);
    try {
      const users = await AsyncStorage.getItem("users");
      if(users != null){
        const userData = JSON.parse(users);
        const emailExists = await checkEmailAlreadyExists(tempData.email);
        if(emailExists){
          alert("Email already exists");
          return;
        }
        userData.push(tempData);
        await AsyncStorage.setItem("users", JSON.stringify(userData));
        alert("User created successfully");
        reset();
        navigation.navigate("Login");
      }
      else{
        await AsyncStorage.setItem("users", JSON.stringify([tempData]));
      }
    } catch (error) {
      
    }

    

  }
  const Style = StyleSheet.create({
    leftView: {
      marginLeft: 30,
    },
    heading: {
      fontSize: 30,
      fontWeight: "bold",
    },
    subheading: {
      fontSize: 20,
      fontWeight: "bold",
    },
    main: {
      marginTop: 50,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 30,
      marginVertical: 10,
      width: 300,
      borderBottomWidth: 1,
      borderBottomColor: "black",
    },
    icon: {
      padding: 10,
    },
    loginbtnContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    loginbtn: {
      backgroundColor: "orange",
      borderRadius: 10,
      padding: 10,
      paddingHorizontal: 30,
      width: 200,
    },
    btnText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    input: {
      display: "flex",
      flex: 1,
      fontSize: 20,
      fontWeight: "bold",
    },
  });
  return (
    <View style={{ marginTop: 100 }}>
      <View style={{ marginBottom: 40 }}>
        <View style={Style.leftView}>
          <Text style={Style.heading}>Create Account</Text>
          <Text style={Style.subheading}>Sign up to get started!</Text>
        </View>
      </View>
      <View style={Style.main}>
        <View style={Style.inputContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            size={30}
            color="black"
            style={Style.icon}
          />
          <TextInput
            style={Style.input}
            placeholder="First Name"
            value={data.firstName}
            onChangeText={(text) =>
              setData({
                ...data,
                firstName: text,
              })
            }
          />
        </View>

        <View style={Style.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={30}
            color="black"
            style={Style.icon}
          />
          <TextInput
            style={Style.input}
            placeholder="Email"
            value={data.email}
            onChangeText={(text) =>
              setData({
                ...data,
                email: text,
              })
            }
          />
        </View>
        <View style={Style.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={30}
            color="black"
            style={Style.icon}
          />
          <TextInput
            style={Style.input}
            placeholder="Password"
            secureTextEntry
            value={data.password}
            onChangeText={(text) =>
              setData({
                ...data,
                password: text,
              })
            }
          />
        </View>

        <View style={Style.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={30}
            color="black"
            style={Style.icon}
          />
          <TextInput
            style={Style.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={data.confirmPassword}
            onChangeText={(text) =>
              setData({
                ...data,
                confirmPassword: text,
              })
            }
          />
        </View>

        <View style={Style.loginbtnContainer}>
          <TouchableOpacity style={Style.loginbtn} onPress={submit}>
            <Text style={Style.btnText}>
              Sign Up
              <MaterialCommunityIcons
                name="arrow-right-circle-outline"
                size={24}
                color="white"
                style={Style.icon}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
