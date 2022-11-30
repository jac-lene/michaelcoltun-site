import React from 'react'
import './CSS/Live.css'

function Live(props) {

  const showList = [
    {
      upcoming: true,
      date: "October 30th, 2022",
      location: "Brooklyn, NY",
      venue: "Brooklyn Steel",
      group: "Mdou Moctar"
    },
    {
      upcoming: true,
      date: "October 31st, 2022",
      location: "Providence, RI",
      venue: "AS220",
      group: "Mdou Moctar"
    },
    {
      upcoming: false,
      date: "September 10th, 2022",
      location: "London, UK",
      venue: "Cafe Oto",
      group: "Janka Nabay"
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
            <p>{show.date} : {show.location} @ {show.venue} w/ {show.group}</p>)
          } 
          return null
        })}
        </div>
       

        <div className='subsubtitle'>PAST</div>
        <div className='dates'>
        {showList.map((show) => {
          if (show.upcoming === false) {
            return (
            <p>{show.date} : {show.location} @ {show.venue} w/ {show.group}</p>)
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