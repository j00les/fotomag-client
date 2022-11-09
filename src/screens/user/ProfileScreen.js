import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("LoginScreen");
  };

  return (
    <View>
      <Text>ini proifle</Text>
      <Button title="Keluar" onPress={() => logout()} />
    </View>
  );
}
