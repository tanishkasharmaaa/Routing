import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";



function Login() {
  const{auth,login,logout}=useContext(AuthContext);
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");

  function handleForm(e){
    const{name,value}=e.target;
    if(name==="email"){
      setUsername(value);
    }
    else if(name==="password"){
      setPassword(value);
    }
  }

let navigate=useNavigate()

  function handleSubmit(e){
e.preventDefault();
login(username,password);
if(auth.token){
  navigate('/dashboard')
}
else if(auth.token===null){
navigate('/login')
}
  }
  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" name="email" type="email" placeholder="email" value={username} onChange={handleForm} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={handleForm}
              name="password"
              value={password}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" onSubmit={handleSubmit} />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
        {/* <h1>{auth.token}</h1> */}
      </div>
    </div>
  );
}
export default Login;
