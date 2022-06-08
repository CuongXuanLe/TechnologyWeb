import React, { useState, useEffect } from 'react';
import { NavBar } from "./components";
import { Home } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';

import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;