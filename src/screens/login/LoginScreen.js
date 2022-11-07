import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

export default LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center">
      <View className="flex-1 w-full">
        <View className="h-[25%] w-full bg-blue-200 p-3 rounded-b-3xl">
          <Text className="text-4xl ">Welcome Back</Text>
          <Text className="text-xl">Login to continue</Text>
        </View>
        <View className="h-[75%] w-full bg-red-300 rounded-b-2xl">
          <LottieView source={require('../../../assets/merchanLottie/Login.json')} autoPlay loop />
        </View>
      </View>
      <View className="flex-1 w-full rounded-t-3xl bg-blue-200 items-center">
        <View className="gap-2 mt-2 w-[70%]">
          <View className="gap-1">
            <Text>Email</Text>
            <TextInput className="border-2 rounded-lg px-2" />
          </View>
          <View className="gap-1 mb-2">
            <Text>Password</Text>
            <TextInput secureTextEntry className="border-2 rounded-lg px-2" />
          </View>
          <View className="items-center">
            <TouchableOpacity
              onPress={() => navigation.navigate('UserTab')}
              className="border-2 rounded-xl w-[50%] h-9 bg-blue-400 justify-center"
            >
              <Text className="text-center">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="items-center flex-row gap-1">
            <Text>Don't Have Account?</Text>
            <TouchableOpacity>
              <Text className="text-red-400">Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
