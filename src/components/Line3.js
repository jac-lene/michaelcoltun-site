import React from 'react'
import LineDiv from '../images/line3.png'

function Line3(props) {
  return (
    <div><img src={LineDiv} className='line2'/>
    <div ref={props.about}></div>
    </div>
  )
}

export default Line3