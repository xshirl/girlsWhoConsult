import React,  { useState } from 'react'
import Carousel from 'react-elastic-carousel';

export default function Scholars() {
  const [img, setImg] = useState([]);
  img[0] = {id: 1, source: 'img/spotlight-1.png'};
  img[1] = {id:2, source: 'img/spotlight-2.png'};
  img[2] = {id:3, source: 'img/spotlight-3.png'};
  return (
    <div className="scholars">

        <h1>Scholar <span className="pink">Spotlights</span></h1>

      <Carousel>
        {img.map(item => <div key={item.id}><img src={item.source} alt={item.id} /></div>)}
      </Carousel>
      </div>



  )
}
