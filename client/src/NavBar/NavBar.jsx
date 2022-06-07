import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='top'>
        <div className="top__menu">
          <i class="fa-solid fa-bars-sort"></i>
        </div>
        <div className="top__name">TEKUN.IO</div>
        <div className="top__nav">
          <i class="fa-solid fa-magnifying-glass"/>
          <button className="top__nav-button">
            login
          </button>
        </div>
    </div>
  )
}
