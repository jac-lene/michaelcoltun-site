import React, { useEffect } from 'react'
import './CSS/FilmCommAdd.css'

function FilmCommAdd() {
    // https://player.vimeo.com/video/254712264?h=768a567cc3&color=e62517
    // ?h=475052af07&color=e62517"

    // "https://www.youtube.com/embed/Ktd9rvsOL5M

    let videoURL = "https://youtu.be/aPUVUrS2oC0"
    let convertedURL = ""

    function convertURL (x) {
        if (x.match(/vimeo/)) {
            console.log("it's vimeo")
            const a = x.split("//")
            console.log(a)
            a.splice(1, 0, '//player.')
            console.log(a)
            const b = a[2].split('/')
            console.log(b)
            a.pop()
            console.log(a)
            b.splice(1,0, "/video/")
            console.log(b)
            const c = b.join('')
            const d = a.join('')
            console.log(d, c)
            convertedURL = d.concat(c)
            console.log(convertedURL)
            return (convertedURL)
        }
        else if (x.match(/you/)) {
            console.log("it's youtube")
            const a = x.split('.')
            console.log(a)
            const b = a[1].split('/')
            a.pop()
            console.log(a)
            console.log(b)
            b.splice(1,0,'.com/embed/')
            console.log(b)
            const c = a.join('')
            const d = b.join('')
            convertedURL = c.concat(d)
            console.log(convertedURL)
            return (convertedURL)
        }
        // convertedURL = videoURL.replace('', '')
    }

    // console.log(convertedURL)

    // useEffect(() => {
    //     convertURL(videoURL)
    // }, []
    // )
    

    const contentList = [ 
        {
            src: "https://vimeo.com/254712264",
            title: "ZELDA Documentary",
            artist: "Lauren Greenhall",
            publication: "",
            otherInfo: "",
        },
        {
            src: "https://youtu.be/aPUVUrS2oC0",
            title: "ZELDA Documentary",
            artist: "",
            otherInfo: "",
        },
        {
            src: "https://vimeo.com/55825202",
            title: "ZELDA Documentary",
            artist: "Lauren Greenhall",
            publication: "",
            otherInfo: "",
        },
        {
            src: "https://youtu.be/aPUVUrS2oC0",
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
                 {convertURL(content.src)}
                return (
                    <div className='contentCard'>

                        <iframe
                        width="400"
                        height="200"
                        src={convertedURL}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded video"
                        />
                        <div>{content.title}</div>
                        <div>{content.artist}</div>

                    </div>
                )
            })
            }


        </div>


    </div>
  )
}

export default FilmCommAdd