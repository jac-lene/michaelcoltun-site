import React from 'react'
import './CSS/FilmCommAdd.css'

function FilmCommAdd() {

    const contentList = [ 
        {
            embedCode: <div><iframe src="https://player.vimeo.com/video/254712264?h=768a567cc3&color=e62517" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <p><a href="https://vimeo.com/254712264">Form &amp; Reel</a> from <a href="https://vimeo.com/user6597683">WORKPLAYWORK</a> on <a href="https://vimeo.com">Vimeo</a>.</p></div>,
            src: "https://www.youtube.com/watch?v=Ktd9rvsOL5M&t=3s&ab_channel=LaurenGreenhall",
            title: "ZELDA Documentary",
            artist: "",
            publication: "",
            otherInfo: "",
        },
        {
            embedCode: <div><iframe src="https://player.vimeo.com/video/254712264?h=768a567cc3&color=e62517" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <p><a href="https://vimeo.com/254712264">Form &amp; Reel</a> from <a href="https://vimeo.com/user6597683">WORKPLAYWORK</a> on <a href="https://vimeo.com">Vimeo</a>.</p></div>,
            src: "https://www.youtube.com/watch?v=Ktd9rvsOL5M&t=3s&ab_channel=LaurenGreenhall",
            title: "ZELDA Documentary",
            artist: "",
            publication: "",
            otherInfo: "",
        },
    ]


  return (
    <div id='fca'>
        <div className='subtitle'>film/commercials/ads</div>

        <div className='content'>
            { contentList.map((content) => {
                return (
                    <div className='contentCard'>
                    <div>{content.embedCode}</div>
                    </div>
                )
            })
            }
        </div>


    </div>
  )
}

export default FilmCommAdd