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
    </div>
  )
}

export default ProfilePage
