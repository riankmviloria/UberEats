import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../../models";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { dbUser } = useAuthContext();
  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat.toString() || "0");
  const [lng, setLng] = useState(dbUser?.long.toString() || "0");
  const navigation = useNavigation();
  const { sub, setDBUser } = useAuthContext();

  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          long: parseFloat(lng),
          sub,
        })
      );
      setDBUser(user);
    } catch (ex) {
      Alert.alert("Error", ex.message);
    }
  };
  const updateUser = async () => {
    // try {

    const updatedUser = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.name = name;
        updated.address = address;
        updated.lat = parseFloat(lat);
        updated.long = parseFloat(lng);
      })
    );
    setDBUser(updatedUser);
    // } catch (ex) {
    //   Alert.alert("Error", ex.message);
    // }
  };
  const onSave = async () => {
    if (dbUser) {
      await updateUser();
    } else {
      await createUser();
    }
    navigation.goBack();
  };
  const onSignOut = () => {
    try {
      Auth.signOut();
    } catch (ex) {
      // console.warn(ex);
    }
  };
  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button style={styles.buttonSave} onPress={onSave} title="Save" />
      <Button onPress={onSignOut} title="Sign out" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  buttonSave: {
    marginTop: 10,
  },
});

export default Profile;
