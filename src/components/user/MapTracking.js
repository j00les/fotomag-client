import { AntDesign } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import { styles } from '../../styles/style';
const latitude = -6.1753871;
const longitude = 106.8249641;
const latitudeDelta = 0.0922;
//monas 1 gambir

// "latitude": -6.1753871, "longitude": 106.8249641
//hacktiv
// "latitude": -6.1753871, "longitude": 106.8249641
// const origin = {
//   latitude: -6.1753871,
//   longitude: 106.8249641,
// };
// const destination = {
//   latitude: -6.260826,
//   longitude: 106.7815368,
// };

import { io } from 'socket.io-client';
// import Maps from "./screens/tesmap";

import * as Location from 'expo-location';

const socket = io('https://59de-139-228-111-125.ap.ngrok.io');

// export default function App() {
//   const [location, setLocation] = useState("tot");
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [loc, setLoc] = useState("");
//   const [paket, setPaket] = useState(null);
//   const [state, setState] = useState({
//     pickupCords: {
//       latitude: -6.2,
//       longitude: 106.816666,
//     },
//   });

//   const get = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       setErrorMsg("Permission to access location was denied");
//       return;
//     }
//     let data = await Location.getCurrentPositionAsync({});
//     console.log(location, "ini location di client");
//     setLocation(data);
//     socket.emit("updateLocation", location);
//   };
//   let trx = "1234";

//   const nyoba = () => {
//     socket.emit("loc", trx, "lols");
//   };

// useEffect(() => {
//   console.log("masuk di app");
//   socket.emit("join-room", "asyncstorage-userId");
//   socket.on("sendLocation", (location) => {
// listener dirubah location kurir
// })
// let interval;
// if (paket.status === "delivery") {
//   interval = setInterval(() => {
//     get();
//   }, 1000);
// } else {
//   clearInterval(interval);
// }
// get().then();

// socketcls.on("connect", (socket) => {
//   console.log(socket);
//   console.log("masuk client", socket.id); // x8WIv7-mJelg7on_ALbx
// });

// socket.on("updateLocation", (location) => {
//   console.log(location, "<<<<<<<");
// });

// socket.on("disconnect", (socket) => {
//   console.log("disconnect client", socket.id); // undefined
// });
// }, [paket]);

// }

const screen = Dimensions.get('window');
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
const GOOGLE_MAPS_APIKEY = 'AIzaSyAkNQFV5IHPqRcPUwy2eibkgMyYjy0Et20';

export default function MapTracking({ route, reference }) {
  const [paket, setPaket] = useState(null);
  const [location, setLocation] = useState('tot');

  const get = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let data = await Location.getCurrentPositionAsync({});
    console.log(location, 'ini location di client');
    setLocation(data);
    socket.emit('updateLocation', location);
  };
  let go = true;
  let intervalID;
  const end = () => {
    clearInterval(intervalID),
      console.log('masuk end'),
      setPaket('Bukan delivery'),
      console.log(paket);
  };
  useEffect(() => {
    // get().then(() => {
    //   console.log('izin dapet');
    // });

    // socket.emit('join-room', 'asyncstorage-userId');
    // socket.on('sendLocation', location => {
    // listener dirubah location kurir
    // });
    if (paket === 'delivery') {
      intervalID = setInterval(() => {
        let data = Location.getCurrentPositionAsync({}).then(res => {
          setLocation(res);
        });
        console.log(location, 'ini location di client');
        setLocation(data);
        get();
        console.log(paket);
        socket.emit('nyoba', 'location');
      }, 1000);
    } else {
      clearInterval(intervalID);
    }

    // if (paket === 'delivery') {
    //   intervalID = setInterval(() => {
    //     let data = Location.getCurrentPositionAsync({}).then(res => {
    //       setLocation(res);
    //     });
    //     console.log(location, 'ini location di client');
    //     setLocation(data);
    //     get();
    //     console.log(paket);
    //     socket.emit('nyoba', 'location');
    //   }, 1000);
    //   return;
    // } else {
    //   return () => clearInterval(intervalID);
    // }
  }, [paket]);

  let trx = '1234';
  const nyoba = () => {
    socket.emit('loc', trx, 'lols');
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
          strokeColor={'hotpink'}
        />
      </MapView>
      <Button title="go" onPress={() => setPaket('delivery')} />
      <Button title="go go" onPress={() => setPaket('Bukan Dedamsd')} />
      <Button title="end" onPress={() => end()} />

      <Button title="nyoba" onPress={() => nyoba()} />
    </View>
  );
}
