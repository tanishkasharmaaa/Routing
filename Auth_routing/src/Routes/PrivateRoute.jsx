import { Navigate, useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";

export default function PrivateRouter({children}){
    const{auth}=useContext(AuthContext);
    let isLoggedIn=auth.isAuth;
   
    if(!isLoggedIn){
        return <Navigate to={'/login'}/>
    }
    
    return children 
   
   
        
}