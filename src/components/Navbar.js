import React from 'react'

export default function Navbar() {
  return (

    <div className="navbar">
      <p>
        <span style={{color:'white'}}>PHOT</span>
        <span style={{color:'red'}}>OED</span>
      </p>
      <div className="navigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Mobile</a>
          </li>
          <li>
            <a href="#">Dextop</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </div>


  )
}
