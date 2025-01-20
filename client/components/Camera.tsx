import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraType as CameraTypeEnum } from "../constants/CameraEnum";

export default function App() {
  const [facing, setFacing] = useState<CameraType>(CameraTypeEnum.BACK);
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  // Camera permissions are still loading.
  if (!permission) {
    return <View />;
  }
  // Camera permissions are not granted yet.
  if (!permission.granted) {
    return (
      <View className="h-full justify-center items-center px-4">
        <Text className="text-center mb-4 text-lg">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) =>
      current === CameraTypeEnum.BACK
        ? CameraTypeEnum.FRONT
        : CameraTypeEnum.BACK
    );
  }

  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo!.uri);
    }
  }

  return (
    <View className="flex-1">
      {photo ? (
        <View className="flex-1 justify-center items-center">
          <Image source={{ uri: photo }} className="w-4/5 h-3/5 rounded-lg"/>
          <TouchableOpacity className="bg-blue-500 px-4 py-3 mt-4 rounded-lg" onPress={() => setPhoto(null)}>
            <Text className="text-white text-lg font-semibold text-center">Retake</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View className="absolute bottom-16 flex-row justify-between items-center w-full px-12">
            <TouchableOpacity className="bg-blue-500 px-4 py-3 rounded-lg" onPress={toggleCameraFacing}>
              <Text className="text-white text-lg font-semibold">Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 px-4 py-3 rounded-lg" onPress={takePicture}>
              <Text className="text-white text-lg font-semibold">Take Picture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});

