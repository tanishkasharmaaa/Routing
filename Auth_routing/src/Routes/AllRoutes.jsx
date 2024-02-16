import React from 'react'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products'
import {Routes,Route} from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {
    
    return (
        <Routes>
            <Route path='/login'element={<Login/>}/> 
            <Route path='/'element={<Home/>}/> 
            <Route path='/about'element={<About/>}/> 
            <Route path='/contact'element={<Contact/>}/> 
            <Route path='/products'element={<PrivateRoute><Products/></PrivateRoute>}/> 
        </Routes>
    )
}

export {AllRoutes}