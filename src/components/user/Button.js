import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import axios from "axios";
// import MapOrder from './Map';
import { createOrder } from "../../stores/actions/userAction/";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function Button({ reference, func, order }) {
  // console.log(location)
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  // console.log(user.transactionData, "masko");

  const navigation = useNavigation();

  function proceedOrder() {
    console.log("masok");
    dispatch(createOrder(order));
    if (user.transactionData) {
      navigation.navigate("Orders");
    }
  }
  // console.log(user);

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
  if (reference === "send-pdf") {
    return (
      <TouchableOpacity
        onPress={() => func()}
        className="bg-secondary rounded-md mx-auto w-[100%] py-2  self-end"
      >
        <Text className="text-center text-white uppercase">Unggah dokumen</Text>
      </TouchableOpacity>
    );
  } else if (reference === "detail-map") {
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
  } else if (reference === "map-button") {
    return (
      <TouchableOpacity
        onPress={() => proceedOrder()}
        className="border rounded-md  py-2 bg-white self-end absolute bottom-2 right-4"
      >
        <Text className="text-center uppercase"> Selanjutnya</Text>
      </TouchableOpacity>
    );
  }
}
