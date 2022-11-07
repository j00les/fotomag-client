import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeMerchant from "../../screens/merchant/HomeMerchant";

const Tab = createMaterialBottomTabNavigator();
export default MerchantTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeMerchant" component={HomeMerchant} />
      {/* <Tab.Screen name="NotifMerchant" />; */}
    </Tab.Navigator>
  );
};
