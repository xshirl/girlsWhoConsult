import React from 'react'

export default function Mentors() {
  return (
    <div className="mentors">
        <p className="mentors-text">
          Mentors <span className="pink">From</span>
        </p>
        <div className="mentors__item mentors__item--1" >
        <img className="company"  src="img/deloitte-logo.png"  alt="bcg"/>
        </div>

        <div className="mentors__item mentors__item--2" >
        <img className="company2"  src="img/kpmg-logo-vector.png"  alt="kpmg"/>
        </div>

        <div className="mentors__item mentors__item--3" >
        <img className="company"  src="img/ernst-young-ey.png"  alt="ey"/>
        </div>

        <div className="mentors__item mentors__item--4" >
        <img className="company3"  src="img/pwc.png"  alt="pwc" width="100px"/>
        </div>
        </div>
  )
}
