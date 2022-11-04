import { Stack, Tab } from '..';
import PaymentScreen from '../../screens/user/PaymentScreen';
import NavTab from './Tab';

export default function NavStack() {
  return (
    <Stack.Navigator>
      {/* root nav */}
      <Stack.Screen
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
        name="kkk"
        component={NavTab}
      />
      <Stack.Screen name="payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
