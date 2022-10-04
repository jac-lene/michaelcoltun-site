import React from 'react'
import './CSS/Home.css'
import Animation1 from '../animations/1.mp4'

function Home(props) {
  return (
    <div ref={props.home}>
        <video
  src={Animation1}
  controls
//   muted
//   autoPlay={"autoplay"}
  preload="auto"
  loop
 /> 


{/* Idea: click to enter and it starts the video/makes it unmuted - not sure I want to get around the issue here but I'm tryin, maybe it turns music on using if clicked, then add or remove "muted" property on video */}
    {/* <div className='entermodal'>
      click to enter
    </div> */}

    <div className='mask' ref={props.fca}></div>
    </div>
  )
}

export default Home