import { View, Text } from 'react-native';
import { Avatar } from '@rneui/themed';

export default function HomeCard({ data: merchantData, screen }) {
  return (
    <View className="border-b rounded-lg mt-2 p-4 flex-row">
      <View className="lk">
        <Avatar
          containerStyle={{ backgroundColor: '#BDBDBD', borderRadius: 7 }}
          size={55}
          title="toko"
        />
      </View>
      <View className="ml-4">
        <Text className="text-base">{merchantData.name}</Text>
        <Text>{merchantData.address}</Text>
      </View>
    </View>
  );
}

//TRIGGER-BUTTON
{
  /* <button class="btn btn-sm" onClick="payButton" id="pay-button">Join</button> */
}

// SNAP-SCRIPT
{
  /* 
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- @TODO: replace SET_YOUR_CLIENT_KEY_HERE with your client key -->

    <script type="text/javascript"
      src="https://app.sandbox.midtrans.com/snap/snap.js"
      data-client-key="SET_YOUR_CLIENT_KEY_HERE"></script>
    <!-- Note: replace with src="https://app.midtrans.com/snap/snap.js" for Production environment -->
  </head>

 
  <body>
    <button id="pay-button">Pay!</button>
    
    <script type="text/javascript">
      // For example trigger on button clicked, or any time you need

      var payButton = document.getElementById('pay-button');
      payButton.addEventListener('click', function () {
        // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token


        window.snap.pay('TRANSACTION_TOKEN_HERE');
        // customer will be redirected after completing payment pop-up
      });
    </script>
  </body>

</html> */
}

// HIT-BACKEND
// const { data } = await axios({
//   method: "post",
//   url: "/midtrans/pay",
//   headers: {
//     access_token: localStorage.getItem("access_token"),
//   },
// });
// // console.log(data);
// snap.pay(data.token, {
//   onSuccess: (result) => {
//     console.log("success");
//     console.log(result);
//     this.router.push("/chat");
//   },
//   onClose: function () {
//     console.log(
//       "customer closed the popup without finishing the payment"
//     );
//   },
// });
