import React ,{useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import Layout from "../Layout";
import SignUp from "../Signup";
import Login from "../Login";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

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

  const HeaderButton = () => (
    <TouchableOpacity
      style={{
        backgroundColor: useTheme().colors.backdrop,
        borderRadius: 10,
        padding: 10,
        margin: 20,
        height: 50,
      }}
      onPress={() => setCount(count + 1)}
      onLongPress={() => setCount(0)}
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
        {count}
      </Text>
    </TouchableOpacity>
  );
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme().colors.primary,
        },
        headerTintColor: useTheme().colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Layout}
        options={{
          navigation: navigation,
          headerTitle: "Home",
          // headerRight: (props) => <HeaderButton />,
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{ title: "Sign Up" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
    </Stack.Navigator>
  );
}
