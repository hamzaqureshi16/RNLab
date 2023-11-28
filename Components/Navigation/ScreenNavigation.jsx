import React ,{useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import Layout from "../Layout";
import SignUp from "../Signup";
import Login from "../Login";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Sqlite from "../../Screens/Sqlite";

export default function ScreenNavigation() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  const LogoTitle = () => (
    <>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: useTheme().colors.text,
          textAlign: "center",
          marginBottom: 40,
          height: 30,
        }}
      >
        Home
      </Text>
    </>
  );


  const logout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  }

  const HeaderButton = () => (
    <TouchableOpacity
      style={{
        backgroundColor: useTheme().colors.backdrop,
        borderRadius: 10,
        padding: 10,
        margin: 20,
        height: 50,
      }}
      onPress={() => logout()}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: useTheme().colors.text,
          textAlign: "center",
          marginBottom: 40,
          height: 30,
        }}
      >
        Logout
      </Text>
    </TouchableOpacity>
  );
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange'
        },
        headerTintColor: useTheme().colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerLeft: null,
        headerRight: (props) => <HeaderButton />,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Layout}
        options={{
          navigation: navigation,
          headerTitle: "Home",
        }}
      />

      <Stack.Screen
        name="Sqlite"
        component={Sqlite}
        options={{
          headerTitle: "Sqlite example",
        }}
      />
    </Stack.Navigator>
  );
}
