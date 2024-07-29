import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 function LoginVerify() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const sendOtp = async () => {
      try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email');
            return;
        } else {
            setError('');
        }
        const response = await axios.post('http://localhost:3000/send-otp', { email });
        console.log(response.data);
      } catch (error) {
        console.log('Error sending OTP');
      }
    };

    const verify=(e)=>{
        e.preventDefault();
        console.log("verify");
        navigate('/ChangePass');
    }

  return (
    <>
    <h2 class='verify-h2'>Verifying Account</h2>
    <div className='container3'>
        {/* <label className='otp-label'>Enter OTP sent to your RegistredEmail Address</label> */}
        <input type="text" className='i1' placeholder='enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" className='i1' placeholder='enter OTP'/>
        <button type='submit' className='LButton2' onClick={sendOtp}>Send OTP</button>
        <button type='submit' className='LButton2' onClick={sendOtp}>Resend</button>
        <button type='submit' className='LButton2' onClick={verify}>Confirm</button>
        <p className='error2'>{error}</p>
    </div>
    </>
  )
}
export default LoginVerify;