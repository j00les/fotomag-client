import { AntDesign } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { styles } from '../../styles/style';
import SearchMap from './SearchMap';
import axios from 'axios';
import Button from './Button';
const latitude = -6.1753871;
const longitude = 106.8249641;
const latitudeDelta = 0.0922;
const screen = Dimensions.get('window');
const longitudeDelta = latitudeDelta * (screen.width / screen.height);

// const longitudeDelta = latitudeDelta / (screen.width / screen.height);
export default function MapOrder({ route }) {
  const mapRef = useRef();
  // const markerRef = useRef();

  const order = route?.params?.orderData;

  const [st, setSt] = useState('');
  const [loc, setLoc] = useState({});
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

  function handleCoordinate(coordinate) {
    setRegion({ ...region, markers: coordinate });
    mapRef.current?.animateToRegion({ ...coordinate, ...region.delta }, 1000);
  }

  useEffect(() => {
    if (region.markers) {
      const lat = region.markers.latitude;
      const long = region.markers.longitude;
      axios({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyAkNQFV5IHPqRcPUwy2eibkgMyYjy0Et20`,
      })
        .then(res => {
          const add = res.data.results[0].formatted_address;
          setSt(add);
          setLoc(region.markers);
          order.address = add;
          order.location = loc;
        })

        .catch(err => console.log(err));
    }
  }, [region.markers]);

  // region.markers);
  // console.log(order);
  return (
    <View style={{ flex: 1, ...StyleSheet.absoluteFillObject }}>
      <MapView
        maxZoomLevel={16}
        minZoomLevel={16}
        ref={mapRef}
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
        style={styles.map}
        onPress={e => {
          handleCoordinate(e.nativeEvent.coordinate);
        }}
      >
        <Marker coordinate={region.markers} />
      </MapView>

      {/* field */}
      <SearchMap region={region} handleCoordinate={handleCoordinate} />

      <View className="absolute bottom-0 w-1/2 bg-blue-400">
        <Text>Alamat</Text>
        <Text>{st}</Text>
      </View>

      <Button order={order} reference={'map-button'} />
    </View>
  );
}
