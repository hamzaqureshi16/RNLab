import React from 'react'
import {View} from 'react-native'
import { TextInput } from 'react-native-paper'
import { Style } from './Styles/Style'


export default function BigTextArea({placeholder}) {
  return (
    <View style={Style.main}>
        <TextInput
            style={Style.textArea}
            placeholder="500 chars max"
            maxLength={500}
            label={placeholder}
            multiline={true}
            numberOfLines={10}
        />
    </View>
  )
}
