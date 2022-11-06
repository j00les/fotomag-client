import MapView, { MarkerAnimated } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { styles } from '../../styles/style';

export default function OrderScreen() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      ></MapView>
    </View>
  );
}
