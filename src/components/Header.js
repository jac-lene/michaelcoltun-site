import React, {useState, useEffect} from 'react'
import './Header.css'

function Nav(props) {


  const [hover, setHover] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  // function scroll () {
  //   props.handleScroll((props.aboutRef.current))
  // }

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

{ width < 620 ?  

<nav className='navbar' id='navbar' onMouseOver={() => {setHover(true)}} onMouseOut={() => setHover(false)} style={{paddingBottom:0}}>     
<div className='nav navScreen'>

<div className='mikey-container link' onClick={() => {props.handleScroll(props.home.current)}}>
<div className='mikeynameSmaller'>Michael Coltun</div>
</div>

{ hover ? <div className='dropdown' style={{flexDirection:'column'}}>

<div className='nav-left' style={{flexDirection:'column'}}>
<div className='fca link' onClick={() => {props.handleScroll(props.fca.current)}}>film/commercials/ads</div>
<div className='sw link' onClick={() => {props.handleScroll(props.select.current)}}>selected work</div>
</div>

<div className='nav-right' style={{flexDirection:'column'}}>
<div className='nav-spacer'></div>
<div className='live link' onClick={() => {props.handleScroll(props.live.current)}}>live shows</div>
<div className='about link' onClick={() => {props.handleScroll(props.about.current)}}>about</div>
</div>

</div>

: null}

</div>
    </nav> 
    
: width < 950 ?  

<nav className='navbar' id='navbar' onMouseOver={() => {setHover(true)}} onMouseOut={() => setHover(false)} style={{paddingBottom:0}}>     
<div className='nav navScreen'>

<div className='mikey-container link' onClick={() => {props.handleScroll(props.home.current)}}>
<div className='mikeynameSmaller'>Michael Coltun</div>
</div>

{ hover ? <div className='dropdown'>

<div className='nav-left'>
<div className='fca link' onClick={() => {props.handleScroll(props.fca.current)}}>film/commercials/ads</div>
<div className='sw link' onClick={() => {props.handleScroll(props.select.current)}}>selected work</div>
</div>

<div className='nav-right'>
<div className='nav-spacer'></div>
<div className='live link' onClick={() => {props.handleScroll(props.live.current)}}>live shows</div>
<div className='about link' onClick={() => {props.handleScroll(props.about.current)}}>about</div>
</div>

</div>

: null}

</div>
    </nav> 
    
    :     
    
    width < 1200 ?  

<nav className='navbar' id='navbar'>     
<div className='nav'>
<div className='nav-left'>
<div className='nav-spacer'></div>
<div className='fca link' onClick={() => {props.handleScroll(props.fca.current)}}>film/commercials/ads</div>
<div className='sw link' onClick={() => {props.handleScroll(props.select.current)}}>selected work</div>
</div>

<div className='mikey-container link' onClick={() => {props.handleScroll(props.home.current)}}>
      <div className='mikeynameSmall'>Michael Coltun</div>
      </div>

<div className='nav-right'>
<div className='live link' onClick={() => {props.handleScroll(props.live.current)}}>live shows</div>
<div className='about link' onClick={() => {props.handleScroll(props.about.current)}}>about</div>
<div className='nav-spacer'></div>
</div>

</div>
    </nav> 
    
    :     
    
    <nav className='navbar' id='navbar'>
      
      <div className='mikey-container link' onClick={() => {props.handleScroll(props.home.current)}}>
      <div className='mikeyname'>Michael Coltun</div>
      </div>
     
<div className='nav navScreen'>

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
    </nav>}
    
        
        
        </div>
  )
}

export default Nav