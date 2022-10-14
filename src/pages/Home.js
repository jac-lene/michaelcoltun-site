import React, { useState, useEffect } from 'react'
import './CSS/Home.css'
import Animation1 from '../animations/1.mp4'
// import Animation2 from '../animations/2.mp4'
// import Animation3 from '../animations/3.mp4'
// import Animation4 from '../animations/4.mp4'
// import Animation5 from '../animations/5.mp4'
// import Animation6 from '../animations/6.mp4'
// import Animation7 from '../animations/7.mp4'
// import Animation8 from '../animations/8.mp4'
// import Animation9 from '../animations/9.mp4'
// import Animation10 from '../animations/10.mp4'
// import Animation11 from '../animations/11.mp4'

function Home(props) {
  const animations = [
    {
      src: Animation1,
      credits: "Animation by Mert Öztekin, Music by Mikey Coltun with Jim Schroeder",
    },
    // {
    //   src: Animation2,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun with Cem Misirlioglu",
    // },
    // {
    //   src: Animation3,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun with Cem Misirlioglu",
    // },
    // {
    //   src: Animation4,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun with Souleymane Ibrahim",
    // },
    // {
    //   src: Animation5,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun with Chris Wood",
    // },
    // {
    //   src: Animation6,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun",
    // },
    // {
    //   src: Animation7,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun with Amit Peled",
    // },
    // {
    //   src: Animation8,
    //   credits: "Animation by Gabriel Rolim, Music by Mikey Coltun",
    // },
    // {
    //   src: Animation9,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun with Tamir Barzilay",
    // },
    // {
    //   src: Animation10,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun",
    // },
    // {
    //   src: Animation11,
    //   credits: "Animation by Mert Öztekin, Music by Mikey Coltun",
    // },

  ]
  const [rndmAnimSrc, setRndmAnimSrc] = useState(animations[0].src) 
  const [rndmAnimCred, setRndmAnimCred] = useState(animations[0].credits)

  function newAnim () {
    const randomIdx = Math.floor(Math.random() * (animations.length))
    console.log(randomIdx)
    setRndmAnimSrc(animations[randomIdx].src)
    setRndmAnimCred(animations[randomIdx].credits)
    
  }

useEffect(() => {
newAnim()
}, [])

console.log(rndmAnimSrc, rndmAnimCred)

  return (
    <div ref={props.home}>
        <video
  src={rndmAnimSrc}
  controls
//   muted
//   autoPlay={"autoplay"}
  preload="auto"
  loop
 /> 
 <div className='animcred'>{rndmAnimCred}</div>


{/* Idea: click to enter and it starts the video/makes it unmuted - not sure I want to get around the issue here but I'm tryin, maybe it turns music on using if clicked, then add or remove "muted" property on video */}
    {/* <div className='entermodal'>
      click to enter
    </div> */}

    <div className='mask' ref={props.fca}></div>
    </div>
  )
}

export default Home