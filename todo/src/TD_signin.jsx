import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';


 function Signup(props) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [error, setError] = useState('');
    const [spassword, setSpassword] = useState('');

    const navigate = useNavigate();
    

    const handleSubmit=(e)=>{ e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!user|| !email|| !password){
        setError('All fields need to be filled');
        return;
    }
    if(!emailRegex.test(email)){
        setError('Email is not valid');
        return;
    }
    if(password.length<6){
        setError('Password should be atleast 6 character long');
        return;
    }
        // console.log('logged in',{user,email,password});
        // setSubmitted(true);
        // setError('');
       
        navigate('/TD_login');
        
 };
 const togglePassword = () => {
    setSpassword(!spassword);
 };

    // const navigate = useNavigate();
    // const handleLoginRedirect = ()=>{
    //     navigate('./TD_login');
    // }

  return (
    <>
    <p className='p1'>Remember, Write, achieve</p>
    <div className='container'>
    {submitted?(
        <p>You signed in</p>
    ):(
        <form onSubmit={handleSubmit}>
        
            <div>
            <div className='userdiv'>
                <h2>Signup</h2>
                <label htmlFor="user">Username</label>
                <input type='text' className='i1' value={user} onChange={(e)=> setUser(e.target.value)} />

                <label htmlFor="user">Email</label>
                <input type="text" className='i2' value={props.email} onChange={(e)=> setEmail(e.target.value)}/>

                <label htmlFor="user">Password (6+ characters) </label>
                <input type={spassword ? 'text' : 'password'} className='i3' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button type='button' className='toggle-password' onClick={togglePassword}> {spassword ? 'Hide' : 'Show'} </button>

                <button type='submit' className='LButton'>signup</button>
                <button type="reset">Reset</button>
                <label htmlFor="singup">Already user? </label><button className="anc">signin</button>
               <p className='error'>{error}</p>
            </div>
            
            </div>
        </form>
        
    )
    }

</div>
</>
  )
}

// Login.propTypes = {
//     user: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired
// }


export default Signup;

