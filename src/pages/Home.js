import React from 'react'
import './CSS/Home.css'
import Animation1 from '../animations/1.mp4'

function Home() {
  return (
    <div id='Home'>
        <video
  src={Animation1}
  controls
  muted
  autoPlay={"autoplay"}
  preload="auto"
  loop
 > </video>

    <div className='mask'></div>

    </div>
  )
}

export default Home