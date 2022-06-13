import React from 'react'
import images from '../../../constants/images'
import './EditProfile.css'

const EditProfile = () => {
  return (
    <div className='main__editProfile'>
      <div className="editProfile__img">
        <img src={images.editProfile} alt="ava" />
        <button className="add__img">
          <i class="fa-solid fa-circle-plus"></i>
        </button>
      </div>
      <div className='editProfile__setting'>
        <h1>Edit your profile</h1>
        <div className="input__changePassword">
          <input type="text" placeholder='Your name...'/>
          <input className='fix__m' type="text" placeholder='LinkedIn profile link...'/>
          <input type="text"  placeholder='Instagram profile link...'/>
          <input className='fix__m' type="text" placeholder='Twitter profile link...'/>
          <textarea className="input__changePassword-text" id="" cols="5" rows="5" placeholder='Your bio...'></textarea>
        </div>
        <button type='button' className='btn__submit'>Submit</button>
      </div>
    </div>
  )
}

export default EditProfile
