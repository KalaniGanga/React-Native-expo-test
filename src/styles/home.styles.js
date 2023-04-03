import { StyleSheet, Dimensions } from "react-native";
import theme from "../theme/theme";

const homeStyles = StyleSheet.create({
  container: {
    marginTop: 28,
    marginBottom: 5,
    alignContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    color: theme.colors.secondary,
    marginBottom: 47,
    fontWeight: theme.weight.bold,
    fontSize: theme.size.normal,
    fontFamily: "antarctica",
  },
  circleStyle: {
    backgroundColor: theme.colors.ashPrimary,
    height: Dimensions.get("window").width * 0.2,
    width: Dimensions.get("window").width * 0.2,
    borderRadius: Math.round(
      (Dimensions.get("window").height + Dimensions.get("window").width) / 2
    ),
    marginBottom: 35,
  },
  imageStyle: { width: 80, height: 80, marginBottom: 35 },
});

export default homeStyles;
