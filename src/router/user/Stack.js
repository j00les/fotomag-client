import { Stack, Tab } from "..";
import MapOrder from "../../components/user/Map";
import MapTracking from "../../components/user/MapTracking";
import DetailScreen from "../../screens/user/DetailScreen";
import OrderScreen from "../../screens/user/OrderScreen";
import PaymentScreen from "../../screens/user/PaymentScreen";
import NavTab from "./Tab";

export default function UserStack() {
  return (
    <Stack.Navigator initialRouteName="">
      {/* root nav */}
      <Stack.Screen
        options={{
          tabBarLabel: "Home",
          headerShown: false,
        }}
        name="kkk"
        component={NavTab}
      />

      <Stack.Screen name="payment" component={PaymentScreen} />
      <Stack.Screen name="Detail Toko" component={DetailScreen} />
      <Stack.Screen name="map-order" component={MapOrder} />
      <Stack.Screen name="order-detail" component={MapTracking} />
      <Stack.Screen name="Orders" component={OrderScreen} />
    </Stack.Navigator>
  );
}
