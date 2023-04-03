import { Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import theme from "../theme/theme";
import { commonStyles } from "../styles";

const DropDownField = (props) => {
  const { dropdown, dropdownContainer } = commonStyles;
  const { title, items, ...otherProps } = props;
  return (
    <View style={dropdownContainer}>
      <Text style={theme.buttonText}>{title}</Text>
      <View style={dropdown}>
        <Picker {...otherProps}>
          {items.length &&
            items.map((item, i) => (
              <Picker.Item key={i} label={item.lable} value={item.value} />
            ))}
        </Picker>
      </View>
    </View>
  );
};

export default DropDownField;
