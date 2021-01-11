import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <View style={style.SSView}>
      <SearchBar
        searchVal={searchVal}
        onSearchChange={setSearchVal}
        onSearchSubmit={(value) => console.log(value)}
      />
      <Text>Screen Search</Text>
    </View>
  );
};

const style = StyleSheet.create({
  SSView: {
    backgroundColor: "#fff",
  },
});

export default SearchScreen;
