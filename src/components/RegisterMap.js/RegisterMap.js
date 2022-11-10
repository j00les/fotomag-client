import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Feather } from "@expo/vector-icons";

import { TouchableOpacity, Text, Modal, StyleSheet, View, Pressable } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { latitude, latitudeDelta, longitude, longitudeDelta } from "../../constants/constants";
import { styles } from "../../styles/style";
import { useNavigation } from "@react-navigation/native";
import { getLongLatForRegister } from "../../stores/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterMap() {
  const [modalVisible, setModalVisible] = useState(false);
  const mapRef = useRef();

  const dispatch = useDispatch();
  const [region, setRegion] = useState({
    delta: {
      latitudeDelta,
      longitudeDelta,
    },
    markers: {
      latitude,
      longitude,
    },
  });

  function proceedToRegister() {
    dispatch(getLongLatForRegister(region.markers));
    setModalVisible(false);
    // navigation.navigate("RegisterScreen", { coords: region.markers });
  }

  function handleCoordinate(coordinate) {
    setRegion({ ...region, markers: coordinate });
    mapRef.current?.animateToRegion({ ...coordinate, ...region.delta }, 1000);
  }

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text className="text-3xl">Pilih Lokasi</Text>

            <TouchableOpacity
              className="rounded-lg absolute right-4 top-4"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Feather name="x-circle" size={24} color="black" />
            </TouchableOpacity>
            <View style={stylesMap.container}>
              {/* map disini */}
              <MapView
                style={stylesMap.map}
                ref={mapRef}
                maxZoomLevel={16}
                minZoomLevel={16}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude,
                  longitude,
                  latitudeDelta,
                  longitudeDelta,
                }}
                onRegionChangeComplete={res => {
                  setRegion({
                    ...region,
                    delta: {
                      latitudeDelta: res.latitudeDelta,
                      longitudeDelta: res.longitudeDelta,
                    },
                  });
                }}
                onPress={e => {
                  handleCoordinate(e.nativeEvent.coordinate);
                }}
              >
                <Marker coordinate={region.markers} />
              </MapView>
            </View>

            {/* button */}
            <TouchableOpacity
              onPress={() => proceedToRegister()}
              className="rounded-lg w-[50%] h-10 bg-primary justify-center"
            >
              <Text className="text-white text-center px-[5%] py-2 rounded-lg">Pilih</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Pressable
        className="rounded-lg w-[80%] h-11 bg-primary border border-white self-end justify-center"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-white text-center rounded-lg">Lokasi</Text>
      </Pressable>
    </View>
  );
}

const stylesMap = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: 400,
    height: 600,
  },
});
