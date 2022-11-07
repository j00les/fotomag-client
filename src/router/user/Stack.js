import { Stack, Tab } from '..';
import MapOrder from '../../components/user/MapOrder';
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
      <Stack.Screen name="map-order" component={MapOrder} />
    </Stack.Navigator>
  );
}
