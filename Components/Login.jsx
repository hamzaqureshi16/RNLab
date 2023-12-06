import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const login = async () => {
    console.log('hey')
    try {
      const users = await AsyncStorage.getItem("users");
      const userData = JSON.parse(users);

      const user = userData.find((user) => (user.email === data.email) && (user.password === data.password));

      if(user){
        alert("Login Successful");
        const token = Math.random().toString(36).substring(7);
        await AsyncStorage.setItem("token", token);
        navigation.navigate("Home");
      }
      else{
        alert("Invalid Credentials");
      }

    } catch (error) {}
  };

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
      width: 330,
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
          <Text style={Style.heading}>Login</Text>
        </View>
        <View style={Style.leftView}>
          <Text style={Style.subheading}>Please Sign-In to Continue</Text>
        </View>
      </View>
      <View style={Style.main}>
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
            onChangeText={(text) => setData({ ...data, email: text })}
            value={data.email}
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
            onChangeText={(text) => setData({ ...data, password: text })}
            value={data.password}
          />
        </View>
        <View style={Style.loginbtnContainer}>
          <TouchableOpacity style={Style.loginbtn} onPress={login}>
            <Text style={Style.btnText}>
              Login
              <MaterialCommunityIcons
                name="arrow-right"
                size={24}
                color="white"
                style={[Style.icon, { padding: 10 }]}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}
