import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  const [searchVal, setSearchVal] = useState("");
  const [fetchResYelp, errorMsg, restaurants] = useRestaurants(searchVal);

  // Teacher way ↓
  // const getRest = (price) => {
  //   return restaurants.filter((rest) => {
  //     return rest.price === price;
  //   });
  // };

  // My way ↓
  let restObj = {};

  const filterRest = () => {
    restObj = { lowRange: [], mediumRange: [], highRange: [] };
    restObjc = restaurants.map((rest) => {
      switch (rest.price) {
        case "$":
          restObj.lowRange.push(rest);
          break;
        case "$$":
          restObj.mediumRange.push(rest);
          break;
        case "$$$":
          restObj.highRange.push(rest);
          break;
        default:
          break;
      }
    });
  };

  filterRest();

  return (
    <View style={style.SSView}>
      <SearchBar
        searchVal={searchVal}
        onSearchChange={setSearchVal}
        onSearchSubmit={() => fetchResYelp(searchVal)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We found {restaurants.length} in your area!</Text>
      <ScrollView>
        {/* <RestaurantList title={"$"} restaurantList={getRest("$")} />
      <RestaurantList title={"$$"} restaurantList={getRest("$$")} />
      <RestaurantList title={"$$$"} restaurantList={getRest("$$$")} /> */}
        <RestaurantList
          title={"Cost affective"}
          restaurantList={restObj.lowRange}
        />
        <RestaurantList
          title={"A bit pricier"}
          restaurantList={restObj.mediumRange}
        />
        <RestaurantList title={"Costly"} restaurantList={restObj.highRange} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  SSView: {
    backgroundColor: "#fff",
  },
});

export default SearchScreen;
