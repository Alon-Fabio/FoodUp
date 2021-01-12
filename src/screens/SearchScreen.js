import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../API/yelp";

const SearchScreen = () => {
  const [searchVal, setSearchVal] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (searchVal === "" && restaurants.length === 0 && errorMsg === "") {
      fetchResYelp("pasta");
    }
    return () => {
      setErrorMsg("");
    };
  }, []);

  const fetchResYelp = async (PrTerm) => {
    try {
      const yelpObj = await yelp.get("/search", {
        params: {
          term: PrTerm,
          limit: "50",
          location: "san jose",
        },
      });
      setRestaurants(yelpObj.data.businesses);
    } catch {
      setErrorMsg("Ops... the search failed, please try again later.");
    }
  };

  return (
    <View style={style.SSView}>
      <SearchBar
        searchVal={searchVal}
        onSearchChange={setSearchVal}
        onSearchSubmit={() => fetchResYelp(searchVal)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We found {restaurants.length} in your area!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  SSView: {
    backgroundColor: "#fff",
  },
});

export default SearchScreen;
