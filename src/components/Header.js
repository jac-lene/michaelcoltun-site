import React from 'react'
import './Header.css'

function Nav(props) {

  function getReference () {
    props.scrollFunction(props.ref)
  }

  return (
    <div className='fixed'>
        <nav>
      
          <div className='mikey-container' onClick={getReference}>
          <div className='mikeyname'>Michael Coltun</div>
          </div>

<div className='nav'>

<div className='nav-left'>
    <div className='nav-spacer'></div>
    <div className='fca'>film/commercials/ads</div>
    <div className='sw'>selected work</div>
    <div className='nav-spacer'></div>
</div>



<div className='nav-right'>
    <div className='nav-spacer'></div>
    <div className='live'>live shows</div>
    <div className='about'>about</div>
    <div className='nav-spacer'></div>
</div>



</div>
        </nav>
        
        </div>
  )
}

export default Nav