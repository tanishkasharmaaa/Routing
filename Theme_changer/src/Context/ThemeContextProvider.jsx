import React, { createContext, useState } from 'react';

export let ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
     
 