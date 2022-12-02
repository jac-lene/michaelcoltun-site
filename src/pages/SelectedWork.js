import React from 'react'
import './CSS/Selected.css'
import Shortline from '../components/Shortline'

function SelectedWork() {


  const artistList = [ 
    {
        id: 1,
        artistName: "Mdou Moctar",
        description: "",
    },
    {
        id: 2,
        artistName: "Les Rhinoceros",
        description: "My longest running band. I started this group in 2008 as an improvised sax and bass duo which eventually formed into a drum, bass, and guitar group. All albums (to date) released on John Zorn’s Tzadik Records.",
    },
]

  const albumList = [
    {
      albumName: "Afrique Victime",
      src: "https://mdoumoctar.bandcamp.com/album/afrique-victime",
      albumInfo: "2021 Matador",
      description: "TKTKTK",
      linkedID: 1,
    },
    {
      albumName: "Niger EP Vol 1 & 2",
      src: "",
      albumInfo: "2022 Matador",
      description: "TKTKTK",
      linkedID: 1,
    },
    {
      albumName: 'Ibitilan 7"',
      src: "https://mdoumoctar.bandcamp.com/album/ibitlan",
      albumInfo: "2020 Sahel Sounds",
      description: "TKTKTK",
      linkedID: 1,
    },
    {
      albumName: "Ilana The Creator",
      src: "https://mdoumoctar.bandcamp.com/album/ilana-the-creator",
      albumInfo: "2019 Sahel Sounds",
      description: "TKTKTK",
      linkedID: 1,
    },
    {
      albumName: "Les Rhinoceros III",
      src: "https://www.tzadik.com/index.php?catalog=7812",
      albumInfo: "2015 Tzadik",
      description: "'Together since 2010, Les Rhinocéros has brought their manic and zany mixture of heavy metal riffs, world music, noise, math rock, klezmer, reggae, minimalism, soundtracks and sick improvisation to appreciative audiences all over the world. Their long awaited third release ups the ante once again with a wide variety of manic compositions performed tighter than ever by this virtuosic trio. Featuring guests Gal Klein, Joe Herrera, Matt Rippetoe, Kamyar Arsani, Reese Higgins and David Coltun this is a passionate young band breaking new ground in instrumental music!' - John Zorn",
      img: "https://f4.bcbits.com/img/a2492922622_16.jpg",
      linkedID: 2,
    },
    {
      albumName: "Les Rhinoceros II",
      src: "https://www.tzadik.com/index.php?catalog=7808",
      albumInfo: "2013 Tzadik",
      description: "'For their second CD for Tzadik, this fabulous trio takes a step toward tradition with a heavy CD of music for the classic format of guitar, bass and drums. Recorded at Bill Laswell’s Orange Studio by James Dellatacoma, the sound is as intense and powerful as the music. Les Rhinocéros II is a strong second release by this tight and razor sharp new band of musical renegades.' - John Zorn",
      img: "https://f4.bcbits.com/img/a3214444827_16.jpg",
      linkedID: 2,
    },
    {
      albumName: "Les Rhinoceros",
      src: "https://www.tzadik.com/index.php?catalog=7801",
      albumInfo: "2011 Tzadik",
      description: "'Hailing from the Washington, DC area, the young band Les Rhinocéros delivers a crazy world in sound, blending aspects of rock, world music, noise, ambient and jazz. The trio of teenagers was formed in 2008 while the players were still in high school, and has developed since then into an intense and wildly imaginative group that takes music to its extremes. Emotional, minimalistic, intense and grooving, this is music that goes beyond imagination to the edges of sanity. The group continues their sonic experiments by adding unusual instruments into the traditional rock band setting.' - John Zorn",
      img: "https://f4.bcbits.com/img/a0005964661_16.jpg",
      linkedID: 2,
    },
  ]

  return (
    <div id='select'>
      <div className='workspacer'></div>
      <div className='subtitle'>selected work</div>
      {artistList.map((artist) => {
        return(
          <>
        <div className='subsubtitle'>{artist.artistName}</div>
        <div className='spacer'></div>
        {artist.description && <div className='text'>{artist.description}
        <div className='spacer'></div>
        </div>}
        
        <div className='cardflex'>
        {albumList.map((album) => {
          return(
            <>
            {artist.id === album.linkedID && 
            <>
            
            <div className='albumflex'>
            <div className='imgflex'>
              <img src={album.img} className='albumimg'/>
              <div className='albumname'>{album.albumName}</div>
            </div>
            </div>
            
            <div className='spacer'></div>

            {/* <div className='text desc album'>{album.description}</div> */}
            
            </>
            
            }
            
            </>
          )
        })}
        </div>
       
         <div className='spacer'></div>
         <Shortline/>
         <div className='spacer'></div>
        </>
        )
      })}
      
      
      
      
      
    
    
    </div>
  )
}

export default SelectedWork