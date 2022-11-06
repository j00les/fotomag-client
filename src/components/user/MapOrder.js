import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { FAB } from 'react-native-paper';
import { styles } from '../../styles/style';

export default function MapOrder({ route }) {
  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -6.2605786,
          longitude: 106.78249,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0421,
        }}
        // showsBuildings={true}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: -6.2605786,
            longitude: 106.78249,
            // latitudeDelta: 2.0922,
            // longitudeDelta: 1.0421,
          }}
        />

        {/* <FAB icon="plus" style={styles.fab} onPress={() => console.log('Pressed')} /> */}
        {/* <AntDesign name="right" size={24} color="black" /> */}
      </MapView>
    </>
  );
}

// <PaperProvider
//   settings={{
//     icon: props => <AwesomeIcon {...props} />,
//   }}
//   theme={this.state.theme}
// >
//   // ...
// </PaperProvider>
