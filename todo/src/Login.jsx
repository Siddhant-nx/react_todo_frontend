import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from './AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [spassword, setSpassword] = useState(false);
    
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/account/login/', {
                email: email,
                password: password
            });
            const { access } = response.data;
            
            localStorage.setItem('token', access); //local
            setAuth(access); //context
            console.log('token :',access); //log

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('*Email is not valid');
            return;
        } else {
            setError('');
        }
            // if (password.length < 6) {
        //     setError('*Password should be at least 6 characters long');
        //     return;
        // }
            
            navigate('/Home');
            
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid email or password');
        }
    };

    const togglePassword = () => {
        setSpassword(!spassword);
    };

    return (
        <>
            <h2 className='login-h2'>Welcome Back</h2>
            <div className='c2'>
                <form className='form2' onSubmit={handleSubmit}>
                    <div className='sign2'>
                        <div className='userdiv2'>
                            <label htmlFor="user">*Email</label>
                            <input
                                type="text"
                                className='i2'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label htmlFor="user">*Password (6+ characters) </label>
                            <input
                                type={spassword ? 'text' : 'password'}
                                className='i3'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type='button'
                                className='toggle-password2'
                                onClick={togglePassword}
                            >
                                {spassword ? 'Hide Password' : 'Show Password'}
                            </button>

                            <button type='submit' className='LButton'>Login</button>

                            <div className='end-div'></div>
                            <label className='already-user2'>New user?</label>
                            <Link className="sign-btn" to="/Signup">Signup</Link>
                            <p className='error'>{error}</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;