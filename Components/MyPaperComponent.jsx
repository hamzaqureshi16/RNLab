import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Text, View } from 'react-native';
import { Style } from './Styles/Style';

export default function MyPaperComponent() {
  return (
    <PaperProvider>
      <View>
        {/* Your content goes here */}
      </View>
    </PaperProvider>
  );
}
