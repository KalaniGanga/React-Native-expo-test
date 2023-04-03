import { Text, View, TextInput } from "react-native";
import React from "react";
import theme from "../theme/theme";
import { commonStyles } from "../styles";

const InputTextField = (props) => {
  const { textInputContainer, textInputTitle, textInputTextBox } = commonStyles;
  const { title, ...otherProps } = props;
  return (
    <View style={textInputContainer}>
      <Text style={(textInputTitle, theme.buttonText)}>{title}</Text>
      <TextInput style={textInputTextBox} {...otherProps} />
    </View>
  );
};

export default InputTextField;
