import { Image, Text, View } from "react-native";
import styles from "./styles";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

const RestaurantDetailsScreen = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      {/* Cover Image */}
      <Image
        source={{ uri: restaurant.image ? restaurant.image : DEFAULT_IMAGE }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Header */}
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          Delivery Fee: ${restaurant.deliveryFee} | Delivery Time:{" "}
          {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;
