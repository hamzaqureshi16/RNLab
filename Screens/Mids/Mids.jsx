import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Context = React.createContext(null);

const Mids = () => {
  

  const [name, setName] = React.useState("no name")
  const [personInfo, setPersonInfo] = React.useState({name: 'Ali', age:30});
  const setname = (name) => {
    setPersonInfo({ ...personInfo, name });
  }

  const setAge = (age) =>{
    setPersonInfo({...personInfo,age})
  }

  const setInfo = (name, age) =>{
    setPersonInfo({
      name:name,
      age:age
    })
  }



  const setters = {
    setAge, setname, setInfo
  }
  const Stack = createStackNavigator();
  const Navigation = useNavigation();
  const Bottom = createBottomTabNavigator();


  const storeData = async () =>{
    try {
     await  AsyncStorage.setItem("name", JSON.stringify({name: "Hunain"}))
      alert("Data Stored")
    } catch (error) {
      alert(error)

    }
  }

  const Square = ({ text }) => (
    <View style={Style.square}>
      <Text style={Style.heading}>{text}</Text>
    </View>
  );

  const Grid = () => {
    const nav = useNavigation();
    React.useEffect(() => {
      nav.setOptions({ title: "Grid by hunain" });
    }, []);
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={Style.row}>
          <Square text="A" />
          <Square text="B" />
          <Square text="C" />
        </View>
        <View style={Style.row}>
          <Square text="D" />
          <Square text="E" />
          <Square text="F" />
        </View>
        <View style={Style.row}>
          <Square text="G" />
          <Square text="H" />
          <Square text="I" />
        </View>
      </View>
    );
  };

  const  getName = async () =>{
    try {
      const name =await  AsyncStorage.getItem("name")
      if(name !== null){
        setName(JSON.parse(name).name)
      }
    } catch (error) {
      console.log(error)
    }

  }

 
  const Home = () => {
    const HomeContext = React.useContext(Context);

    const setContext = (name, age) =>{
      HomeContext.setInfo(name, age)
    }
    return (
    <>
      <View style={Style.container}>
        <Text style={Style.heading}>Mids</Text>
        <Text style={Style.heading}>Name: {HomeContext.name}</Text>
        <Text style={Style.heading}>AGE: {HomeContext.age}</Text>
        <TouchableOpacity style={Style.button} onPress={storeData}>
          <Text style={Style.heading} >Store Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.button} onPress={getName}>
          <Text style={Style.heading} >get Data</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Style.button} onPress={()=>{setContext("hamza", 20)}}>
          <Text style={Style.heading} >Change Context</Text>
        </TouchableOpacity>
      </View>
      <Buttons />
    </>
  )};

  const Buttons = () => (
    <View
      style={{
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <TouchableOpacity
        style={Style.button}
        onPress={() => Navigation.navigate("Grid")}
      >
        <Text style={Style.heading}>Grid</Text>
      </TouchableOpacity>
    </View>
  );

  const BottomNavigation = () => {
    return (
      <Bottom.Navigator>
        <Bottom.Screen name="Home" component={Stack1} />
        <Bottom.Screen name="Grid" component={Stack2} />
      </Bottom.Navigator>
    );
  };

  const Stack1 = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "screen 1" }}
      />
      <Stack.Screen
        name="Grid"
        component={Grid}
        options={{ headerTitle: "screen 2" }}
      />
    </Stack.Navigator>
  );

  const Stack2 = () =>(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "screen 3" }}
      />
      <Stack.Screen
        name="Grid"
        component={Grid}
        options={{ headerTitle: "screen 4" }}
      />
    </Stack.Navigator>
  )
  const StackNavigation = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Grid" component={Grid} />
    </Stack.Navigator>
  );


  return (
    <Context.Provider value={{ ...personInfo, ...setters }}>
      <StackNavigation />
    </Context.Provider>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    flexWrap: "nowrap",
  },
  heading: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
  },
  square: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: 150,
    height: 70,
    borderRadius: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export { Style };
export default Mids;
