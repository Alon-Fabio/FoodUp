import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ searchVal, onSearchChange, onSearchSubmit }) => {
  return (
    <View style={style.SBView}>
      <FontAwesome name="search" size={35} style={style.SBIcon} />
      <TextInput
        style={style.SBInput}
        value={searchVal}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onSearchChange}
        onEndEditing={() => onSearchSubmit(searchVal)}
      />
      {searchVal ? (
        <TouchableOpacity
          style={style.SBClear}
          onPress={() => onSearchChange("")}
        >
          <Text style={style.SBClear}>&Chi;</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const style = StyleSheet.create({
  SBView: {
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  SBIcon: {
    alignSelf: "center",
    marginHorizontal: 5,
  },
  SBInput: {
    height: 50,
    fontSize: 18,
    flex: 1,
  },
  SBClear: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 5,
  },
});

export default SearchBar;
