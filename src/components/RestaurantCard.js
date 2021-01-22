import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

const RestaurantCard = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.text}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} stars {restaurant.review_count}
      </Text>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
  text: {
    fontWeight: "bold",
  },
});
