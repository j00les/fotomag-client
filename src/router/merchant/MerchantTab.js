import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeMerchant from "../../screens/merchant/HomeMerchant";
import DeliveryMerchant from "../../screens/merchant/DeliveryMerchant";
import ProgressMerchant from "../../screens/merchant/ProgressMerchant";
import SettingsMerchant from "../../screens/merchant/SettingsMerchant";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
export default MerchantTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeMerchant"
      barStyle={{
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        borderTopWidth: 10,
        borderTopColor: "#003b4f",
        backgroundColor: "#003b4f",
      }}
    >
      <Tab.Screen
        name="HomeMerchant"
        component={HomeMerchant}
        options={{
          title: "Home",
          tabBarIcon: () => <Feather name="home" size={22} color="white" />,
        }}
      />
      <Tab.Screen
        name="ProgressMerchant"
        component={ProgressMerchant}
        options={{
          title: "Progress",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="timer-sand" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="DeliveryMerchant"
        component={DeliveryMerchant}
        options={{
          title: "Delivery",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cube-send" size={26} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsMerchant"
        component={SettingsMerchant}
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <MaterialIcons name="settings" size={22} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
