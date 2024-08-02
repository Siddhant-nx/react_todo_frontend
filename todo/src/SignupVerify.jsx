import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'

 function SignupVerify() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const location = useLocation();
    const { email } = location.state || {};
    const [error, setError] = useState('');

    const sendOtp = async (e) => {
     e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/api/account/register/resendotp/', {email});
        console.log(response.data);
        console.log("resent-otp")
        alert('OTP has been sent')
      } catch (error) {
        console.log('Error sending OTP');
      }
    };

    const verify= async(e)=>{
        e.preventDefault();
        const data={
          email: email, 
          otp: otp
        }
        try {
          const response = await axios.post('http://localhost:8000/api/account/register/verifyotp/ ', data);
          console.log(response.data);

          if(otp){

          if(response.status === 200){

          console.log("verified")
          navigate('/Login');
          }
        } else {
          setError('enter otp')
        }
          
        } catch (error) {
          alert('Invalid OTP');
          console.log('Error verifying OTP');
        }  
    }

  return (
    <>
    <h2 className='verify-h2'>Verifying Email</h2>
    <div className='container5'>
        <label className='otp-label'>Enter an OTP sent to your Registered Email Address</label>
        <input type="text" className='i1' placeholder='enter . . .' value={otp} onChange={(e)=> setOtp(e.target.value)}/>
        <button type='submit' className='LButton2' onClick={sendOtp}>Resend OTP</button>
        <button type='submit' className='LButton2' onClick={verify}>Verify</button>
        <p>{error}</p>
    </div>
    </>
  )
}

export default SignupVerify;