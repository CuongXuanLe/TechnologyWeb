import React from 'react'
import images from '../../constants/images'
import './PostPage.css'

const PostPage = () => {
  return (
    <div className="main__postPage">
        <div className="writePage__img">
            <img src={images.HeaderWrite} alt="ImageWrite"/>  
        </div>
         <div className="post__content">
            <div className="post__content-header">
                <h1>The World's Most Dangerous Technology Ever Made</h1>
                <div className="post__content-info">
                     <div className="content__info-tags">
                        <p>#technology#tech#career</p>
                     </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default PostPage