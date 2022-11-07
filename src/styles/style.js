import { Text, Dimensions, StyleSheet } from 'react-native';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

export const CustomText = ({ text, font }) => {
  let [fontsLoaded] = useFonts({
    Poppins: Poppins_500Medium,
  });

  console.log(fontsLoaded);
  return <Text style={{ fontFamily: 'Poppins' }}>{text}</Text>;
};

export const styles = StyleSheet.create({
  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    padding: 20,

    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  //map
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // width: Dimensions.get('window').width,
    // height: 500,
  },

  //floating
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  //palette

  primary_bg: {
    backgroundColor: '#003b4f',
    primary_light: '#38657b',
    primary_dark: '#001627',

    secondary: '#ff7565',
    secondary_light: '#ffa793',
    secondary_dark: '#c7443a',
  },
});
