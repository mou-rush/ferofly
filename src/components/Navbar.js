import React from 'react';
import "./Navbar.css";



function Navbar() {
    return (
<nav>
<ul>
  <li><a href="default.asp">HOME</a></li>
  <li><a href="news.asp">ABOUT</a></li>
  <li><a href="contact.asp">ROOMS</a></li>
  <li><a href="about.asp">SERVICES</a></li>
  <li><a href="about.asp">GALLERY</a></li>
  <li><a href="about.asp">SEE & DO</a></li>
  <li><a href="about.asp">CONTACT</a></li>
  <button className="booking-btn">Book A Room</button>
</ul>
</nav>
    )  
}

export default Navbar;
