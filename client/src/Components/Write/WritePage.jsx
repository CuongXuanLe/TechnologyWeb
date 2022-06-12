import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../constants/images'
import './WritePage.css'

const WritePage = () => {
  return (
    <div className='main__writePage'>
      <div className="writePage__img">
        <img src={images.HeaderWrite} alt="ImageWrite"/>
        <button className='change__img'>CHANGE IMAGE</button>   
      </div>
      <div className="writePage__write">
        <textarea className='write__tittle' type="text" placeholder='Input title...'/>
        <textarea className='write__content' type="text" placeholder='Tell your story....' />
        <Link to='/post'>
          <button>PUBLISH</button>
        </Link>
      </div>
    </div>
  )
}

export default WritePage
