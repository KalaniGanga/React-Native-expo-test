import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles";

const Button = (props) => {
  const { btn, buttonFill } = commonStyles;
  const { title, ...otherProps } = props;

  return (
    <TouchableOpacity style={[btn, buttonFill]} {...otherProps}>
      <Text style={commonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
