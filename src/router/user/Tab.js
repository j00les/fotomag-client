import { Tab } from '..';
import HistoryScreen from '../../screens/user/HistoryScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../screens/user/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import NotificationScreen from '../../screens/user/NotificationScreen';

export default function NavTab() {
  return (
    <Tab.Navigator
      barStyle={{
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        borderTopWidth: 10,
        borderTopColor: 'gray',
        backgroundColor: 'gray',
      }}
      activeColor="purple"
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),

          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => <MaterialIcons name="history" size={24} color={color} />,
        }}
        name="History"
        component={HistoryScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
          ),
        }}
        name="Notification"
        component={NotificationScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
        }}
        name="Profile"
        component={NotificationScreen}
      />
    </Tab.Navigator>
  );
}
