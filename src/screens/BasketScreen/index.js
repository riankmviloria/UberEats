import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import BasketListItem from "../../components/BasketListItem";
const restaurant = restaurants[0];

const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.orders}>Orders:</Text>
      {/* <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketListItem basketMenu={item} />}
      /> */}
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketListItem basket={item} />}
      />
      {/* <BasketListItem /> */}
      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
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
