import React, { useState ,useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'

export default function User({name,position,level,img,points}) {
    const{isDarkTheme}=useContext(ThemeContext);

    return (
        <div data-testid = "user" >
            <img src={img} style={{width:"60px"}}/>
            <p>{name}</p>
            <p>{position}</p>
            <input data-testid = "level" type = "range" style={{accentColor:isDarkTheme?"yellow":"blue"}}/>
            <p>Proffesional Level {level}</p>
            <p>{points} Points</p>
        </div>
    )
}
