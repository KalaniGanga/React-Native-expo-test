import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/core";
import { FloatingActionButton, Loader, TouchableText } from "../components";
import { Image, Text, View } from "react-native";
import { BottomSheet } from "react-native-btr";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStationsRequest,
  getStationsRequest,
  resetData,
} from "../stores/action/stationAction";
import { getPreciseDistance } from "geolib";
import { mapStyles } from "../styles";

const MapScreen = () => {
  const dispatch = useDispatch();
  const stationsData = useSelector((state) => state.stationReducer);
  const navigation = useNavigation();
  const {
    container,
    mapContainer,
    markerContainer,
    markerImage,
    bottomSheetDetailContainer,
    bottomSheetContainer,
    bottomSheetRemoveIcon,
    BottomSheetMainText,
    row,
    detailImage,
    lable,
  } = mapStyles;
  const [visible, setVisible] = useState(false);
  const [allStations, setAllStations] = useState([]);
  const [selectStation, setSelectStation] = useState(null);
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    getCurrentLocation();
    dispatch(getStationsRequest());
  }, []);

  useEffect(() => {
    if (stationsData.stations && stationsData.stations.length !== 0) {
      setAllStations(stationsData.stations);
    }
  }, [stationsData]);

  const calculatePreciseDistance = (stationLocation) => {
    let pdis = getPreciseDistance(currentLocation, stationLocation);
    return pdis;
  };

  const getCurrentLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let geoLocation = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      let location = {
        latitude: geoLocation.coords.latitude,
        longitude: geoLocation.coords.longitude,
      };
      setUserLocation(location);
      setCurrentLocation(location);
    })();
  };

  const toggleBottomSheet = () => {
    setVisible(!visible);
  };

  const addStation = () => {
    dispatch(resetData());
    navigation.navigate("addStation", userLocation);
  };

  const onSelectStation = (data) => {
    let distance = calculatePreciseDistance({
      latitude: data.lat,
      longitude: data.lon,
    });
    setSelectStation({
      distance: distance >= 1000 ? `${distance / 1000}km` : `${distance}m`,
      ...data,
    });
    setVisible(true);
  };

  const deleteStation = () => {
    dispatch(deleteStationsRequest(selectStation));
  };

  const showStationsType = () => {
    let stationsType;
    if (selectStation && selectStation.type === "public") {
      stationsType = "Public station";
    } else if (selectStation && selectStation.type === "private") {
      stationsType = "Private station";
    } else {
      stationsType = "";
    }
    return stationsType;
  };

  return (
    <View style={container}>
      {userLocation.latitude !== null ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomControlEnabled={false}
          style={mapContainer}
          showsUserLocation
          showsMyLocationButton
          minZoomLevel={9}
          maxZoomLevel={12}
          moveOnMarkerPress={false}
          onPress={(e) => setUserLocation(e.nativeEvent.coordinate)}
        >
          <Marker
            animation={true}
            draggable
            coordinate={userLocation}
            image={require("../assets/images/location_b.png")}
            onDragEnd={(e) => setUserLocation(e.nativeEvent.coordinate)}
          >
            <View style={markerContainer}>
              <Image
                style={markerImage}
                source={require("../assets/images/home.png")}
              />
            </View>
          </Marker>
          {allStations.length !== 0 &&
            allStations.map((station, i) => (
              <Marker
                key={station.id}
                coordinate={{ latitude: station.lat, longitude: station.lon }}
                image={require("../assets/images/location_ash.png")}
                onPress={() => {
                  onSelectStation(station);
                }}
              >
                <View style={markerContainer}>
                  <Image
                    style={markerImage}
                    source={require("../assets/images/station_icon.png")}
                  />
                </View>
              </Marker>
            ))}
        </MapView>
      ) : (
        <Loader />
      )}
      <FloatingActionButton onPress={addStation} />

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet}
      >
        <View style={bottomSheetContainer}>
          <Image
            style={bottomSheetRemoveIcon}
            source={require("../assets/images/station_remove.png")}
          />
          <Text style={BottomSheetMainText}>
            {selectStation ? selectStation.stationName : ""}
          </Text>
          <View style={row}>
            <View style={bottomSheetDetailContainer}>
              <Image
                style={detailImage}
                source={require("../assets/images/station_icon_ash.png")}
              />
              <Text style={lable}>{showStationsType()}</Text>
            </View>
            <View style={bottomSheetDetailContainer}>
              <Image
                style={detailImage}
                source={require("../assets/images/walking.png")}
              />
              <Text style={lable}>{`${
                selectStation ? selectStation.distance : ""
              } away`}</Text>
            </View>
          </View>
          <TouchableText title={"Delete station"} onPress={deleteStation} />
        </View>
      </BottomSheet>
    </View>
  );
};

export default MapScreen;
