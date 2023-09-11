import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/restaurants.json";
import MenuListItem from "../../components/MenuListItem";
import Header from "./Header";
import styles from "./styles";
const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <MenuListItem menu={item} />}
      />
      <View style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle" size="45" color="lightgray" />
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;
