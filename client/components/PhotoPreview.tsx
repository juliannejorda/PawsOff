import { Image, Text, TouchableOpacity, View } from "react-native";
import ToastManager, { Toast } from "toastify-react-native";
import axios from "axios";
interface PhotoPreviewProps {
  photo: string;
  setPhoto: (photo: string | null) => void;
}

export default function PhotoPreview({ photo, setPhoto }: PhotoPreviewProps) { 
  async function submitPicture() {
    const formData = new FormData();

    formData.append("image", {
      uri: photo,
      name: "photo.jpg",
      type: "image/jpeg",
    } as any);

    try {
      const { data } = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/images/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      Toast.success(data.message || "Photo was sent!");

    } catch (error: any) {
      console.error(error);
      if (error.response) {
        Toast.error(error.response.data.error || "Failed to send photo.");
      } else {
        Toast.error("Network error! Please try again.");
      }
    }

  }

  return (
    <View className="flex-1 justify-center items-center">
      <ToastManager/>
      <Image source={{ uri: photo }} className="w-4/5 h-3/5 rounded-lg" />
      <View className="flex flex-row gap-3 w-4/5 justify-evenly">
        <TouchableOpacity
          className="bg-blue-500 px-4 py-3 mt-4 rounded-lg w-1/3"
          onPress={() => submitPicture()}
        >
          <Text className="text-white text-lg font-semibold text-center">
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-red-500 px-4 py-3 mt-4 rounded-lg w-1/3"
          onPress={() => setPhoto(null)}
        >
          <Text className="text-white text-lg font-semibold text-center">
            Retake
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
