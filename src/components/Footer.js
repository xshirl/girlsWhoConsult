import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer-logo">
        <img src="img/logo.png"/>
        </div>
        <div className="social-media social-media--1">
        <i className="fa-icon fa fa-envelope-o" aria-hidden="true"></i>
        </div>
        <div className="social-media social-media--2">
        <i className="fa fa-twitter" aria-hidden="true"></i>
        </div>
        <div className="social-media social-media--3"><i class="fa fa-instagram" aria-hidden="true"></i></div>
        <div className="social-media social-media--4">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        </div>
        <div className="copyright">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <br />
          <p>&copy; 2020 Girls Who Consult</p>
          <br />
          <p>Made with &hearts; <br/>by Shirley + Yvonne</p>
        </div>

      </footer>
  )
}
