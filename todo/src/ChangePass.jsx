import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'

 function ChangePass() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [rpassword, setRpassword] = useState('');
    const [error, setError] = useState('')
    const location = useLocation();
    const {email, otp} = location.state || {};
    const ip = '127.0.0.1';

    const reset=async(e)=>{
        e.preventDefault();

        const data = {
          email : email,
          otp : otp,
          new_password : password
        }
        try {

          if(password && rpassword !==''){

            if(password === rpassword){

            setError('')
            const response = await axios.post(`http://${ip}:8000/api/account/reset-password/`,data);
            console.log(response.data);
            alert('Password changed please login again')
            navigate('/Login')

            }else{
              setError('Password combination does not match')
            }
          }else{ 
            setError('enter both fields correctly')
          }

          console.log("password changed")
        } catch (error) {
          console.log('Error Changing password');
          alert('error changing password')
        }  
    }

  return (
    <>
    <h2 className='verify-h2'>Reset Password</h2>
    <div className='container4'>
        <input type="text" className='i1' placeholder='Enter new password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
        <input type="text" className='i1' placeholder='Re-enter new password' value={rpassword} onChange={(e)=> setRpassword(e.target.value)} required/>
        <button type='submit' className='LButton' onClick={reset}>Reset</button>
    <p className='error'>{error}</p>
    </div>
    </>
  )
}
export default ChangePass;