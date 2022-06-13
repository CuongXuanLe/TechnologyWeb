import React from 'react'
import './ProfilePage.css'
import { Link } from 'react-router-dom'
import images from '../../constants/images'


const ProfilePage = () => {
  return (
    <div className='main__profile'>
      <div className="about__profile">
        <img src={images.avatarLarge} alt="avatar" />
        <div className="about__profile-content">
          <h1>Nguyen The Dan</h1>
          <p className='my'>@gay</p>
          <p>Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.</p>
          <div className="social__info">
            <div className="social__info-website">
              <Link to='/editProfile'>
              <button className='btn__edit-profile'>EDIT PROFILE</button>
              </Link>
            </div>
            <div className="social__info-app">
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__recent-active">
        <p className='recent__active-tittle'>Recent activity</p>
        <div className="recent__active">
          <div className="recent__active-info">
            <img src={images.avatarLarge} alt="" />
            <p><span>MikeJoseter</span> May 22, 2022 at 23:17</p>
          </div>
          <p>
            Basically what you want to do is delete the file containing the logs which is your ".git" file.<br/>
            <span className='pl-10px'>
              1. rm -rf .git // this is saying remove recursively the git file.<br/>
              2. git init // this is making the folder a git repo again.<br/>
            </span>
          </p>
        </div>
        <div className="recent__active">
          <div className="recent__active-info">
            <img src={images.avatarLarge} alt="" />
            <p><span>MikeJoseter</span> May 22, 2022 at 23:17</p>
          </div>
          <p>
          The protocol necessary depends on how you're connecting to git. The example provided assumes you are using the git protocol. The git book explains various protocols supported by git.
          </p>
        </div>
        <div className="recent__active">
          <div className="recent__active-info">
            <img src={images.avatarLarge} alt="" />
            <p><span>MikeJoseter</span> May 22, 2022 at 23:17</p>
          </div>
          <p>
            Basically what you want to do is delete the file containing the logs which is your ".git" file.<br/>
            <span className='pl-10px'>
              1. rm -rf .git // this is saying remove recursively the git file.<br/>
              2. git init // this is making the folder a git repo again.<br/>
            </span>
          </p>
        </div>
        <div className="recent__active">
          <div className="recent__active-info">
            <img src={images.avatarLarge} alt="" />
            <p><span>MikeJoseter</span> May 22, 2022 at 23:17</p>
          </div>
          <p>
          The protocol necessary depends on how you're connecting to git. The example provided assumes you are using the git protocol. The git book explains various protocols supported by git.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
