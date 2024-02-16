import { NavLink } from "react-router-dom"
function Navbar() {
    return(
        <div className = "navbar" >
           <NavLink to={'/'}>Home</NavLink>
           <NavLink to={'/about'}>About</NavLink>
           <NavLink to={'/contacts'}>Contact</NavLink>
           <NavLink to={'/products'}>Products</NavLink>
        </div>
    )
}

export { Navbar }