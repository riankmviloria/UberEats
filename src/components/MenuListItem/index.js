import { View, Text, StyleSheet, Image } from "react-native";

const MenuListItem = ({ menu }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{menu.name}</Text>
        <Text style={styles.description}>{menu.description}</Text>
        <Text style={styles.price}>${menu.price}</Text>
      </View>

      {menu.image && (
        <Image source={{ uri: menu.image }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    padding: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default MenuListItem;
