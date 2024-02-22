import { createContext, useState,useEffect } from "react";

export let AuthContext=createContext();
function AuthContextProvider(props) {
    const[auth,setAuth]=useState({
        isAuth:false,
        token:null
})

let login=async(username,password)=>{
try {
    const response=await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password})
    });
    if(response.status===200){
        let data=await response.json();
        setAuth({
            isAuth:true,
            token:data.token
        })

    }
    else if(response.status===400){
        setAuth({
            isAuth:false,
            token:""
        })
    }

    
} catch (error) {
    console.error('Error:',error)
}
}
useEffect(()=>{
    login('username','password')
},[])
let logout=()=>{
    setAuth({
        isAuth:false,
        token:null
    })
   
}
    return <AuthContext.Provider value={{auth,login,logout}}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider;
