import Home from "./Home";
import Login from "./Login"
import Dashboard from "./Dashboard";
import SingleRestaurantPage from "./SingleRestaurantPage"
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import { Link } from "react-router-dom";

function AllRoutes() {
  
  return (
    <Router>
    <Routes>
<Route path="/login" element={<Login/>} />
<Route path="/" element={<Home/>} />
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/details:id" element={<SingleRestaurantPage/>}/>
    </Routes></Router>
  );
}

export default AllRoutes;
