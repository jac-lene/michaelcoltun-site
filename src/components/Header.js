import React from 'react'
import './Header.css'

function Nav(props) {

  function getReference () {
    props.scrollFunction(props.ref)
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    // console.log(prevScrollpos, currentScrollPos)
    // document.getElementById("navbar").classList.add("fadeout");
    document.getElementById("navbar").style = ("animation: fadeout .2s ease-in forwards;");
  } else {
    document.getElementById("navbar").style = ("animation: fadein .2s ease-in forwards;");
  }
  prevScrollpos = currentScrollPos;
}

  return (
    <div>
        <nav className='navbar' id='navbar'>
      
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