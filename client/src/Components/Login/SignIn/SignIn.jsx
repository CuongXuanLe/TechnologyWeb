import React from 'react'
import images from '../../../constants/images';
import { Link } from 'react-router-dom'
import './SignIn.css'


const SignIn = ({ setLogin }) => {
  return (
    <div className='SignIn__main'>
      <div className="SignIn__img">
        <img src={images.login} alt="Login_image" />
      </div>
      <div className="SignIn__info">
        <div className="SignIn__header">
          <p>Welcome back</p>
          <h1>Login to your account</h1>
        </div>
        <form className="btn__input">
          <input type="email" className="input__account" placeholder="Enter Email"/>
          <input type="password" className="input__password" placeholder="Password"/>
          <div className="forgetPassword">
          <p>Recover Password?</p>
          </div>
          <div className="input__SignIn">
            <button onClick={setLogin}><Link to="/">Sign In</Link></button>
          </div>
        </form>
        <div className="SignIn__otherways">
          <div className="boder"></div>
          <p>Or continue with</p>
          <div className="boder"></div>
        </div>
        <div className="SignIn__brands">
          <div className="SignIn__brands-btn">
            <i class="fa-brands fa-google"/>
          </div>
          <div className="SignIn__brands-btn middle">
            <i class="fa-brands fa-apple"/>
          </div>
          <div className="SignIn__brands-btn">
            <i class="fa-brands fa-facebook-f"/>
          </div>
        </div>
        <div className="SignIn__no-account">
          <p>
            Don't have an account ? 
            <Link to="/login/register">
              <span> Join free today </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
