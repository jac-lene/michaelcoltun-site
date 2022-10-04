import React from 'react'
import LineDiv from '../images/line2.png'

function Line2(props) {
  return (
    <div ref={props.live}><img src={LineDiv} className='line2'/></div>
  )
}

export default Line2