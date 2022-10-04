import React from 'react'
import './Header.css'

function Nav(props) {

  function scroll () {
    props.handleScroll((props.aboutRef.current))
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    // console.log(prevScrollpos, currentScrollPos)
    document.getElementById("navbar").classList.add("noclick");
    document.getElementById("navbar").style = ("animation: fadeout .2s ease-in forwards;");
  } else {
    document.getElementById("navbar").classList.remove("noclick");
    document.getElementById("navbar").style = ("animation: fadein .2s ease-in forwards;");
  }
  prevScrollpos = currentScrollPos;
}

  return (
    <div>
     <nav className='navbar' id='navbar'>
      
      <div className='mikey-container link' onClick={() => {props.handleScroll(props.home.current)}}>
      <div className='mikeyname'>Michael Coltun</div>
      </div>
     
<div className='nav'>

<div className='nav-left'>
<div className='nav-spacer'></div>
<div className='fca link' onClick={() => {props.handleScroll(props.fca.current)}}>film/commercials/ads</div>
<div className='sw link' onClick={() => {props.handleScroll(props.select.current)}}>selected work</div>
<div className='nav-spacer'></div>
</div>

<div className='nav-right'>
<div className='nav-spacer'></div>
<div className='live link' onClick={() => {props.handleScroll(props.live.current)}}>live shows</div>
<div className='about link' onClick={() => {props.handleScroll(props.about.current)}}>about</div>
<div className='nav-spacer'></div>
</div>



</div>
    </nav>
        
        
        </div>
  )
}

export default Nav