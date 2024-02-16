import React, { useEffect, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthContextProvider(props) {
  const [auth, setAuth] = useState({
    isAuth: false,
  });
const navigate=useNavigate()
  const login = async (username, password) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        setAuth({
          isAuth: true,
          
        });
        navigate('/')
    
      } else if (response.status === 400) {
        setAuth({
          isAuth: false,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    login('sample_username', 'sample_password');
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {props.children}
    </AuthContext.Provider>
  );
}
