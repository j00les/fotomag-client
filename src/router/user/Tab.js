import { Tab } from "..";
import HistoryScreen from "../../screens/user/HistoryScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../screens/user/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import OrderScreen from "../../screens/user/OrderScreen";
import ProfileScreen from "../../screens/user/ProfileScreen";
// import { Ionicons } from "@expo/vector-icons";

export default function UserTab() {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        borderTopWidth: 10,
        borderTopColor: "#003b4f",
        backgroundColor: "#003b4f",
      }}
      activeColor="#ffff"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),

          headerShown: false,
        }}
        name="home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color }) => <Ionicons name="list-outline" size={23} color="white" />,
        }}
        name="Order"
        component={OrderScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => <MaterialIcons name="history" size={25} color={color} />,
        }}
        name="History"
        component={HistoryScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={22} color={color} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
