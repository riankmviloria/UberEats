import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Header from "./Header";
import BasketListItem from "../../components/BasketListItem";
import restaurant from "../../../assets/restaurants.json";
import orders from "../../../assets/orders.json";
const order = orders[0];

const OrderDetailScreen = () => {
  return (
    // <View style={styles.page}>
    <FlatList
      ListHeaderComponent={<Header order={order} />}
      data={restaurant[0].dishes}
      renderItem={({ item }) => <BasketListItem basket={item} />}
    />
    // </View>
  );
};

export default OrderDetailScreen;
