import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ title, restaurantList }) => {
  if (!restaurantList.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.secondTitle}>
        We found {restaurantList.length === 0 ? "no" : restaurantList.length}{" "}
        restaurants in your era.
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurantList}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
      />
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  secondTitle: { marginLeft: 15 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
