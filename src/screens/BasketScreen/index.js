import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import restaurants from "../../../assets/restaurants.json";
import BasketListItem from "../../components/BasketListItem";
import { useNavigation } from "@react-navigation/native";
const restaurant = restaurants[0];

const BasketScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.orders}>Orders:</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketListItem basket={item} />}
      />

      <View style={styles.separator} />

      <Pressable
        style={styles.button}
        // onPress={() => navigation.navigate("Basket")}
      >
        <Text style={styles.buttonText}>Create Order</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  orders: {
    fontWeight: "600",
    marginTop: 20,
    fontSize: 19,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    textColor: "white",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
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

export default BasketScreen;
