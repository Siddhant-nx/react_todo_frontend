import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'


 function ManagerReg() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [signup, setSignup] = useState([]);

    const [submitted, setSubmitted] = useState('');
    const [error, setError] = useState('');
    // const [spassword, setSpassword] = useState(false);
    const ip = '127.0.0.1';

    const handleSubmit = async (e)=>{ 
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        setError('Email is not valid');
            return;
        }else{
            setError('');
        }

    if(id && name && email && password){
        const newUser = {
            id: id,
          name: name,
          email: email,
          password: password,
        };
    try{
        const response = await axios.post(`http://${ip}:8000/api/account/register/`, newUser);
        setSignup([...signup,response.data]) 
        console.log(response.data)

        setId('');
        setName('');
        setEmail(''); 
        setPassword('');
        setError('');
        setSubmitted(true);
        console.log('otp sent')
        navigate('/SignupVerify', {state: {email: email}});

    }catch(error){
        console.log(error);
        setError('Server error');
    }   
    }
};

//  const togglePassword = (e) => {
//     if(password===''){
//         setPassword('');
//     }else{
//         setSpassword(!spassword);
//     }
//  };

  return (
    <>
    <Link to='/UserLog'>Home</Link>
    <p className='p1'>Welcome, Admin</p>
    <div className='container-M'>
    {submitted?( 
       navigate('/Signup_verify')
    ):( 
        <form  onSubmit={handleSubmit} >
            <div className='signup'>
            <div className='userdiv'>
                <input type="text" className='i1' value={id} onChange={(e)=> setId(e.target.value)}  placeholder='Enter ID' reguired/>
                <input type='text' className='i1' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Name' required />
                <input type="text" className='i1' value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder='Enter Email'required/>
                <input type='password' className='i1' value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder='Enter Password' required/>
                <button type='submit' className="LButton">Signup</button>
                
                <div className='end-div'> 
                <label className='already-user'>Already user?<br/><Link to="/Login" className='sign-btn'>Singin</Link> </label>
                </div>

               <p className='error'>{error}</p>
            </div>
            </div>
        </form>
    )  }
</div>
</>
  );
}

export default ManagerReg;
