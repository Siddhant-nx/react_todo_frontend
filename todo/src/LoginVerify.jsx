import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// siddd

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 function LoginVerify() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [otp, setOtp] = useState('');
    const ip = '127.0.0.1';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const sendOtp = async (e) => {
          e.preventDefault();
           try {
            
            if (!emailRegex.test(email)) {
                setError('Invalid email');
                return;
            } else {
                setError('');
            }
             const response = await axios.post(`http://${ip}:8000/api/account/forgot-password/`, {email});
             console.log(response.data);
             console.log("otp sent")
            //  alert('OTP has been sent')

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
             setError('User does not exist, please Singup first')
           }
        };
  
        const verify= async(e)=>{ 
          e.preventDefault();
          const data={
            email: email,
            otp: otp
          }
          try {
          
            if(email && otp){
            const response = await axios.post(`http://${ip}:8000/api/account/register/verifyotp/`, data);
            console.log(response.data);

            if(response.status === 200){
              
            console.log("verified")
            navigate('/ChangePass', {state: {email: email, otp : otp}} );
            } else {
              console.log('Invalid OTP');
            }
          } else {
            setError('Please Enter both fields correctly')
          }
          
          } catch (error) {
            setError('Invalid OTP !')
            console.log('Error verifying OTP');
          }  
      }

  return (
    <>
    <h2 className='verify-h2'>Verifying Account</h2>
    <div className='container3'>
        {/* <label className='otp-label'>Enter OTP sent to your RegistredEmail Address</label> */}
        <input type="text" className='i1' placeholder='enter Email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
        <input type="text" className='i1' placeholder='enter OTP'value={otp} onChange={(e)=> setOtp(e.target.value)} required/>
        <button type='submit' className='LButton2' onClick={sendOtp}>Send OTP</button>
        <button type='submit' className='LButton2' onClick={sendOtp}>Resend</button>
        <button type='submit' className='LButton2' onClick={verify}>Confirm</button>
        <p className='error2'>{error}</p>

        <ToastContainer/>
    </div>
    </>
  )
}
export default LoginVerify;

// jjjjj