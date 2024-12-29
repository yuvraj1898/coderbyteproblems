import React, { useContext } from 'react'
import logo from '../logo.svg';
import ThemeContext from '../Context/ThemeContext';
function Header() {

    const {theme,toggletheme} =useContext(ThemeContext);
  return (
    <header style={{
        minHeight:'90px',
        display:'flex',
        justifyContent:'space-between'
    }}>
<img src={logo} width={120} height={120}/>
<h4>Example for context Api</h4>
<button onClick={toggletheme}>{theme}</button>

    </header>
  )
}

export default Header