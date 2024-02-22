import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"
function RestaurantTable(){



    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {restaurant.map((item) => (
<RestaurantCard id={item.id} name={item.name} rating={item.rating} type={item.type} number_of_votes={item.number_of_votes} price_starts_from={item.price_starts_from}/>
                    ))}
                    
                </tbody>
            </table>
    )
}

export default RestaurantTable