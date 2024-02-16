import React, { useEffect } from 'react'
import {useState} from 'react'
export default function AllProducts() {
const[data,setData]=useState([])


let fetchData=async()=>{

try {
  const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
  const finalData=await res.json();
  setData(finalData.data)

} catch (error) {
  console.error(Error);
 
}
}

useEffect(()=>{
  fetchData()
},[])

  return (
    <div style={{alignItems:"center",border:"solid "}}>
      <h2>All Products</h2>
      <div className = "products-wrapper" style={{display:"grid",gridTemplateColumns:"220px 220px 220px 220px 220px",gridGap:"10px",alignItems:"center"}}>
          {/* Map the below div against product data */}
          {data.map((item)=>(
             <div key={item.id} style={{border:"1px solid ",height:"130px" }}>
                <h3 className = "name">{item.title} </h3>
                <div className= "brand">{item.brand}</div>
                <div className = "price">{item.price}</div>
            </div>
          ))}
           
      </div>
    </div>
  )
}