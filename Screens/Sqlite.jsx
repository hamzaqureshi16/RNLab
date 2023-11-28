import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import * as SQLite from "expo-sqlite";
import Radio from "../Components/Radio";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const Sqlite = () => {
  const [data, setData] = React.useState({
    done: false,
    value: "",
  });

  const reset = () => {
    setData({
      done: false,
      value: "",
    });
  }
  const store = () => {
    const db = SQLite.openDatabase("test.db");
    try {
        db.transaction((tx) => {
            tx.executeSql(
            "insert into items (done, value) values (?, ?)",
            [data.done, data.value]
            );
        });
        reset();
    } catch (error) {
        console.log(error);
    }
  }

  const logData = () => {
    const db = SQLite.openDatabase("test.db");
    try {
        db.transaction((tx) => {
            tx.executeSql(
            "select * from items",
            [],
            (_, { rows: { _array } }) => console.log(_array)
            );
        });
    } catch (error) {
        console.log(error);
    }
  }

  const openDB = () => {
    const db = SQLite.openDatabase("test.db");
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  };
  React.useEffect(() => {
    openDB();
  }, []);

  const Style = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: useTheme().colors.text,
      textAlign: "center",
      marginBottom: 40,
      height: 30,
    },
    main: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 40,
      height: 50,
      width: 300,
    },
    button: {
      backgroundColor: useTheme().colors.primary,
      borderRadius: 10,
      padding: 10,
      margin: 20,
      height: 40,
      width: 100,
    },
  });

  return (
    <>
      <View style={Style.main}>
        <Text style={Style.text}>Sqlite</Text>
        <TextInput
          placeholder="Enter text"
          value={data.value}
          onChangeText={(text) => setData({ ...data, value: text })}
          style={Style.input}
        />

        <Picker
          selectedValue={data.done}
          style={{ height: 50, width: 300 }}
          onValueChange={(itemValue, itemIndex) =>
            setData({ ...data, done: itemValue })
          }
          label="Done"
        >
          <Picker.Item label="Done" value={1} />
          <Picker.Item label="Not Done" value={0} />
        </Picker>

        <TouchableOpacity style={Style.button} onPress={store}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Submit
          </Text>
        </TouchableOpacity>


        <TouchableOpacity style={Style.button} onPress={logData}>
            <Text
                style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
            >
                Log Data
            </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Sqlite;
