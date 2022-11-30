import React from 'react'
import './CSS/Live.css'
import Shortline from '../components/Shortline'

function Live(props) {

  const showList = [
    {
      upcoming: true,
      date: "October 30th, 2022",
      location: "Brooklyn, NY",
      venue: "Brooklyn Steel",
      group: "Mdou Moctar",
      link: "https://www.bowerypresents.com/venues/brooklyn-steel",
    },
    {
      upcoming: true,
      date: "October 31st, 2022",
      location: "Providence, RI",
      venue: "AS220",
      group: "Mdou Moctar",
      link: "https://as220.org/",
    },
    {
      upcoming: false,
      date: "September 10th, 2022",
      location: "London, UK",
      venue: "Cafe Oto",
      group: "Janka Nabay",
      link: "https://www.cafeoto.co.uk/",
    },
  ]



  return (
    <div>
        <div className='subtitle'>live</div>
        {/* <div className='spacer'></div> */}
        <div className='subsubtitle'>UPCOMING</div>
        <div className='dates'>
        {showList.map((show) => {
          if (show.upcoming === true) {
            return (
            <p>{show.date} : {show.location} @ <a href={show.link}>{show.venue} w/ {show.group}</a></p>)
          } 
          return null
        })}
        </div>

        {/* <div className='spacer'></div>
        <Shortline/>
        <div className='spacer'></div> */}
        
        <div className='spacer'></div>

        <div className='subsubtitle'>PAST</div>
        <div className='dates'>
        {showList.map((show) => {
          if (show.upcoming === false) {
            return (
            <p>{show.date} : {show.location} @ <a href={show.link}>{show.venue} w/ {show.group}</a></p>)
          } 
          return null
        })}
        </div>
        
    

        <div className='spacer'></div>
        <div className='spacer'></div>
    </div>
  )
}

export default Live