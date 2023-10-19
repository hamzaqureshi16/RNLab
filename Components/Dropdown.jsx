import React from "react";
import { View, PixelRatio, Switch } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { Picker } from "@react-native-picker/picker";
import { Style } from "./Styles/Style";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
export default function Dropdown() {
  const [country, setCountry] = React.useState(null);
  return (
    <View style={Style.main}>
      <Text style={Style.main}>Select Your Country</Text>

      <CountryPicker
        {...{
          countryCode: country,
          withFilter: true,
          withFlag: true,
          withCountryNameButton: true,
          withAlphaFilter: true,
          withCallingCode: false,
          withEmoji: true,
          onSelect: (country) => setCountry(country.cca2),
        }}
        style={[
          Style.main,
          {
            backgroundColor: useTheme().colors.primary,
            marginLeft: 10,
            marginEnd: 10,
          },
        ]}
        visible
      />
    </View>
  );
}
