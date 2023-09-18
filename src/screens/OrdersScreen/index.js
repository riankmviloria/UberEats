import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/orders.json";

const OrdersScreen = () => {
  return (
    <View style={styles.page}>
      <Text>Orders</Text>

      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 100,
    width: "100%",
    justifyContent: "center",
  },
});

export default OrdersScreen;
