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
              <div className="sub__article-text">
                <img src={images.content_2} alt="image2" />
                <div className="header__sub-article">
                <p className="sub__article-header">
                  Why are you gay?
                </p>
                <p className="article__tittle-content">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="sub__article-type">
                  <p>LIFE</p>
                </div>
              </div>
            </div>
            <div className="sub__article-text">
                <img src={images.content_3} alt="image2" />
                <div className="header__sub-article">
                <p className="sub__article-header">
                  Why are you gay?
                </p>
                <p className="article__tittle-content">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="sub__article-type">
                  <p>TRUTH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sub__article-text">
            <img src={images.content_4} alt="image2" />
              <div className="header__sub-article">
              <p className="sub__article-header">
                Why are you gay?
              </p>
              <p className="article__tittle-content">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="sub__article-type">
                <p>LIFE</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="sub__article-row">
          <div className="sub__article-text">
                <img src={images.content_5} alt="image2" />
                <div className="header__sub-article">
                <p className="sub__article-header">
                  Yes, you're gay!
                </p>
                <p className="article__tittle-content">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="sub__article-type">
                  <p>TRUTH</p>
                </div>
              </div>
          </div>
          <div className="sub__article-text">
                <img src={images.content_6} alt="image2" />
                <div className="header__sub-article">
                <p className="sub__article-header">
                  Yes, you're gay!
                </p>
                <p className="article__tittle-content">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="sub__article-type">
                  <p>LIFE</p>
                </div>
              </div>
          </div>
          <div className="sub__article-text">
                <img src={images.content_7} alt="image2" />
                <div className="header__sub-article">
                <p className="sub__article-header">
                  Yes, you're gay!
                </p>
                <p className="article__tittle-content">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="sub__article-type">
                  <p>TECH</p>
                </div>
              </div>
          </div>
          <div className="sub__article-text">
            <img src={images.content_8} alt="image2" />
            <div className="header__sub-article">
            <p className="sub__article-header">
              Yes, you're gay!
            </p>
            <p className="article__tittle-content">
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="sub__article-type">
              <p>TRUTH</p>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeHeader



