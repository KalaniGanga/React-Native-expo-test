import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { commonStyles } from "../styles";

const TouchableText = (props) => {
  const { title, ...otherProps } = props;
  const { touchableTextStyle } = commonStyles;
  return (
    <TouchableOpacity {...otherProps}>
      <Text style={touchableTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default TouchableText;
