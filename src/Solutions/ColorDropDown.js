import React,{useState} from 'react'

function ColorDropDown() {
    const[colors,setColors]=useState([
        'red','blue'
    ])
    const  [currColor,setCurrColor]=useState(colors[0]);
  return (
    <div>
        <select onChange={(e)=>setCurrColor(e.target.value)}>
            {colors.map((c,i)=>(
                <option key={i}>{c}</option>
            ))}
        </select>
        <p style={{color:`${currColor}`}}>the color is {currColor} </p>
    </div>
  )
}

export default ColorDropDown