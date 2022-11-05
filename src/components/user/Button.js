import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

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
        url: 'https://6445-202-80-217-184.ap.ngrok.io/coba-file',
        data: {
          dapetdong: file,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  //modal
  if (reference === 'detail-modal') {
    return (
      <TouchableOpacity
        onPress={() => retrievePdf()}
        className="border rounded-md mx-auto w-[100%] py-2 bg-white self-end"
      >
        <Text className="text-center uppercase"> Sematkan file</Text>
      </TouchableOpacity>
    );
  }
}
