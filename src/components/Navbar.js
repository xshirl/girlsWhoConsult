import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src="img/logo.png" className="logo"/>
        <ul className="menu">
          <li className="item"><a href="#"> About </a> </li>
          <li className="item"><a href="#"> Program </a> </li>
        <li className="item"><a href="#"> Scholars </a> </li>
          <li className="item"><a href="#"> News </a> </li>
          <button className="applyButton">Apply</button>
        </ul>

      </nav>
    </div>
  )
}
