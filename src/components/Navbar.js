import React from 'react'
import { Link } from 'react-router-dom'
import App from '../App';
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Mobile">Mobile</Link>
          </li>
          <li>
            <Link to="/Dextop">Dextop</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

