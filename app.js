import React from "react";
import ReactDOM from "react-dom/client";
// Header - logo, navitems
// body - search, rescontainer, rescard (img, name of res, star ratings, cuisine, delivery time)
// footer

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=All&sf=&txt_keyword="
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// inline style = jsx object
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const resObj = {
  type: "restaurant",
  data: {
    name: "KFC",
    cuisines: ["Burgers", "American", "Snacks", "Fast Food"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZM7NEqwRyIXDja-QbWjwWFccv0lvz4Uqqg&s",
    avgRating: 4.8,
    costForTwo: 40000,
    deliveryTime: 30,
  },
};

const RestaurantCard = (props) => {
  //  const {resName, cuisine} = props;

  const { resData } = props;

  const { image, name, cuisines, avgRating, deliveryTime, costForTwo } =
    resData?.data;
  console.log(resData);
  return (
    <div className="res-card" style={styleCard}>
      <img src={image} alt="" className="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search" style={{ padding: "20px" }}>
        Search
      </div>
      {/* passing a prop to a react component is like passing argument to a function */}
      {/* when we want to dynamically some data in a component, we pass via props */}
      {/* reacts takes all the props, wraps into an object & pass to a function */}
      <div className="res-container">
        {/* <RestaurantCard resName = "Biryani Blues" cuisine="biryani"/> */}
        {/* <RestaurantCard resData={resObj} /> */}
        {resObj?.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
