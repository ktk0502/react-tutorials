import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Home from './Home'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'><Home/></Link></li>
          <li><Link to='/second'><About/></Link></li>
          <li><Link to='/first'>First Page</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
