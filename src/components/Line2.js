import React from 'react'
// import LineDiv from '../images/line2.png'

function Line2(props) {
  return (
    <div><img src="https://i.imgur.com/FsxnTV0.png" className='line2'/>
    <div ref={props.live}></div>
    </div>
  )
}

export default Line2