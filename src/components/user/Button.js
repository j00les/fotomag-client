import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import MapOrder from './MapOrder';

export default function Button({ reference }) {
  // mentahan
  {
    /* <TouchableOpacity
        onPress={() => retrievePdf}
        className="border rounded-md  w-[15%] py-2 bg-white self-end"
      >
        <Text className="text-center uppercase"> Sematkan file</Text>
      </TouchableOpacity> */
  }

  //handle pdf
  async function retrievePdf() {
    try {
      const file = await DocumentPicker.getDocumentAsync();
      await axios({
        method: 'post',
        url: 'https://582b-120-188-95-199.ap.ngrok.io/file',
        data: {
          dapetdong: file,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  //modal (pesan button)
  if (reference === 'detail-modal') {
    return (
      <TouchableOpacity
        onPress={() => retrievePdf()}
        className="border rounded-md mx-auto w-[100%] py-2 bg-white self-end"
      >
        <Text className="text-center uppercase"> Sematkan file</Text>
      </TouchableOpacity>
    );
  } else if (reference === 'detail-map') {
    return (
      <>
        <TouchableOpacity
          // onPress={() => retrievePdf()}
          className="border rounded-md mx-auto w-[100%] px-1 py-2 bg-white self-end"
        >
          <Text className="text-center uppercase">Map</Text>
        </TouchableOpacity>
      </>
    );
  }
}
