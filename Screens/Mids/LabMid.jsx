import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View, Text } from "react-native-paper";

const LabMid = () => {
  const target = 100;
  const [turn, setTurn] = React.useState(0);
  const [players, setPlayers] = React.useState([
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

export default LabMid;
