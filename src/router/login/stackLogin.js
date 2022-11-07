import { Stack } from "..";
import LoginScreen from "../../screens/login/LoginScreen";

export default stackLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
