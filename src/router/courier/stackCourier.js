import { Stack } from "..";
import HomeCourier from "../../screens/courier/HomeCourier";
import TrackingCourier from "../../screens/courier/TrackingCourier";

export default CourierStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeCourier"
          component={HomeCourier}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TrackingCourier" component={TrackingCourier} />
      </Stack.Navigator>
    </>
  );
};
