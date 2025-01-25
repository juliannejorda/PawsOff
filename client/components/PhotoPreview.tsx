import { Image, Text, TouchableOpacity, View } from "react-native";

interface PhotoPreviewProps {
  photo: string;
  setPhoto: (photo: string | null) => void;
}

export default function PhotoPreview({photo, setPhoto}: PhotoPreviewProps) {
    function sendPicture() {
      console.log("HELLO");
    }

    return (
      <View className="flex-1 justify-center items-center">
        <Image source={{ uri: photo }} className="w-4/5 h-3/5 rounded-lg"/>
        <View className="flex flex-row gap-3 w-4/5 justify-evenly">
          <TouchableOpacity className="bg-blue-500 px-4 py-3 mt-4 rounded-lg w-1/3" onPress={() => sendPicture()}>
            <Text className="text-white text-lg font-semibold text-center">Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-red-500 px-4 py-3 mt-4 rounded-lg w-1/3" onPress={() => setPhoto(null)}>
            <Text className="text-white text-lg font-semibold text-center">Retake</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}