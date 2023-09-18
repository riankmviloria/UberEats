import { Text, Image, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Order", { id: order.id })}
      style={styles.row}
    >
      <View>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.items}>3 items &#8226; $38.42</Text>
        <Text style={styles.status}>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  items: {
    marginVertical: 5,
    color: "gray",
  },
  status: {
    color: "gray",
  },
});

export default OrderListItem;
