import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src="img/logo.png" className="logo"/>
        <ul className="menu">
          <li className="dropdown item"><a href="#" className="dropbtn"> About </a>
          <div className="dropdown-content">
            <a href="#">Our Founding Story</a>
            <a href="#">Our Team</a>
            </div>
            </li>
          <li className="dropdown item"><a href="#" className="dropbtn" > Program </a>
          <div className="dropdown-content">
            <a href="#">Intensive Training Program</a>
            <a href="#">Apply Now</a>
            </div>
           </li>
        <li className="dropdown item"><a href="#" className="dropbtn"> Alumni</a>
        <div className="dropdown-content">
            <a href="#">2021</a>
            <a href="#">2020</a>
            <a href="#">Alumni Council </a>
            </div>
        </li>
          <li className="dropdown item"><a href="#" className="dropbtn"> Join </a>

          <div className="dropdown-content">
            <a href="#">Be a Mentor</a>
            <a href="#">Work Here</a>
            <a href="#">Event Speaker </a>
            </div>
            </li>
          <li className="item"><a href="#" > Contact </a> </li>
          <button className="applyButton"> Apply </button>
        </ul>

      </nav>
    </div>
  )
}
