import React from 'react'
import images from '../../../constants/images';
import './SignIn.css'

const SignIn = () => {
  return (
    <div className='SignIn__main'>
      <div className="SignIn__img">
        <img src={images.login} alt="Login_image" />
      </div>
      <div className="SignIn__info">

      </div>
    </div>
  )
}

export default SignIn
