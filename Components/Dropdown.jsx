import React from "react";
import { View, PixelRatio, Switch , StyleSheet} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { Picker } from "@react-native-picker/picker";
import { Style } from "./Styles/Style";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
export default function Dropdown() {
  const [country, setCountry] = React.useState(null);
  const style = StyleSheet.create({
    countrySelector: {
      width: 150,
      height: 30,
      backgroundColor: useTheme().colors.surface,
      color: useTheme().colors.text,
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "left",
      marginBottom: 40,
    },
  });
  return (
    <View style={Style.main}>
      <Text style={style.countrySelector}>Select Your Country</Text>

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
          style.countrySelector,
          {
            backgroundColor: useTheme().colors.primary,
            marginLeft: 10,
            marginEnd: 10,
          },
        ]}
      />
    </View>
  );
}
