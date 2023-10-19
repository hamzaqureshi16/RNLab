import React,{useState} from 'react'
import { View } from 'react-native'
import { Checkbox ,Text} from 'react-native-paper'
import { Style } from './Styles/Style';
export default function Check() {
    const [checked, setChecked] = useState({});
  return (

    <View style={Style.main}>

      <View style={Style.checkbox}>
        <Checkbox
          status={checked.physics ? 'checked' : 'unchecked'}
          onPress={() => {
            let check = checked;
            check = {...check,physics:!check.physics}
            setChecked(check);
          }}
        />
        <Text style={Style.main}>Physics</Text>
      </View>

      <View style={Style.checkbox}>
        <Checkbox
          status={checked.chemistry ? 'checked' : 'unchecked'}
          onPress={() => {
            let check = checked;
            check = {...check,chemistry:!check.chemistry}
            setChecked(check);
          }}
        />
        <Text style={Style.main}>Chemistry</Text>

      </View>

      <View style={Style.checkbox}>
        <Checkbox
          status={checked.maths ? 'checked' : 'unchecked'}
          onPress={() => {
            let check = checked;
            check = {...check,maths:!check.maths}
            setChecked(check);
          }}
        />
        <Text style={Style.main}>Maths</Text>

        </View>


    </View>

  )
}
