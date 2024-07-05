import React, {useState} from 'react';

 function Login() {
    const [user, setUser] = useState('');
    const [sc, setSc] = useState('');
    const [latitude, setLatitude] = useState('');
    const [submitted, setSubmitted] = useState('');

const handleSubmit= (e)=> {
    e.preventDefault();
    if(user && sc && latitude){
        console.log('logged inn ',{user, sc, latitude});
        setSubmitted(true);
    }
};

  return (
    <div className='container'>
        { submitted? (
            <p>logged in</p>
        ):(
            <form onSubmit={handleSubmit}>
                <div>
                 <div className='logo'><h2>Admin login</h2></div>
                <div className="userdiv">
                <label >User:</label>
                <input className="i1" type="text" onChange={(e)=> setUser(e.target.value)} />
                
                <label >Secret cOde:</label>
                <input className="i2" type="text" onChange={(e)=> setSc(e.target.value)} />
               
                <label >Latitude:</label>
                <input className="i3" type="text" onChange={(e)=> setLatitude(e.target.value)} />
                
                <button className="LButton" type='submit'>Login now</button>
                <div className="note">
                <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="feather feather-alert-circle"
                            style={{ marginBottom: '10px' }}
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12" y2="16"></line>
                        </svg><br />
                    This is a Secured Page <br />
                Leave this Page if you are not the Administrator <br />
                You are being tracked.
                </div>

                </div>
                </div>
            </form>
        )}
      
    </div>
  );
}

export default Login;