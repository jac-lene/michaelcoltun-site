import React from 'react'
import LineDiv from '../images/line.png'

function Line(props) {
  return (
    <div ref={props.select}><img src={LineDiv} className='line'/></div>
  )
}

export default Line