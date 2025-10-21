import React from 'react'

const Box = (props) => {
  return (
    <div className='Box'>
        <h1>{props.name}</h1>
        <div className='Icon'>
          {props.selection ? props.selection.icon : ""}
        </div>
        {props.selection ? <div>WIN</div> : ""}
    </div>
  )
}

export default Box