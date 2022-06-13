import React from 'react'
import {ProfilePage, EditProfile } from '../../components'
import {
  Routes,
  Route,
} from 'react-router-dom';

const Profile = () => {
  return (
    <div className='blog__profile'>
      <Routes>
        <Route exact path='/' element={<ProfilePage/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
      </Routes>
    </div>
  )
}

export default Profile
