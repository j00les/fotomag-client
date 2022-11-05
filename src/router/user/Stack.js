import { Stack, Tab } from '..';
import DetailScreen from '../../screens/user/DetailScreen';
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
      <Stack.Screen name="detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
