import { View, Text } from "react-native";
import React from "react";
import theme from "../theme/theme";

const ErrorMessage = (props) => {
  const { errMsg } = props;
  return (
    <View>
      <Text style={{ color: theme.colors.failure, alignSelf: "center" }}>
        {errMsg}
      </Text>
    </View>
  );
};

export default ErrorMessage;
