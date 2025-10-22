import React from 'react'
import MysteryBoxIcon from './MysteryBoxIcon'

const Box = (props) => {
  
  return (
    <div className={props.selection && props.result != "TIE" ? props.name == "You" ? props.result == "WIN" ? "Box WinnerBox" : "Box LoserBox" : props.result == "WIN" ? "Box LoserBox" : "Box WinnerBox" : "Box"}>
        <h1>{props.name}</h1>
        <div className='Icon'>
          {props.selection ? props.selection.icon : <MysteryBoxIcon size={80} color="#6c63ff" />}
        </div>
        { 
          props.selection ? 
            props.result == "TIE" || props.name == "You" ? <div>{props.result}</div> : 
            props.result == "WIN" ? <div>LOSE</div> : <div>WIN</div> 
          : ""
        }
    </div>
  )
}

export default Box