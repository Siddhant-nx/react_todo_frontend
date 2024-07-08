import React, {useState} from 'react';
// import {Link, useNavigate} from 'react-router-dom';


 function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(''); 
    const [error, setError] = useState('');
    const [spassword, setSpassword] = useState('');
    // const navigate = useNavigate();
    
 
    const handleSubmit=(e)=>{ e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email|| !password){
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
        // navigate('/Home');
        
 };
 const togglePassword = () => {
    if(!password){
        setPassword('');
    }else{
    setSpassword(!spassword);
    }
};

  return (
    <>
    <h2 className='login-h2'>Welcome Back</h2>
    <div className='c2'>
    {submitted?(
        setSubmitted('')
    ):(
        <form onSubmit={handleSubmit}>  
            <div className='sign2'>
            <h2>Signin</h2>
            <div className='userdiv2'>
                <label htmlFor="user">Email</label>
                <input type="text" className='i2' value={email} onChange={(e)=> setEmail(e.target.value)}/>

                <label htmlFor="user">Password (6+ characters) </label>
                <input type={spassword ? 'text' : 'password'} className='i3' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button type='button' className='toggle-password2' onClick={togglePassword}> {spassword ? 'Hide Password ' : 'Show Password'} </button>

                {/* <Link to="/Home" className='LButton' onClick={handleSubmit}>Singin</Link> */}

                <button className='LButton'>Login</button>

                <div className='end-div'></div>
                <label className='already-user2'>New user?</label><a className="sign-btn" href="/">Signup</a>
                {/* <Link to="/Login" className='sign-btn'>Singin</Link> */}

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

export default Login;

