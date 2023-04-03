import React from "react";
import { Text, TouchableOpacity } from "react-native";
import commonStyles from "../styles/common.styles";
import theme from "../theme/theme";

const FilledButton = (props) => {
  const { title, disabled, ...otherProps } = props;
  const { filledButtonText, buttonFill } = commonStyles;
  return (
    <TouchableOpacity
      style={
        disabled
          ? {
              backgroundColor: theme.colors.disable,
              ...buttonFill,
            }
          : {
              backgroundColor: theme.colors.textPrimary,
              ...buttonFill,
            }
      }
      disabled={disabled}
      {...otherProps}
    >
      <Text style={filledButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;
