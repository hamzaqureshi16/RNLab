import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
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

const Hme = () => {
  const homeContext = useContext(Context);
  const navigation = useNavigation();
  return (
    <View>
      <Text style={Style.heading}>Hi {homeContext.name}</Text>
      <Text style={Style.heading}>Age: {homeContext.age}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
        style={Style.button}
      >
        <Text style={Style.btnText}>Go to Profile</Text>
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

  return (
    <Provider store={store}>
      {/* // <Context.Provider value={{ ...personInfo, ...ContextSetter }}>
    //   <NavigationContainer>
    //     <View
    //       style={{
    //         flex: 1,
    //         justifyContent: "center",
    //         backgroundColor: useTheme().colors.background,
    //       }}
    //     >
    //       <Stack.Navigator>
    //         <Stack.Screen name="Home" component={Hme} />
    //         <Stack.Screen name="Profile" component={Prof} />
    //       </Stack.Navigator>
    //     </View>
    //   </NavigationContainer>
    // </Context.Provider> */}

      <NavigationContainer>
        <View style={Style.main}>
          <Text style={Style.heading}>hello</Text>
          <TouchableOpacity
            onPress={() => {
              createTable();
            }}
            style={Style.button}
          >
            <Text style={Style.btnText}>Create</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => {
              insertData();
            }}
            style={Style.button}
          >
            <Text style={Style.btnText}>Insert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              logData();
            }}
            style={Style.button}
          >
            <Text style={Style.btnText}>Log</Text>
          </TouchableOpacity>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
