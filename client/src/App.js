import React, { useState, useEffect } from 'react';
import { NavBar, Footer, SideBar } from "./components";
import { Home } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';

import './App.css'
const App = () => {

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
      
      <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;