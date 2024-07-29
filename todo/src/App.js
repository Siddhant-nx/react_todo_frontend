import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import SignupVerify from './SignupVerify';
import LoginVerify from './LoginVerify';
import ChangePass from './ChangePass';
import React from 'react'
import { Route, Routes } from "react-router-dom";


function App() {
 return(
  <div>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Signup' element={<Signup />} />
        <Route path='/SignupVerify' element={<SignupVerify/>}/>
      <Route path='/Login'  element={<Login />} />
        <Route path='/LoginVerify' element={<LoginVerify/>}/>
          <Route path='/ChangePass' element={<ChangePass/>}/>
      <Route path='/Home' element={<Home />} />
    </Routes>
  </div>
 );
} 

export default App;
