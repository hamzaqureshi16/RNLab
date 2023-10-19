import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';

export default function Choice() {
  const [computerChoice, setComputerChoice] = useState('');

  const GetComputerChoice = () => {
    const options = ['fire', 'wood', 'water'];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
  };

  const handleButtonClick = (userChoice) => {
    const computerChoice = GetComputerChoice();
    setComputerChoice(computerChoice);

    if (
      (userChoice === 'wood' && computerChoice === 'water') ||
      (userChoice === 'water' && computerChoice === 'fire') ||
      (userChoice === 'fire' && computerChoice === 'wood')
    ) {
      Alert.alert('User wins!');
    } else if (userChoice === computerChoice) {
      Alert.alert('It is a tie!');
    } else {
      Alert.alert('Computer wins!');
    }
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        CHOICE
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        onPress={() => handleButtonClick('wood')}
      >
        <Text style={{ textAlign: 'center' }}>Wood</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        onPress={() => handleButtonClick('water')}
      >
        <Text style={{ textAlign: 'center' }}>Water</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          padding: 10,
          margin: 10,
          borderRadius: 50,
        }}
        onPress={() => handleButtonClick('fire')}
      >
        <Text style={{ textAlign: 'center' }}>Fire</Text>
      </TouchableOpacity>

      {computerChoice !== '' && (
        <Text style={{ textAlign: 'center' }}>
          Computer chose: {computerChoice}
        </Text>
      )}
    </View>
  );
}