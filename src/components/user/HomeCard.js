import { View, Text } from 'react-native';
export default function HomeCard({ data: merchantData, screen }) {
  return (
    <View className="border-b rounded-lg mt-2 p-10">
      <Text>{merchantData.name}</Text>
    </View>
  );
}
