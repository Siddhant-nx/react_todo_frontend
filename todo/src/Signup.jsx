import React, {useState} from 'react';
// import {Link, useNavigate} from 'react-router-dom';


 function Signup() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [error, setError] = useState('');
    const [spassword, setSpassword] = useState(false);
    // const navigate = useNavigate();
    

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
        // navigate('/Home');
        
 };
 const togglePassword = (e) => {
    if(password===''){
        setPassword('');
    }else{
        setSpassword(!spassword);
    }
 };

  return (
    <>
    <p className='p1'>Remember, Write, achieve</p>
    <div className='container'>
    {submitted?(
        <p>You signed in</p>
        ,setSubmitted('')
    ):(
        <form  onSubmit={handleSubmit} >
        
            <div className='signup'>
            <div className='userdiv'>
                <h2>Signup</h2>
                <label htmlFor="user">Username</label>
                <input type='text' className='i1' value={user} onChange={(e)=> setUser(e.target.value)} />

                <label htmlFor="user">Email</label>
                <input type="text" className='i2' value={email} onChange={(e)=> setEmail(e.target.value)}/>

                <label htmlFor="user">Password (6+ characters) </label>
                <input type={spassword ? 'text' : 'password'} className='i3' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button type='button' className='toggle-password' onClick={togglePassword}> {spassword ? 'Hide Password ' : 'Show Password'} </button>

                {/* <Link to="/Home" className='LButton' onClick={handleSubmit}>Singup</Link> */}
                <button class="LButton">Signup</button>

                
                <div className='end-div'> 
                <label className='already-user'>Already user?<br/><a href="/" className='sign-btn'>Singin</a> </label>
                </div>

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

export default Signup;

