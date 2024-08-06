import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 function SignupVerify() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const location = useLocation();
    const { email } = location.state || {};
    const [error, setError] = useState('');
    const ip = '127.0.0.1';

    const sendOtp = async (e) => {
     e.preventDefault();
      try {
        const response = await axios.post(`http://${ip}:8000/api/account/register/resendotp/`, {email});
        console.log(response.data);
        console.log("resent-otp")
        // alert('OTP has been sent')

        toast.success('OTP has been sent', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        
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
          const response = await axios.post(`http://${ip}:8000/api/account/register/verifyotp/`, data);
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
          // alert('Invalid OTP');

          toast.error('Invalid OTP', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          
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
        <p className='error'>{error}</p>
        <ToastContainer />

    </div>
    </>
  )
}

export default SignupVerify;
