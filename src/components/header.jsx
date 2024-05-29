import React from 'react'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-700'>
      <ul className='flex justify-around'>  
        <li className='py-2 text-white'>
          <Link to="/">Home</Link>
        </li>
        <li className='py-2 text-white'>
          <Link to="/about-us">About Us</Link>
        </li>
        <li className='py-2 text-white'>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header