import React from 'react'
import './AboutPage.css'
import images from '../../constants/images';

const AboutPage = () => {
  return (
    <div className='main__about'>
      <div className="about__profile">
        <img src={images.avatarLarge} alt="avatar" />
        <div className="about__profile-content">
          <h1>Nguyen The Dan</h1>
          <p className='my'>@gay</p>
          <p>Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.</p>
          <div className="social__info">
            <div className="social__info-website">
              <i class="fa-solid fa-link"></i>
              <p>arthurblack.com</p>
            </div>
            <div className="social__info-app">
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="about__profile-slogan">
        <h1>
          Never let the things you can't do stop you from doing what you can.
        </h1>
        <p>One of the most meaningful quotes in my life from Ronald Reagan... Good advice I think!</p>
      </div>
    </div>
  )
}

export default AboutPage
