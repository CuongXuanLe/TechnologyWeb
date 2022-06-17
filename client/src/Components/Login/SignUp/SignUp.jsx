import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import images from '../../../constants/images';
import axios from "axios";



export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
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
        <form className="btn__input" onSubmit={handleSubmit} >
          <input type="text" className="input__account" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
          <input type="email" className="input__account" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
          <input type="password" className="input__password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
          <input type="password" className="input__password" placeholder="Re-enter password"onChange={e=>setPassword(e.target.value)}/>
          <div className="Privacy__Prolicy">
            <input type="checkbox" className='check__box' />
            <label className='form__check'>
              <p>I agree with <span>Terms of Service</span> and <span>Privacy Prolicy</span></p>
            </label> 
          </div>
          {error && <span style={{color: 'red', fontSize:'17px', fontFamily:'Roboto', textAlign:'center', marginBottom:'10px'}}> Something went wrong! </span>}
          <button type="submit" className="input__SignIn-btn set__btn">
              <Link to="/login">
                <p>
                  Sign Up
                </p>
              </Link>
          </button>
        </form> 
      </div>
    </div>
  )
}
