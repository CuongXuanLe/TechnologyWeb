import React from 'react'
import './ProfilePage.css'
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
              <button className='btn__edit-profile'>EDIT PROFILE</button>
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
        <div className="profile__active-title">
          <p>Recent Activity</p>
        </div>
        <div className="comment__info">
            <div className="comment__info-user">
                <img src={images.ProfilePicture} alt="user" />
                <p className="user__name">MikeJoester</p>
                <p className="user__reply">May 12, 2022 at 17:06</p>
            </div>
        </div>
        <div className="active_comment">
          <p>
          Basically what you want to do is delete the file containing the logs which is your ".git" file.<br/>
            1. rm -rf .git // this is saying remove recursively the git file.<br/>
            2. git init // this is making the folder a git repo again.<br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
