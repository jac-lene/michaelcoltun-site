import React, { useEffect } from 'react'
import './CSS/FilmCommAdd.css'

function FilmCommAdd(props) {
    // https://player.vimeo.com/video/254712264?h=768a567cc3&color=e62517
    // ?h=475052af07&color=e62517"

    // "https://www.youtube.com/embed/Ktd9rvsOL5M

    let videoURL = "https://youtu.be/aPUVUrS2oC0"
    let convertedURL = ""

    function convertURL (x) {
        if (x.match(/vimeo/)) {
            const a = x.split("//")
            // console.log(a)
            a.splice(1, 0, '//player.')
            // console.log(a)
            const b = a[2].split('/')
            // console.log(b)
            a.pop()
            // console.log(a)
            b.splice(1,0, "/video/")
            // console.log(b)
            const c = b.join('')
            const d = a.join('')
            // console.log(d, c)
            convertedURL = d.concat(c)
            // console.log(convertedURL)
            return (convertedURL)
        }
        else if (x.match(/you/)) {
            const a = x.split('.')
            // console.log(a)
            const b = a[1].split('/')
            a.pop()
            // console.log(a)
            // console.log(b)
            b.splice(1,0,'.com/embed/')
            // console.log(b)
            const c = a.join('')
            const d = b.join('')
            convertedURL = c.concat(d)
            // console.log(convertedURL)
            return (convertedURL)
        }
        else {
            convertedURL = x
            return (convertedURL)
        }
    }

    const contentList = [ 
        {
            src: "https://youtu.be/Ktd9rvsOL5M",
            title: "ZELDA Documentary",
            artist: "Dir. Lauren Greenhall",
            publication: "",
            otherInfo: "",
        },
        {
            src: "https://youtu.be/948UFQZ4ykI",
            title: "Perfectly Good Moment",
            artist: "Dir. Lauren Greenhall",
            otherInfo: "",
        },
        {
            src: "https://vimeo.com/426328439",
            title: "HBO Max/Go/Now Explainer",
            artist: "",
            publication: "",
            otherInfo: "",
        },
        {
            src: "https://vimeo.com/254712264",
            title: "Form& Reel",
            artist: "",
            publication: "",
            otherInfo: "",
        },
        {
            src: "https://vimeo.com/143646220",
            title: "Helia",
            artist: "",
            publication: "WORKPLAYWORK",
            otherInfo: "",
        },
        {
            src: "https://vimeo.com/153004773",
            title: "Havas Digital Reel 2015",
            artist: "",
            publication: "WORKPLAYWORK",
            otherInfo: "",
        },
        {
            src: "https://vimeo.com/117402848",
            title: "OK TENN Commercial",
            artist: "",
            publication: "",
            otherInfo: "",
        },
        {
            src: "https://vimeo.com/130467975",
            title: "McCormick Gourmet",
            artist: "",
            publication: "",
            otherInfo: "",
        },
        {
            src: "https://youtu.be/0O_boW9YA7I",
            title: "The Greatest Mathematician...",
            artist: "",
            publication: "TED-Ed",
            otherInfo: "",
        },
        {
            src: "https://youtu.be/c_g1BMVFcuw",
            title: "How to Turn a Protest...",
            artist: "Eric Liu",
            publication: "TED-Ed",
            otherInfo: "",
        },
        {
            embedCode: <iframe title="New York Times Video - Embed Player" width="480" height="321" frameborder="0" scrolling="no" allowfullscreen="true" marginheight="0" marginwidth="0" id="nyt_video_player" src="https://www.nytimes.com/video/players/offsite/index.html?videoId=100000006981365"></iframe>,
            src: "https://www.nytimes.com/video/players/offsite/index.html?videoId=100000006981365",
            title: "Make T Something",
            artist: "Erwin Wurm",
            publication: "New York Times",
            otherInfo: "",
        },
      
    ]


  return (
    <div id='fca'>

        <div className='subtitle'>film/commercials/ads</div>

        <div className='content'>
               
            { contentList.map((content, i) => {
                 {convertURL(content.src)}
                return (
                    <div key={i} className='contentCard' >

                        <iframe
                        width="400"
                        height="200"
                        src={convertedURL}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded Video"
                        />
                        <div>{content.title}</div>
                        <div>{content.artist}</div>
                        <div>{content.publication}</div>
                        <div>{content.otherInfo}</div>

                    </div>
                )
            })
            }


        </div>

        <div className='fcaspacer'></div>
    </div>
  )
}

export default FilmCommAdd