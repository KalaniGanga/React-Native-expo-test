import { StyleSheet, Platform, Dimensions, Image } from "react-native";
import theme from "../theme/theme";

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lable: {
    color: theme.colors.textTertiary,
    fontWeight: theme.weight.low,
    fontSize: theme.size.low,
  },
  mapContainer: {
    width: "100%",
    height: "100%",
  },
  bottomSheetContainer: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    height: 341,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  bottomSheetRemoveIcon: {
    width: 96,
    height: 96,
    marginTop: 32,
    marginBottom: 16,
  },
  BottomSheetMainText: {
    textAlign: "center",
    fontFamily: "voska-round",
    fontWeight: theme.weight.low,
    fontSize: theme.size.high,
    color: theme.colors.textSecondary,
  },
  markerContainer: { alignItems: "center", marginTop: 4 },
  markerImage: {
    width: 21,
    height: 21,
    marginLeft: 5,
  },
  circleStyle: {
    backgroundColor: theme.colors.textSecondary,
    height: Dimensions.get("window").width * 0.2,
    width: Dimensions.get("window").width * 0.2,
    borderRadius: Math.round(
      (Dimensions.get("window").height + Dimensions.get("window").width) / 2
    ),
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginTop: 17,
  },
  bottomSheetDetailContainer: {
    flexDirection: "row",
    marginRight: 7,
  },
  detailImage: {
    marginRight: 4,
  },
});

export default mapStyles;
