import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const RestaurantList = ({ title, restaurantList }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restaurantList}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
