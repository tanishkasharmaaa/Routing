import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

export default function Login() {
  const { auth, login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    if (auth.isAuth) {
      
    
     
    }
  };

  return (
    <div>
      <form className="auth_form" action="">
        <input
          style={{ padding: '5px', margin: '10px', width: 200 }}
          type="email"
          name="email"
          className="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={username}
        />
        <br />
        <input
          style={{ padding: '5px', margin: '10px', width: 200 }}
          type="password"
          name="password"
          className="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={password}
        />
        <br />
        <button className="submit" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
