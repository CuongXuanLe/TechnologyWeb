import React from 'react'
import './HomeHeader.css'
import images from '../../../constants/images';

const HomeHeader = () => {
  return (
    <div className="blog__homeHeader">
      <div className="blog__homeHeader-container">
        <div className="tittle__flex-row">
          {/* article */}
          <div className="homeHeader__article">
            <img src={images.iphone} alt="iphone"/>
            <div className="homeHeader__article-tittle">
              <p className="article__tittle-header">
                Why are you gay?
              </p>
              <p className="article__tittle-sub">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="article__type">
                <p>TECH</p>
              </div>
            </div>
          </div>
          <div className="tittle__flex-col">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader



