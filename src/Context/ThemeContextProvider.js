import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

function ThemeContextProvider({children}) {
    const[theme,setTheme] =useState("light");
    const toggletheme=()=>{
        if(theme==='light')
        {
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }

  return (
    <ThemeContext.Provider value={{theme,toggletheme}} >
        {children}
    </ThemeContext.Provider>
    
  )
}

export default ThemeContextProvider