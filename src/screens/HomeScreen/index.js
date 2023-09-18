import { StyleSheet, FlatList, View } from "react-native";
import RestaurantItem from "../../components/Restaurant";
import { useState, useEffect } from "react";
// import { DataStore } from "@aws-amplify/datastore";
import { Restaurant } from "../..//models";
import "@azure/core-asynciterator-polyfill";
// import Restaurant from "../../../assets/restaurants.json";
import { DataStore, Predicates } from "@aws-amplify/datastore";
// import { Todo } from "../models";
export default function HomeScreen() {
  // const restaurants = Restaurant;
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    DataStore.query(Restaurant).then(setRestaurants);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
