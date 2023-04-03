import { View, Text } from "react-native";
import React from "react";
import { Camera } from "expo-camera";
import { commonStyles } from "../styles";

const CameraComponent = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  return hasCameraPermission === false ? (
    <Text>No access to camera</Text>
  ) : (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1, width: "100%" }}
        ref={(r) => {
          setCamera(r);
        }}
      >
        <View style={commonStyles.cameraContainer}>
          <View style={commonStyles.cameraButtonContainer}>
            <TouchableOpacity
              onPress={takePicture}
              style={commonStyles.cameraButton}
            />
          </View>
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;
