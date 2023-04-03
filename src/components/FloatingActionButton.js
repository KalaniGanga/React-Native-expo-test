import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { commonStyles } from "../styles";
import theme from "../theme/theme";

const FloatingActionButton = (props) => {
  const { floatingBtn } = commonStyles;

  return (
    <TouchableOpacity style={floatingBtn} {...props}>
      <Ionicons
        name="add-outline"
        size={30}
        color={theme.colors.textSecondary}
      />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
