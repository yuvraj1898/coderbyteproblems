import React, { useState } from 'react'

function LiveParagraph() {
    const[text,setText]=useState("");
  return (
    <div>
        <input type='text' value={text} onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <p>{text}</p>
    </div>
  )
}

export default LiveParagraph