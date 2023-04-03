import { View, ActivityIndicator } from "react-native";
import React from "react";
import theme from "../theme/theme";

const Loader = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color={theme.colors.textSecondary} />
    </View>
  );
};

export default Loader;
