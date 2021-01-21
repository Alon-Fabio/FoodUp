import { useState, useEffect } from "react";
import yelp from "../API/yelp";

export default useRestaurants = (searchVal = "") => {
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
      console.log("fetch");
      setRestaurants(yelpObj.data.businesses);
    } catch {
      setErrorMsg("Ops... the search failed, please try again later.");
    }
  };

  return [fetchResYelp, errorMsg, restaurants];
};
