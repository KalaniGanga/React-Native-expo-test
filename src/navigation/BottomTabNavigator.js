import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, MapScreen } from "../screens";
import { Image } from "react-native";
import theme from "../theme/theme";
import { commonStyles } from "../styles";

const BottomTabNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: "center",
        tabBarInactiveTintColor: theme.colors.disable,
        tabBarActiveTintColor: theme.colors.textSecondary,
        tabBarLabelStyle: { fontSize: theme.size.small },
        tabBarStyle: commonStyles.tabBarStyle,
        tabBarItemStyle: { justifyContent: "center" },
      }}
    >
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: theme.colors.primary },
          title: "Home",
          headerShadowVisible: false,
          tabBarIcon: (props) =>
            props.focused ? (
              <Image source={require("../assets/images/profile_dark.png")} />
            ) : (
              <Image source={require("../assets/images/profile_light.png")} />
            ),
        }}
      />
      <Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerStyle: { backgroundColor: theme.colors.primary },
          title: "Map",
          headerShadowVisible: false,
          tabBarIcon: (props) =>
            props.focused ? (
              <Image source={require("../assets/images/map_dark.png")} />
            ) : (
              <Image source={require("../assets/images/map_light.png")} />
            ),
        }}
      />
    </Navigator>
  );
};

export default BottomTabNavigator;
