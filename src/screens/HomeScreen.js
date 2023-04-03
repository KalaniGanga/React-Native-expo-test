import { Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { Button } from "../components";
import { commonStyles, homeStyles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../stores/action/authAction";
import { useNavigation } from "@react-navigation/core";
import { resetData } from "../stores/action/stationAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.authReducer);
  const { container, imageStyle, titleStyle } = homeStyles;
  const navigation = useNavigation();

  const handleSignOut = () => {
    dispatch(logoutRequest());
    dispatch(resetData());
  };

  useEffect(() => {
    if (!authData.isLogged) {
      navigation.replace("Login");
    }
  }, [authData.isLogged]);

  return (
    <View style={commonStyles.container}>
      <View style={container}>
        <Image
          style={imageStyle}
          source={require("../assets/images/circle.png")}
        />
        <Text style={titleStyle}>Name Firstname</Text>
      </View>
      <Button title={"Log out"} onPress={handleSignOut} />
    </View>
  );
};

export default HomeScreen;
