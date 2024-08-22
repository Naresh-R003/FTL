import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.jpg';
import './Login.css';
import eyeclose from '../../assets/eye.png';
import eyeopen from '../../assets/eyeopen.png';
import { EmailContext } from '../../EmailContext';

const Login = () => {
  const { email, setEmail } = useContext(EmailContext);
  const [passdata, setpassdata] = useState('');
  const [showpass, setshowpass] = useState(false);
  const navigate = useNavigate();

  const handleinput = (e) => {
    setpassdata(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleshowpass = () => {
    setshowpass(!showpass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.18:8080/auth/login', {
        email,
        password: passdata
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true // This allows cookies to be sent with the request if needed
      });

      if (response.status === 200) {
        navigate('/otp-method');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid credentials');
      } else {
        alert('Error logging in');
      }
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgetpass');
  };

  return (
    <div className='loginMain'>
      <div className='inner'>
        <img src={logo} alt="" />
        <h2>Welcome to your digital workspace!</h2>
        <div className='loginText'>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email address' value={email} onChange={handleEmailInput} />
            {showpass ? (
              <img onClick={handleshowpass} style={{ width: '20px' }} className='eye' src={eyeopen} alt="" />
            ) : (
              <img onClick={handleshowpass} style={{ width: '20px' }} className='eye' src={eyeclose} alt="" />
            )}
            <input type={showpass ? 'text' : 'password'} value={passdata} onChange={handleinput} placeholder='Password' />
            
            <div className='buttonContainer'>
              <button type="submit" className='butn'>Login</button>
            </div>
          </form>
        </div>
        <h6 className='forgot' onClick={handleForgotPassword}>forgot password </h6>
        <div className='check rememberbox'>
          <input type="checkbox" name="" id="" />
          <p className='remember'>Remember me</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
