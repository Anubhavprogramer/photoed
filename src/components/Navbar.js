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
            Home
          </li>
          <li>
            Mobile
          </li>
          <li>
            Dextop
          </li>
          <li>
            Contact us
          </li>
        </ul>
      </div>
    </div>
  )
}
