import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../screens/LoginScreen";
import { AddStationScreen } from "../screens";
import theme from "../theme/theme";

const { Navigator, Screen } = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: { backgroundColor: theme.colors.primary },
            title: "Log in",
            headerShadowVisible: false,
          }}
        />
        <Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Screen
          name="addStation"
          component={AddStationScreen}
          options={{
            headerStyle: { backgroundColor: theme.colors.primary },
            title: "Create Station",
            headerShadowVisible: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default index;
