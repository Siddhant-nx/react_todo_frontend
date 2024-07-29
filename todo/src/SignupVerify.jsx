import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import axios from 'axios';
// import {user, email, password, ip, setSignup, signup, setUser, setEmail, setPassword, setError, setSubmitted} from './Signup'

 function SignupVerify() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] =  useState('');
    const navigate = useNavigate();

    const sendOtp = async () => {
      try {
        const response = await axios.post('http://localhost:3000/send-otp', { email });
        console.log(response.data);
      } catch (error) {
        console.log('Error sending OTP');
      }
    };

    const verify= async(e)=>{
        e.preventDefault();
        e.preventDefault();
        console.log("verify");
        navigate('/Login');
    }

  return (
    <>
    <h2 class='verify-h2'>Verifying Email</h2>
    <div className='container3'>
        <label className='otp-label'>Enter an OTP sent to your Registered Email Address</label>
        <input type="text" className='i1' placeholder='enter . . .'/>
        {/* <button type='submit' className='verify-btn' onClick={verify}>send OTP</button> */}
        <button type='submit' className='LButton2' onClick={sendOtp}>Resend OTP</button>
        <button type='submit' className='LButton2' onClick={verify}>Verify</button>
    </div>
    </>
  )
}

export default SignupVerify;