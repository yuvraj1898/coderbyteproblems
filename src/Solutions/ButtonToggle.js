import React, { useState } from 'react'

function ButtonToggle() {
    const[label,setLabel]=useState(false);
    const handleToggle =()=>{
        setLabel(!label);
    }
  return (
   <>
   <button onClick={handleToggle}>{label ? "On":"Off"}</button>
   </>
  )
}

export default ButtonToggle