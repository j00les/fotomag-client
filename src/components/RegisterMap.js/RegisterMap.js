import { useRef } from "react";
import { useState } from "react";
import { Text, Modal, StyleSheet, View, Pressable, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { latitude, latitudeDelta, longitude, longitudeDelta } from "../../constants/constants";
import { styles } from "../../styles/style";

export default function RegisterMap() {
  const [modalVisible, setModalVisible] = useState(false);
  const mapRef = useRef();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text className="text-3xl">Pilih Lokasi</Text>
            <View style={stylesMap.container}>
              {/* map disini */}
              <MapView
                ref={mapRef}
                maxZoomLevel={16}
                minZoomLevel={16}
                classsName="w-400 h-500"
                style={stylesMap.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude,
                  longitude,
                  latitudeDelta,
                  longitudeDelta,
                }}
              >
                {/* <Marker coordinate={region.markers} /> */}
              </MapView>
            </View>

            <Pressable
              Button
              hide
              modal
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
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
