import React, { useState, useEffect } from 'react';

import {NavBar, } from "./Components";
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
    </div>
  );
}

export default App;