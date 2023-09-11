import { View, Text, StyleSheet } from "react-native";

// const BasketListItem = ({ basketMenu }) => {
const BasketListItem = ({ basket }) => {
  console.log(basket);
  //   console.log(basket);
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text style={styles.orderQuantity}>1</Text>
      </View>
      <Text style={styles.orderName}>{basket.name}</Text>
      <Text style={styles.orderTotal}>${basket.price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  orderTotal: {
    marginLeft: "auto",
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  orderName: {
    fontWeight: "600",
  },
});

export default BasketListItem;
