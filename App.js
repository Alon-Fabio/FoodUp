import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import RestaurantInfo from "./src/screens/RestaurantInfo";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    info: RestaurantInfo,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "FoodUp",
    },
  }
);
// Sets the default background color
navigator.navigationOptions = {
  cardStyle: { backgroundColor: "transparent" },
  mode: "modal",
};

export default createAppContainer(navigator);
