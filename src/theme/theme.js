const palette = {
  red: "#FF0000",
  black: "#000000",
  white: "#FFFFFF",
  blackLight: "#101318",
  lightAsh: "#E6E6E6",
  disableGrey: "#898C8F",
  ash: "#D9D9D9",
  darkAsh: "#737373",
};

const theme = {
  colors: {
    primary: palette.white,
    secondary: palette.black,
    textPrimary: palette.black,
    textSecondary: palette.blackLight,
    disable: palette.disableGrey,
    failure: palette.red,
    textTertiary: palette.darkAsh,
    ashPrimary: palette.ash,
    ashSecondary: palette.lightAsh,
  },
  weight: {
    bold: "bold",
    low: "400",
  },
  size: {
    high: 24,
    normal: 16,
    low: 12,
    small: 10,
  },
};
export default theme;
