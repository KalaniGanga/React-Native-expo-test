import { View } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Button,
  InputTextField,
  DropDownField,
  FilledBottomButton,
  Loader,
} from "../components";
import { commonStyles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { addStationRequest } from "../stores/action/stationAction";
import FlashMessage, { showMessage } from "react-native-flash-message";

const AddStationScreen = () => {
  const [name, setName] = useState("");
  const authData = useSelector((state) => state.authReducer);
  const stationReducer = useSelector((state) => state.stationReducer);
  const [stationType, setStationType] = useState("public");
  const route = useRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    if (stationReducer.isAdded) {
      showMessage({
        title: "Success!",
        message: "Station added successfully!",
        type: "success",
      });
      setName("");
    }
  }, [stationReducer.isAdded]);

  const addStation = async () => {
    let data = {
      userId: authData.userId,
      type: stationType,
      stationName: name,
      isDelete: false,
      lat: route.params?.latitude,
      lon: route.params?.longitude,
    };
    dispatch(addStationRequest(data));
  };

  return !authData.requesting ? (
    <View style={commonStyles.container}>
      <InputTextField title={"Name"} onChangeText={(text) => setName(text)} />
      <DropDownField
        title={"Type"}
        items={[
          { lable: "Public", value: "public" },
          { lable: "Private", value: "private" },
        ]}
        selectedValue={stationType}
        onValueChange={(itemValue) => setStationType(itemValue)}
      />
      <Button title={"Take picture"} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <FilledBottomButton
          title={"Add station"}
          onPress={addStation}
          disabled={name !== "" ? false : true}
        />
      </View>
      <FlashMessage position="top" />
    </View>
  ) : (
    <Loader />
  );
};

export default AddStationScreen;
