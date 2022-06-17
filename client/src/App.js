import React, { useState, useEffect } from 'react';
import { NavBar, Footer, SideBar } from "./components";
import { Home, Login, About, Write, Post, Password, Profile } from "./pages";
import { useContext } from "react";
import { Context } from "./context/Context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';
import './App.css';


const App = () => {
  const { user } = useContext(Context);
  const [login, setLogin] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    console.log(pathname)

    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      
      <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} login={login} setLogin={setLogin}/>
      <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} login={login} setLogin={setLogin}/>
      
      <Routes>
        <Route path='/TechnologyWeb' element={<Home />}/>
        <Route path='/login/*' element={<Login setLogin={setLogin} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/write' element={<Write />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/Profile/*' element={<Profile/>}/>
        <Route path='/ChangePassword' element={<Password/>}/>
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;