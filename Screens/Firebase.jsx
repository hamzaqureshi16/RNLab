import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { db } from "../Firebase.config";
import { Style } from "../Components/Styles/Style";
import { TouchableOpacity, FlatList } from "react-native";
import {
  setDoc,
  getDoc,
  doc,
  collection,
  addDoc,
  Doc,
  deleteDoc,
  getDocs,
  onSnapshot,
  query
} from "firebase/firestore";

const Firebase = () => {
  const [unsubscribe, setUnsub] = useState(null)
  const [data, setData] = useState(null);
  const writeData = async () => {
    try {
      const document = collection(db, "cities");
      const docRef = await addDoc(document, {
        name:'Abbottabad',
        country:"Pakistan"
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.err(err));
    } catch (error) {
      console.log(error);
    }
  };

  const readData = async () => {
    try {
      const colRef = query( collection(db, "cities"));
      const unbs = onSnapshot(colRef,(snapshot)=>{
        var dt = [];
        snapshot.forEach((doc)=>{
          dt.push(doc.data());
        });
        setData(dt);
      })

      setUnsub(unbs)

      const docsSnap = await getDocs(colRef);
      var dt = [];

      docsSnap.forEach((doc) => {
        dt.push(doc.data());
      });

      console.log(dt[0]);
      setData(dt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>console.log(data),[data])

  const clearCollections = async () => {
    const colRef = collection(db, "cities");
  };
  return (
    <View style={Style.main}>
      <Text style={Style.heading}>Firebase</Text>
      <TouchableOpacity style={Style.button} onPress={() => writeData()}>
        <Text style={Style.btnText}>Write Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Style.button} onPress={() => readData(false)}>
        <Text style={Style.btnText}>Read Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Style.button} onPress={() => clearCollections()}>
        <Text style={Style.btnText}>Clear Doc</Text>
      </TouchableOpacity>


      <TouchableOpacity style={Style.button} onPress={() => console.log(unsubscribe)}>
        <Text style={Style.btnText}>Unsubscripbe</Text>
      </TouchableOpacity>

      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text style={Style.heading}>{item.name}{","}{item.country}</Text>
          )}
        />
      )}
        </View>
  );
};

export default Firebase;
