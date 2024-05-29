import './css.css'
import React, { useState } from 'react';

const Navbar = () => {
  const [title, setTitle] = useState('');

  return (
    <header >
      <nav className='navbar'>
        <div className='logo'>
        <span className='logo_name'>{title}</span>
        </div>
        <div className='search_container'>
            <input className='search_input' type='text' placeholder='Search a note' />

        </div>
      </nav>
      <hr/>
      </header>
  )
}

export default Navbar
