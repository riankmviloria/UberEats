import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen";
import MenuDetailsScreen from "./src/screens/MenuDetailsScreen";
import BasketScreen from "./src/screens/BasketScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <BasketScreen />
      {/* <MenuDetailsScreen /> */}
      {/* <HomeScreen></HomeScreen> */}
      {/* <RestaurantDetailsPage /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 10,
  },
});
