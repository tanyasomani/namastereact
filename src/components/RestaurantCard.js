const RestaurantCard = (props) => {
  //  const {resName, cuisine} = props;

  // inline style = jsx object
const styleCard = {
  backgroundColor: "#f0f0f0",
};

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

export default RestaurantCard;