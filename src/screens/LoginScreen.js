import { KeyboardAvoidingView } from "react-native";
import React, { useState, useEffect } from "react";
import { FilledButton, InputTextField } from "../components";
import { useNavigation } from "@react-navigation/core";
import { commonStyles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../stores/action/authAction";
import ErrorMessage from "../components/ErrorMessage";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  const authData = useSelector((state) => state.authReducer);
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  useEffect(() => {
    setErrorMessage(authData.error ? authData.error : "");
    if (authData.isLogged) {
      navigation.replace("Main");
    }
  }, [authData]);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleLogin = () => {
    if (email.match(validRegex)) {
      dispatch(loginRequest({ email, password }));
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter valid email address!");
    }
  };

  return (
    <KeyboardAvoidingView style={commonStyles.container}>
      <InputTextField
        title={"Email"}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputTextField
        title={"Password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <FilledButton
        title={"Log in"}
        onPress={handleLogin}
        disabled={email == "" || password == ""}
      />
      {errorMessage && <ErrorMessage errMsg={errorMessage} />}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
