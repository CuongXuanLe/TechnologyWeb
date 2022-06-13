import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import images from '../../constants/images'

const NavBar= ({ toggleMenu, setToggleMenu, login, setLogin }) => {
  return (
    <div className="Navbar">
      <div className='blog__nav'>
        <div className={"top__menu" + (toggleMenu && "active")} onClick={() => setToggleMenu(!toggleMenu)}>
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
            {login ? (
              <div className='login__avatar'>
                <img src={images.ProfilePicture} alt="avatar" />
                <div className="box__setting">
                  <p className='box__setting-name'>MikeJoester</p>
                  <Link to='/Profile'>
                    <div className="setting__profile">
                      <i class="fa-regular fa-user"></i>
                      <p>Profile</p>
                    </div>
                  </Link>
                  <Link to='/ChangePassword'>
                    <div className="setting__password">
                      <i class="fa-solid fa-gear"></i>
                      <p>Change password</p>
                    </div>
                  </Link>
                  <div className="setting__logout">
                      <i class="fa-solid fa-circle-xmark"></i>
                      <button onClick={setLogin}>Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <button className="top__nav-button" type="button">
              <Link to="/login">
                <p>Login</p>
              </Link>
            </button>
            )
            }
          
        </div>
      </div>
      {/* <div className="Navbar__sub-menu">
        <a href="/">HOME</a>
        <a href="/">ABOUT</a>
        <a href="/">PROFILE</a>
        <a href="/">WRITE</a>
      </div> */}
    </div>
  )
}
export default NavBar
