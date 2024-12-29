import React, { useState } from 'react'

function Counterincrement() {
    const[count,setCount]=useState(0);

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
    </div>
  )
}

export default Counterincrement 