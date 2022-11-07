import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export default function PaymentScreen() {
  //tangkep paramater 2 navigate
  const route = useRoute();

  return (
    <>
      <WebView
        source={{
          uri: route.params.redirect_url,
        }}
        onNavigationStateChange={navState => {
          // console.log(navState.url);
        }}
      />
    </>
  );
}
