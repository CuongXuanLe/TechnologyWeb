import React from 'react'
import images from '../../constants/images'
import './WritePage.css'

const WritePage = () => {
  return (
    <div className='main__writePage'>
      <div className="writePage__img">
        <img src={images.HeaderWrite} alt="Image Write"/>
        <button className='change__img'>CHANGE IMAGE</button>   
      </div>
      <div className="writePage__write">
        <textarea className='write__tittle' type="text" placeholder='Input title...'/>
        <textarea className='write__content' type="text" placeholder='Tell your story....' />
        <button>PUBLISH</button>
      </div>
    </div>
  )
}

export default WritePage
