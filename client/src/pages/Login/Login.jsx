import React from 'react'
import { SignIn, SignUp } from '../../Components'
import './Login.css'
import {
  Routes,
  Route,
} from 'react-router-dom';

const Login = ({ setLogin }) => {
  return (
    <div className='blog__main-login'>
      <Routes>
        <Route exact path='/' element={<SignIn setLogin={setLogin}/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}


export default Login
