import './App.css';
import './part 2/App2.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import SignupVerify from './SignupVerify';
import LoginVerify from './LoginVerify';
import ChangePass from './ChangePass';
import ManagerReg from './part 2/ManagerReg';
import UserLog from './part 2/UserLog'
import UserProgress from './part 2/UserProgress'
import React from 'react'
import { Route, Routes } from "react-router-dom";


function App() {
 return(
  <div>
    {/* something */}
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Signup' element={<Signup />} />
        <Route path='/ManagerReg' element={<ManagerReg/>}/>
        <Route path='/UserLog' element={<UserLog/>}/>
        <Route path='/UserProgress' element={<UserProgress/>}/>
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
