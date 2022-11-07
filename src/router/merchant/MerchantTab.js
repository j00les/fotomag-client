import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeMerchant from "../../screens/merchant/HomeMerchant";
import DeliveryMerchant from "../../screens/merchant/DeliveryMerchant";
import HistoryMerchant from "../../screens/merchant/HistoryMerchant";
import SettingsMerchant from "../../screens/merchant/SettingsMerchant";

const Tab = createMaterialBottomTabNavigator();
export default MerchantTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeMerchant"
        component={HomeMerchant}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="DeliveryMerchant"
        component={DeliveryMerchant}
        options={{ title: "Delivery" }}
      />
      <Tab.Screen
        name="HistoryMerchant"
        component={HistoryMerchant}
        options={{ title: "History" }}
      />
      <Tab.Screen
        name="SettingsMerchant"
        component={SettingsMerchant}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
};
