import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'


 function Signup() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [signup, setSignup] = useState([]);


    const [submitted, setSubmitted] = useState('');
    const [error, setError] = useState('');
    const [spassword, setSpassword] = useState(false);

    const handleSubmit = async (e)=>{ 
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        setError('Email is not valid');
            return;
        }else{
            setError('');
        }

    if(password.length<6){
        setError('Password should be atleast 6 character long');
        return;
    }    
        if(user && email && password){
        const newUser = {
          name: user,
          email: email,
          password: password,
        };
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/account/register/", newUser);
        setSignup([...signup,response.data])
        console.log(response.data)
        
        setUser('');
        setEmail('');
        setPassword('');
        setError('');
        setSubmitted(true);

        navigate('/Login');
    }catch(error){
        console.log(error);
        setError('internal signup error');
    }}
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
       navigate('/Login')
    ):( 
        <form  onSubmit={handleSubmit} >
        
            <div className='signup'>
            <div className='userdiv'>
                {/* <h2>Signup</h2> */}
                <label htmlFor="user">*Username</label>
                <input type='text' className='i1' value={user} onChange={(e)=> setUser(e.target.value)} required />

                <label htmlFor="user">*Email</label>
                <input type="text" className='i2' value={email} onChange={(e)=>setEmail(e.target.value)} required/>

                <label htmlFor="user">*Password (6+ characters) </label>
                <input type={spassword ? 'text' : 'password'}
                 className='i3'
                  value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                <button type='button' className='toggle-password' onClick={togglePassword}> {spassword ? 'Hide Password ' : 'Show Password'} </button>

                {/* <Link to="/Home" className='LButton' onClick={handleSubmit}>Singup</Link> */}
                <button type='submit' className="LButton">Signup</button>

                
                <div className='end-div'> 
                <label className='already-user'>Already user?<br/><Link to="/Login" className='sign-btn'>Singin</Link> </label>
                </div>

               <p className='error'>{error}</p>
            </div>
            </div>
        </form>
        
    )
    }

</div>
</>
  );
}

export default Signup;

