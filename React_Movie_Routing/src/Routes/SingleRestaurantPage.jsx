import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantPage() {
  const{id}=useParams();
  const[data,setData]=useState({});
const[loading,setLoading]=useState(false);

  const fetchData=async()=>{
    setLoading(true)
try {
  const response=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`);
  const final=await response.json();
setData(final);
setLoading(false)
} catch (error) {
  console.error("error",error)
  setLoading(false);
}
  }

  useEffect(()=>{
    fetchData()
  },[id])

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name"></h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:</div>
      <div data-testid="restaurant-votes">Votes:</div>
      <div data-testid="restaurant-price">Starting Price:</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
