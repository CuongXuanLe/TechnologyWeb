import React from 'react'
import './ChangePassword.css'

const ChangePassword = () => {
  return (
    <div className='main__changePassword'>
      <h1>Change your password</h1>
      <div className="input__changePassword">
        <input type="password" placeholder='Old password...'/>
        <input className='fix__m' type="password" placeholder='New password...'/>
        <input type="password"  placeholder='Confirm new password...'/>
      </div>
      <button type='button' className='btn__submit'>Submit</button>
    </div>
  )
}

export default ChangePassword
