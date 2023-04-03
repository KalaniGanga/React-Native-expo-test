import { GOOGLE_API_KEY } from 'react-native-dotenv';

export default ({ config }) => {
  console.log(config); // prints 'My App'
  return {
    ...config,
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      config: {
        googleMaps: {
          apiKey: GOOGLE_API_KEY,
        },
      },
      permissions: ["ACCESS_FINE_LOCATION"],
    },
  };
};
