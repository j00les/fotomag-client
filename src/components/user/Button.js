import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import axios from 'axios';
import MapOrder from './MapOrder';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../stores/actions/transactionAction';

export default function Button({ reference, func, order }) {
  const dispatch = useDispatch();

  console.log(order);

  // mentahan
  {
    /* <TouchableOpacity
        onPress={() => retrievePdf}
        className="border rounded-md  w-[15%] py-2 bg-white self-end"
      >
        <Text className="text-center uppercase"> Sematkan file</Text>
      </TouchableOpacity> */
  }

  //modal (pesan button)
  if (reference === 'send-pdf') {
    return (
      <TouchableOpacity
        onPress={() => func()}
        className="border mt-3 rounded-md mx-auto w-[100%] py-2 bg-white self-end"
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
  } else if (reference === 'map-button') {
    return (
      <TouchableOpacity
        onPress={() => dispatch(createOrder(order))}
        className="border rounded-md  py-2 bg-white self-end absolute bottom-2 right-4"
      >
        <Text className="text-center uppercase"> Selanjutnya</Text>
      </TouchableOpacity>
    );
  }
}
