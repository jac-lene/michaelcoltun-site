import React from 'react'
import LineDiv from '../images/line.png'

function Line(props) {
  return (
    <div ><img src={LineDiv} className='line'/>
    <div ref={props.select}></div>
    </div>
  )
}

export default Line