import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='top'>
      <div className="top__menu">
      <i class="fa-solid fa-bars"></i>
      </div>
      <div className="top__name">
        <a href="/">TEKUN.IO</a>
        </div>
      <div className="top__nav">
          <div class="search__box">
            <button class="search__submit" aria-label="submit search"><i class="fas fa-search"></i></button>
            <input type="text" class="search__input" aria-label="search" placeholder="Search"/>
          </div>
        <button className="top__nav-button" type="button">
          <p>Login</p>
        </button>
      </div>
    </div>
  )
}
