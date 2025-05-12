import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

const [listOfRestaurants, setListOfRestaurant] = useState(resList)

  return (
    <div className="body">
      <div className="filter" style={{ padding: "20px" }}>
        <button className="filter-btn" onClick={
          ()=> {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4 
            )
            setListOfRestaurant(filteredList)
          }
          }>Top Rated Restaurants</button>
      </div>
      {/* passing a prop to a react component is like passing argument to a function */}
      {/* when we want to dynamically some data in a component, we pass via props */}
      {/* reacts takes all the props, wraps into an object & pass to a function */}
      <div className="res-container">
        {/* <RestaurantCard resName = "Biryani Blues" cuisine="biryani"/> */}
        {/* <RestaurantCard resData={resObj} /> */}
        {resList?.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id}/>
        ))}
        {/* unique key : each list item must be uniquely represented 
       suppose for card-container, we have many children, react optimises its render cycle 
      when there are components at the same level, these components need to have unique id
       suppose a new restaurant comes in, DOM has to insert it in first place 
   suppose there are no id & new restaurant comes, react will re-render all rescards as react does
        not know which one is new, react cleans the container & re-render all as it will treat all same
 if key provided, it will update only the updated card, so huge performance optimization */}

        {/* some use index as a key but react says not to use index as key */}
        {/* index as a key is an antipattern */}
        {/* not using keys (not acceptable) << index as key << unique id (best practice) */}
      </div>
    </div>
  );
};

export default Body;