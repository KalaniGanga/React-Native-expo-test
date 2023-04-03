import React from "react";
import { Text, TouchableOpacity } from "react-native";
import theme from "../theme/theme";
import commonStyles from "../styles/common.styles";

const FilledBottomButton = (props) => {
  const { bottomStyle, buttonFill } = commonStyles;
  const { title, disabled, ...otherProps } = props;

  return (
    <TouchableOpacity
      style={
        disabled
          ? [
              { backgroundColor: theme.colors.disable, ...buttonFill },
              bottomStyle,
            ]
          : [
              { backgroundColor: theme.colors.textPrimary, ...buttonFill },
              bottomStyle,
            ]
      }
      disabled={disabled}
      {...otherProps}
    >
      <Text style={commonStyles.filledButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilledBottomButton;
