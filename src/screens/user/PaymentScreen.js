import { useNavigation, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";

export default function PaymentScreen() {
  //tangkep paramater 2 navigate
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <WebView
        source={{
          uri: route.params.redirect_url,
        }}
        onNavigationStateChange={navState => {
          if (navState.title === "Google") {
            navigation.navigate("StackAnim");
          }
        }}
      />
    </>
  );
}
