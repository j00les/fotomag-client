import MapViewDirections from "react-native-maps-directions";
import MapView from "react-native-maps";
import { Button, Dimensions, Text, View } from "react-native";
import { io } from "socket.io-client";
import * as Location from "expo-location";
import { styles } from "../../styles/style";
import { useEffect } from "react";
import { useState } from "react";
import { URL } from "../../stores/consent/consent";

const socket = io(`${URL}`);

const GOOGLE_MAPS_APIKEY = "AIzaSyAkNQFV5IHPqRcPUwy2eibkgMyYjy0Et20";
const latitudeDelta = 0.0922;

const screen = Dimensions.get("window");
const longitudeDelta = latitudeDelta * (screen.width / screen.height);

export default TrackingCourier = () => {
  const [status, setStatus] = useState("");
  const [trackingInterval, setTrackingInterval] = useState(null);
  const [lat, setLat] = useState(-6.2601265);
  const [long, setLong] = useState(106.7789147);
  const test = () => {
    socket.emit("test", "dapet dong");
  };

  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // setErrorMsg("Permission to access location was denied");
      return;
    }
  };

  const getLoc = async () => {
    let data = await Location.getCurrentPositionAsync({});
    return data;
  };

  useEffect(() => {
    getLoc().then((loc) => {
      setLat(loc.coords.latitude);
      setLong(loc.coords.longitude);
    });
  }, []);

  useEffect(() => {
    getPermissions();
    if (status === "Delivery") {
      const IntervalID = setInterval(() => {
        getLoc().then((newLoc) => {
          socket.emit("getLoc", newLoc);
          setLat(newLoc.coords.latitude);
          setLong(newLoc.coords.longitude);
        });
      }, 1000);
      setTrackingInterval(IntervalID);
    } else {
      clearInterval(trackingInterval);
    }
  }, [status]);

  const coordinates = [
    // driver
    {
      latitude: lat,
      longitude: long,
    },
    // cust
    { latitude: -6.2583095, longitude: 106.7746555 },
    ,
  ];

  const latitude = lat;
  const longitude = long;

  return (
    <>
      <View style={styles.container}>
        <View className="h-full w-full justify-center">
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
          <View className="w-full">
            <View className="w-[50%] justify-center ">
              <Button title="test" onPress={() => test()} />
              <Button title="go" onPress={() => setStatus("Delivery")} />
              <Button title="Stop" onPress={() => setStatus("Delivered")} />
              <Button title="get" onPress={() => getPermissions()} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
