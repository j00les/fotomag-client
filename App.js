import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import LoginScreen from "./src/screens/login/LoginScreen";
import RegisterScreen from "./src/screens/login/RegisterScreen";
import { Provider } from "react-redux";
import store from "./src/stores/store";
import MerchantTab from "./src/router/merchant/MerchantTab";
import { Stack } from "./src/router";
import UserStack from "./src/router/user/Stack";
import MainStack from "./src/router/MainStack";
import StackCourier from "./src/router/courier/stackCourier";

import TrackingCourier from "./src/screens/courier/TrackingCourier";

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
      {/* <TrackingCourier /> */}
      {/* <NavigationContainer>
        <StackCourier />
      </NavigationContainer> */}
    </Provider>
  );
}
