import { FlatList, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/restaurants.json";
import MenuListItem from "../../components/MenuListItem";
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Restaurant, Menu } from "../../models";
import { DataStore } from "aws-amplify";
import { useSafeAreaFrame } from "react-native-safe-area-context";
// const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const restaurantID = route.params?.id;

  const [restaurant, setRestaurant] = useState(null);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }

    DataStore.query(Restaurant, restaurantID).then(setRestaurant);
    DataStore.query(Menu, (menu) => menu.restaurantID.eq(restaurantID)).then(
      setMenus
    );
  }, [id]);

  if (!restaurant) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"gray"}
        style={{ alignItems: "center", marginTop: "50%" }}
      />
    );
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={menus}
        renderItem={({ item }) => <MenuListItem menu={item} />}
        keyExtractor={(item) => item.name}
      />
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle"
          size="45"
          color="lightgray"
        />
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;
