import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Dimensions, Button } from "react-native";
import { styles } from "../../styles/style";
const latitude = -6.1753871;
const longitude = 106.8249641;
const latitudeDelta = 0.0922;

import { io } from "socket.io-client";

import * as Location from "expo-location";

const socket = io("https://58ba-139-228-111-125.ap.ngrok.io");

const screen = Dimensions.get("window");
const longitudeDelta = latitudeDelta * (screen.width / screen.height);

const coordinates = [
  // driver
  {
    //santaFend
    latitude: -6.171483658690721,
    longitude: 106.82270564138891,
  },
  // cust
  { latitude: -6.1664879725006605, longitude: 106.8232461065054 },
];
const GOOGLE_MAPS_APIKEY = "AIzaSyAkNQFV5IHPqRcPUwy2eibkgMyYjy0Et20";

export default function MapTracking({ route, reference }) {
  const [paket, setPaket] = useState(null);
  const [location, setLocation] = useState("O");
  const [trackingInterval, setTrackingInterval] = useState(null);

  const get = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // setErrorMsg("Permission to access location was denied");
      return;
    }
    let data = await Location.getCurrentPositionAsync({});
    console.log(data, "ini location di client");
    setLocation(data);

    return data;
  };

  useEffect(() => {
    get();
    // socket.emit('join-room', 'asyncstorage-userId');
    // socket.on('sendLocation', location => {
    // listener dirubah location kurir
    // });
    if (paket === "delivery") {
      const intervalID = setInterval(() => {
        get().then((newLoc) => socket.emit("updateLocation", newLoc));
      }, 1000);
      setTrackingInterval(intervalID);
    } else {
      clearInterval(trackingInterval);
    }
  }, [paket]);

  let trx = "1234";
  const nyoba = () => {
    socket.emit("loc", trx, "lols");
    console.log("lol");
  };

  return (
    <View style={styles.container}>
      <MapView
        maxZoomLevel={16}
        minZoomLevel={16}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        }}
        style={styles.map}
      >
        <MapView.Marker coordinate={coordinates[0]} />
        <MapView.Marker coordinate={coordinates[1]} />

        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor={"hotpink"}
        />
      </MapView>
      <Button title="go" onPress={() => setPaket("delivery")} />
      <Button title="end" onPress={() => setPaket("Bukan Dedamsd")} />
      {/* <Button title="end" onPress={() => end()} /> */}

      <Button title="nyoba" onPress={() => nyoba()} />
    </View>
  );
}
