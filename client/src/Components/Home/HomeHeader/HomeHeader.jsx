import React from 'react'
import './HomeHeader.css'
import images from '../../../constants/images';

const HomeHeader = () => {
  return (
    <div className="blog__homeHeader">
      <div className="homeHeader__container">
        <div className="homeHeader__article-row">
          {/* main-article */}
          <div className="main__article">
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

          {/* sub-article */}
          <div className="sub__article-col">
            <div className="sub__article-row">

            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default HomeHeader



