import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Clientregis.css';
import logo from '../../../assets/Logo.png';
import eyeopen from '../../../assets/eyeopen.png';
import eyeclose from '../../../assets/eye.png';
import { EmailContext } from '../../../EmailContext';

const Clientregis = () => {
  const { setEmail } = useContext(EmailContext); // Use context to set email
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmailLocal] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.18:8080/auth/signup', {
        first_name: firstName,
        last_name: lastName,
        phone,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        setEmail(email); // Store the email in the context
        alert('To complete register verify the OTP')
        navigate('/email-verification'); // Navigate to the EmailVerification page

      } else {
        alert('Registration failed');
      }
    } catch (error) {
      alert('Error during registration');
    }
  };

  return (
    <>
      <div className='clientRegisterMain'>
        <div className='inner'>
          <img src={logo} alt="Logo" />
          <h2 className='innertext'>Become a part of our community <br /> and access exclusive features!</h2>

          <div className='text'>
            <form className='regForm' onSubmit={handleRegister}>
              <div className='regInp'>
                <input
                  type="text"
                  placeholder='First name'
                  className='input'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Last name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className='regInp'>
                <input
                  type="email"
                  placeholder='Email ID'
                  className='input'
                  value={email}
                  onChange={(e) => setEmailLocal(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Phone number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className='regInp'>
                <div className='textt'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    className='input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ width: '20px' }}
                    className='clienteye'
                    src={showPassword ? eyeopen : eyeclose}
                    alt=""
                  />
                </div>
                <div className='textt'>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    className='input'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <img
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ width: '20px' }}
                    className='clienteye'
                    src={showConfirmPassword ? eyeopen : eyeclose}
                    alt=""
                  />
                </div>
              </div>
              <button type="submit" className='btn'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clientregis;
