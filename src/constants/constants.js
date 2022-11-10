import { Dimensions } from "react-native";

export const baseURL = "https://16be-139-228-111-125.ap.ngrok.io";
export const latitude = -6.1753871;
export const longitude = 106.8249641;
export const latitudeDelta = 0.0922;

export const screen = Dimensions.get("window");
export const longitudeDelta = latitudeDelta * (screen.width / screen.height);
