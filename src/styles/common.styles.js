import { StyleSheet } from "react-native";
import theme from "../theme/theme";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
  },
  filledButtonText: {
    fontSize: theme.size.normal,
    fontWeight: theme.weight.bold,
    color: theme.colors.primary,
  },
  buttonFill: {
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 48,
  },
  bottomStyle: {
    position: "absolute",
    bottom: 0,
    marginBottom: 24,
  },
  buttonText: {
    fontSize: theme.size.normal,
    fontWeight: theme.weight.bold,
    fontFamily: "antarctica",
  },
  btn: {
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  dropdownContainer: {
    marginTop: 24,
    width: "90%",
  },
  dropdown: {
    height: 48,
    marginTop: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  floatingBtn: {
    borderWidth: 1,
    borderColor: theme.colors.ashSecondary,
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    position: "absolute",
    bottom: 24,
    right: 10,
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 100,
  },
  touchableTextStyle: {
    textAlign: "center",
    fontWeight: theme.weight.bold,
    fontSize: theme.size.normal,
    fontFamily: "antarctica",
    color: theme.colors.textSecondary,
    marginBottom: 66,
  },
  cameraContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
  cameraButtonContainer: {
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
  },
  cameraButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  textInputContainer:{
    marginTop: 28,
    marginBottom: 5,
    width: "90%",
  },
  textInputTitle:{
    color: theme.colors.secondary,
    marginBottom: 10,
  },
  textInputTextBox:{
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderWidth: 1,
    height: 48,
  }
});

export default commonStyles;
