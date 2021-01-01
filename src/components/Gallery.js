import React from 'react'

export default function Gallery() {
  return (
    <div>
    <div className="gallery">
        <p className="center-text">We are an inclusive community aiming to provide females from diverse
          backgrounds with the opportunity to build upon their professional skill
          set and network with hundreds of like-minded females
        </p>
        <div className="border-bottom"></div>
        <div className="twenty-five">
          <h1>25<span className="x">X</span>25</h1>

        </div>
        <h6 className="vision">Our vision is for <span className="x">2500+ </span>participants to be <span className="x">S.E.T.</span>by <span className="x">2025</span></h6>
        <div className="gallery__item gallery__item--1">
        <img className="icon" id="icon1" src="img/train-pink.png" alt="icon1"/>
        <p><div className="setHeading"><span className="pink">T</span>rained</div> for a business center</p>
        </div>
       <div className="gallery__item gallery__item--2">
       <img className="icon" id="icon2" src="img/network-pink.png" alt="icon2" />
       <p><div className="setHeading"><span className="pink">E</span>quipped</div> with an extensive network</p>

       </div>
        <div className="gallery__item gallery__item--3">
        <img className="icon" id="icon3" src="img/set-pink.png"  alt="icon3"/>
        <p><div className="setHeading"><span className="pink">S</span>end</div> into the management consulting industry</p>
        </div>
        </div>
      {/* <div className="mentors">
        <p className="mentors-text">
          Mentors <span className="pink">From</span>
        </p>
        <div className="mentors__item mentors__item--1" >
        <img className="company"  src="img/deloitte-logo.png"  alt="bcg"/>
        </div>

        <div className="mentors__item mentors__item--2" >
        <img className="company"  src="img/kpmg-logo-vector.png"  alt="kpmg"/>
        </div>

        <div className="mentors__item mentors__item--3" >
        <img className="company"  src="img/ernst-young-ey.png"  alt="ey"/>
        </div>

        <div className="mentors__item mentors__item--4" >
        <img className="company"  src="img/pwc.png"  alt="pwc"/>
        </div>
        </div> */}
        </div>
  )
}
