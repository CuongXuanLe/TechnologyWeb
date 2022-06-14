import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import images from '../../../constants/images';

const SignUp = () => {
  return (
    <div className="SignUp__main">
      <div className="SignIn__img">
        <img src={images.login} alt="Login_image" />
      </div>
      <div className="SignIn__info SignUp__fix">
        <div className="SignIn__header">
          <p>Hello</p>
          <h1>Create your account</h1>
        </div>
        <form className="btn__input">
          <input type="text" className="input__account" placeholder="Username"/>
          <input type="email" className="input__account" placeholder="Email"/>
          <input type="password" className="input__password" placeholder="Password"/>
          <input type="password" className="input__password" placeholder="Re-enter password"/>
          <div className="Privacy__Prolicy">
            <input type="checkbox" className='check__box' />
            <label className='form__check'>
              <p>I agree with <span>Terms of Service</span> and <span>Privacy Prolicy</span></p>
            </label> 
          </div>
          <div className="input__SignIn">
            <Link to="/login">
              <p>Sign Up</p>
            </Link>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default SignUp
