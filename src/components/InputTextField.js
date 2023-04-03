import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import theme from "../theme/theme";

const InputTextField = (props) => {
  const { container, titleStyle, textboxStyle } = styles;
  const { title, ...otherProps } = props;
  return (
    <View style={container}>
      <Text style={(titleStyle, theme.buttonText)}>{title}</Text>
      <TextInput style={textboxStyle} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    marginBottom: 5,
    width: "90%",
  },
  titleStyle: {
    color: theme.colors.secondary,
    marginBottom: 10,
  },
  textboxStyle: {
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderWidth: 1,
    height: 48,
  },
});

export default InputTextField;
