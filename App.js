import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { React, useState, useEffect } from "react";
import Layout from "./Components/Layout";
import { useTheme } from "react-native-paper";
import { ScrollView } from "react-native";
import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import ScreenNavigation from "./Components/Navigation/ScreenNavigation";
import BottomNavigation from "./Components/Navigation/BottomNavigation";
import { Style } from "./Components/Styles/Style";
import { createContext, useContext } from "react";
import Context from "./Contexts/UserInfo";
import { Provider } from "react-redux/es/exports";
import { store } from "./Redux/store";
import * as SQLite from "expo-sqlite";
import FlatList from "./Components/FlatList";
import Mids from "./Screens/Mids/Mids";
import LabMid from "./Screens/Mids/LabMid";
import { configureStore } from "@reduxjs/toolkit";

const Hme = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const change = () => {
    setX(100);
    setY(100);

    alert(x + y);
  };
  return (
    <View style={Style.main}>
      <Text style={Style.heading}>Hi </Text>
      <TouchableOpacity style={Style.button} onPress={change}>
        <Text style={Style.btnText}>Click to change</Text>
      </TouchableOpacity>
    </View>
  );
};

const Prof = () => {
  const profileContext = useContext(Context);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigation = useNavigation();
  return (
    <View
      style={[Style.main, { justifyContent: "center", alignItems: "center" }]}
    >
      <Text style={Style.heading}>Profile</Text>
      <Text style={Style.heading}>Name: {profileContext.name}</Text>
      <Text style={Style.heading}>Age: {profileContext.age}</Text>

      <TextInput
        placeholder="Enter Name"
        style={Style.input}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        placeholder="Enter Name"
        style={Style.input}
        onChangeText={(text) => setAge(text)}
      />

      <TouchableOpacity
        onPress={() => {
          profileContext.setData(name, age);
          navigation.navigate("Home");
        }}
        style={Style.button}
      >
        <Text style={Style.btnText}>Upate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const [personInfo, setPersonInfo] = useState({ name: "Hamza", age: "23" });
  const Stack = createStackNavigator();
  const [score, setScore] = useState("");
  const [grd, setGrd] = useState("");

  const x = Math.random() * 2;

  const db = SQLite.openDatabase(
    {
      name: "MainDB",
      location: "default",
    },
    () => {
      console.log("DB connected");
    },
    (error) => {
      console.log(error);
    }
  );

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists tbl_users (id integer primary key autoincrement, name text, age text)"
      );
    });
  };

  const insertData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into tbl_users (name, age) values (?, ?)",
        ["Hamza", 23],
        (tx, results) => {
          console.log("Results", results.rowsAffected);
          if (results.rowsAffected > 0) {
            alert("Success");
          } else {
            alert("Failed");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  };

  const logData = () => {
    db.transaction((tx) => {
      console.log(tx);
      tx.executeSql("select * from tbl_users", [], (tx, results) => {
        console.log("Results", results);
        if (results.rows.length > 0) {
          alert("Success");
        } else {
          alert("Failed");
        }
      });
    });
  };

  const getOrientation = () => {
    const { width, height } = Dimensions.get("window");
    return width > height ? "landscape" : "portrait";
  };

  const [orientation, setOrientation] = useState(getOrientation());

  const setaName = (name) => setPersonInfo({ ...personInfo, name: name });
  const setaAge = (age) => setPersonInfo({ ...personInfo, age: age });
  const setData = (name, age) => setPersonInfo({ name: name, age: age });
  const ContextSetter = { setaName, setaAge, setData };

  const calcGrade = (sc) => {
    sc = parseInt(sc);
    setGrd(
      sc >= 90 ? "A" : sc >= 80 ? "B" : sc >= 70 ? "C" : sc >= 60 ? "D" : "F"
    );
  };

  const MidLab = () => {
    const target = 100;
    const [turn, setTurn] = useState(0);
    const [players, setPlayers] = useState([
      { name: "PLayer 1", score: 0, disabled: true },
      { name: "Player 2", score: 0, disabled: true },
      { name: "Player 3", score: 0, disabled: true },
    ]);

    const generateScore = () => {
      let score = Math.floor(Math.random() * 6) + 1;
      let temp = [...players];
      score += temp[turn].score;
      score > target
        ? ((temp[turn].score = target), (temp[turn].disabled = true))
        : (temp[turn].score = score);
      setTurn((turn + 1) % players.length);
      setPlayers(temp);
    };

    return (
      <FlatList
        data={players}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.score}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          <View>
            <TouchableOpacity onPress={generateScore}>
              <Text>Generate Score</Text>
            </TouchableOpacity>
          </View>
        }
      />
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="bottom"
            component={BottomNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
          name="Home"
          component={ScreenNavigation}
          options={{
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
