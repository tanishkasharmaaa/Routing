
import { NavLink } from "react-router-dom"
function Navbar() {
    return(
        <div className = "navbar" style={{display:"flex" , justifyContent:"space-evenly",textDecoration:"none"
        }}>
<NavLink to={'/login'}>Login</NavLink>
<NavLink to={'/'}>Home</NavLink>
<NavLink to={'/about'}>About</NavLink>
<NavLink to={'/contact'}>Contact</NavLink>
<NavLink to={'/products'}>Products</NavLink>
        </div>
    )
}

export { Navbar }