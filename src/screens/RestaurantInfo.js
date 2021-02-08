import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import yelp from "../API/yelp";

const RestaurantInfo = ({ navigation }) => {
  const [restInfo, setRestIfo] = useState(null);

  const id = navigation.getParam("id");

  const getRestInfo = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestIfo(response.data);
  };

  useEffect(() => {
    getRestInfo(id);
  }, []);

  if (!restInfo) {
    return null;
  }

  return (
    <View>
      <Text>RestaurantInfo {restInfo.name}</Text>
      <FlatList
        data={restInfo.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          //Try to change the source to {{uri: item}||null}, if all good add to note.
          return <Image source={{ uri: item }} style={styles.Image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 150,
    width: 200,
    marginTop: 5,
  },
});

export default RestaurantInfo;
