import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import React from 'react'
import { Route, Routes } from "react-router-dom";


function App() {
 return(
  <div>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Login'  element={<Login />} />
      <Route path='/Home'   element={<Home />} />
    </Routes>
  </div>
 );
} 

export default App;
