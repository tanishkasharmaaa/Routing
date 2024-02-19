import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Context/ThemeContextProvider';
import User from './User';
export const Dashboard = () => {
  const {  setIsDarkTheme } = useContext(ThemeContext);

 function handleChange(e){
    const {value} = e.target; // No need to destructure as an object
    if (value === "light") {
      setIsDarkTheme(false);
      document.body.style.backgroundColor ="";
      document.body.style.color = "black";
    }
    if (value === "dark") {
      setIsDarkTheme(true);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }

  const intialOne=[
    {
      "id": 1,
      "name": "Nrupul Dev",
      "position": "CTO",
      "level": 15,
      "points": 23456,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    },
    {
      "id": 2,
      "name": "Prateek",
      "position": "CEO",
      "level": 15,
      "points": 22456,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    },
    {
      "id": 3,
      "name": "Yogesh",
      "position": "SVP",
      "level": 15,
      "points": 24536,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    }
  ]
  
const[data,setData]=useState(intialOne)



  return (
    <div data-testid="dashboard-cont">
      <select data-testid="select-theme" onChange={handleChange}>
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
      <h1>All Active Users</h1>
      {data&&
      data.map((item)=>{
        
       return <User key={item.id} name={item.name} points={item.points} level={item.level} img={item.img} />
      
})}
      
      {/* map through the users and render User component */}
      
    </div>
  );
}
