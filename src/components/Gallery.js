import React from 'react'

export default function Gallery() {
  return (
    <div className="gallery">
        <p className="center-text">We are an inclusive community aiming to provide females from diverse
          backgrounds with the opportunity to build upon their professional skill
          set and network with hundreds of like-minded females
        </p>
        <div className="gallery__item gallery__item--1">
        <img className="icon" id="icon1" src="img/icon1.png" alt="icon1"/>
        <p>More than 50+ students from both U.S. and Non-U.S. universities and
          colleges have participated...</p>
        </div>
       <div className="gallery__item gallery__item--2">
       <img className="icon" id="icon2" src="img/icon2.png" alt="icon2" />
       <p>... in our 5-week Intensive Training Program</p>

       </div>
        <div className="gallery__item gallery__item--3">
        <img className="icon" id="icon3" src="img/icon3.png"  alt="icon3"/>
        <p>Our goal is to train and send 2500+ participants into the Consulting world
          by 2025
        </p>
        </div>


        <p className="mentors-text">
          Mentors From:
        </p>
        <div className="mentors__item mentors__item--1" >
        <img className="company"  src="img/bcg.png"  alt="bcg"/>
        </div>

        <div className="mentors__item mentors__item--2" >
        <img className="company"  src="img/deloitte-logo.png"  alt="bcg"/>
        </div>

        <div className="mentors__item mentors__item--3" >
        <img className="company"  src="img/mckinsey.png"  alt="bcg"/>
        </div>
      </div>
  )
}
