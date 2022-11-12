import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function LottieSucc() {
  return (
    <View className="mx-auto flex-1  justify-center items-center w-[200] h-[120]  mt-10">
      <LottieView source={require("../../../assets/userLottie/97240-success.json")} autoPlay loop />
    </View>
  );
}
