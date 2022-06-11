import React, { useState, useEffect } from 'react';
import { NavBar, Footer, SideBar } from "./components";
import { Home, Login } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';
import './App.css';


const App = () => {

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
      
      <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} login={login}/>
      <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login/*' element={<Login setLogin={setLogin} />}/>
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;