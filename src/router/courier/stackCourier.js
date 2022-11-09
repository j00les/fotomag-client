import { Stack } from "..";
import HomeCourier from "../../screens/courier/HomeCourier";

export default CourierStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeCourier"
          component={HomeCourier}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};
