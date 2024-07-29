import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

 function ChangePass() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [rpassword, setRpassword] = useState('');
    const [error, setError] = useState('')

    const reset=async(e)=>{
        e.preventDefault();
        if(password!=''){
        if(password == rpassword){
        setError('')
        alert('Password changed please login again')
        navigate('/Login');

        }else{
          setError('Password combination does not match')
        }
      }else{
        setError('Password combination does not match')
      }
    }

  return (
    <>
    <h2 class='verify-h2'>Reset Password</h2>
    <div className='container3'>
        <input type="text" className='i1' placeholder='Enter new password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <input type="text" className='i1' placeholder='Re-enter new password' value={rpassword} onChange={(e)=> setRpassword(e.target.value)}/>
        <button type='submit' className='LButton' onClick={reset}>Reset</button>
    <p className=''>{error}</p>
    </div>
    </>
  )
}
export default ChangePass;