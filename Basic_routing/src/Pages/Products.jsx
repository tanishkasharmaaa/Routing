import React from 'react'
import { useState,useEffect } from 'react';
export default function Products() {
  const[data,setData]=useState([]);
let fetchData=async()=>{
  try {
    const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    const finalRes=await res.json();
    setData(finalRes.data)
  } catch (error) {
    console.error(error);
  }
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
      <h1 >All Products</h1 >
      <div className= "products-wrapper">
         <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto" , gridGap:"10px"}}>
            {/* Map the below div agaisnt your product data */}
           {data.map((item)=>(
            <div key={item.id} style={{border:"solid"}}>
            <div className = "id" >{item.id} </div>
            <h3 className = "title" >{item.title} </h3>
            <div className = "category" >{item.category} </div>
            <div className = "price" >{item.price} </div>
            </div>
           ))}
            
        </div>
      </div>
    </div>
  )
}