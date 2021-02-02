import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";

const RestaurantCard = ({ restaurant, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("info", { id: restaurant.id })}
    >
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.text}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} stars {restaurant.review_count}
      </Text>
    </TouchableOpacity>
  );
};

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

export default withNavigation(RestaurantCard);
