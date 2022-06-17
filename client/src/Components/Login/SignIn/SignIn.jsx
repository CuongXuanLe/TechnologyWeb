import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../../context/Context";
import images from '../../../constants/images';
import { Link } from 'react-router-dom'
import './SignIn.css'


export default function SignIn({ setLogin }){
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  
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
        <form className="btn__input" onSubmit={handleSubmit}>
          <input type="email" className="input__account" placeholder="Enter Email" ref={userRef}/>
          <input type="password" className="input__password" placeholder="Password" ref={passwordRef}/>
          <div className="forgetPassword">
          <p>Recover Password?</p>
          </div>
          <div className="input__SignIn">
            <button 
            type="submit" 
            className='input__SignIn-btn disabled__btn' 
            onClick={setLogin} 
            disabled={isFetching}>
              <Link to="/">
                Sign In
              </Link>
              </button>
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

