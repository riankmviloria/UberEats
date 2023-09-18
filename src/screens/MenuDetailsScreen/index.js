import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Menu } from "../../models";

const MenuDetailsScreen = () => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const menuID = route.params?.id;

  useEffect(() => {
    if (id) {
      DataStore.query(Menu, menuID).then(setMenu);
    }
  }, [id]);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (menu.price * quantity).toFixed(2);
  };

  if (!menu) {
    return <ActivityIndicator size={"large"} color={"gray"} />;
  }
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{menu.name}</Text>
      <Text style={styles.description}>{menu.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={60}
          color={"black"}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color={"black"}
          onPress={onPlus}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Basket")}
      >
        <Text style={styles.buttonText}>
          Add {quantity} to basket | ${getTotal()}
        </Text>
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
  name: {
    fontSize: 30,
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
    justifyContent: "center",
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
});

export default MenuDetailsScreen;
