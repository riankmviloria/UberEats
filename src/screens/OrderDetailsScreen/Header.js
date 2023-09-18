import { View, Text, Image } from "react-native";
import styles from "./styles";


const OrderDetailsScreen = ({ order }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.container}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

        <Text style={styles.menuTitle}>Your Orders</Text>
      </View>
    </View>
  );
};

export default OrderDetailsScreen;
