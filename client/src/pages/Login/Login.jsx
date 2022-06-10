import React from 'react'
import { SignIn, SignUp } from '../../components'
import './Login.css'
import {
  Routes,
  Route,
} from 'react-router-dom';

const Login = () => {
  return (
    <div className='blog__main-login'>
      <Routes>
        <Route exact path='/' element={<SignIn/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}


export default Login
