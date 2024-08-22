// src/OtpMethod.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './OtpInput.css';
import logo from '../../assets/logo.jpg';
import { MaterialSymbolsLightSmsOutline, MaterialSymbolsLightMailOutline } from '../../Icons';
import { EmailContext } from '../../EmailContext';

const OtpMethod = () => {
  const { email, setVerificationType } = useContext(EmailContext);
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (method) => {
    setSelectedMethod((prevMethod) => (prevMethod === method ? '' : method));
  };

  const handleContinue = async () => {
    if (selectedMethod) {
      const verificationType = selectedMethod === 'sms' ? 'sms' : 'email';
      setVerificationType(verificationType); // Set the verification type in context

      const payload = {
        email,
        verification_type: verificationType
      };

      try {
        const response = await axios.post('http://192.168.1.18:8080/auth/login/otp', payload, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        // Handle the response if needed
        console.log(response.data);
        navigate('/otp-input');
      } catch (error) {
        console.error('Error sending OTP request:', error);
        alert('Failed to send OTP request. Please try again.');
      }
    } else {
      alert('Please select an OTP method');
    }
  };

  return (
    <div className='outer'>
      <div className='otpContainer'>
        <div>
          <img className='otpLogo' src={logo} alt="logo" />
        </div>
        <div>
          <h1 className='otpHeader' style={{ fontWeight: '300' }}>Choose OTP Verification Method</h1>
        </div>
        <div className='smsOuter'>
          <div className='smsContainer'>
            <div className='smsIcon'>
              <MaterialSymbolsLightSmsOutline />
            </div>
            <div className='smsContent'>
              <p>Send OTP via SMS</p>
              {/* <h5>+91 8807823339</h5> */}
            </div>
            <div className='smsCheck'>
              <input
                className='smsinp'
                type="checkbox"
                checked={selectedMethod === 'sms'}
                onChange={() => handleCheckboxChange('sms')}
              />
            </div>
          </div>
          <div className='smsContainer'>
            <div className='smsIcon'>
              <MaterialSymbolsLightMailOutline />
            </div>
            <div className='smsContent smsemail'>
              <p>Send OTP via Email</p>
              {/* <h5>nithinnaresh622@gmail.com</h5> */}
            </div>
            <div className='smsCheck'>
              <input
                className='smsinp'
                type="checkbox"
                checked={selectedMethod === 'email'}
                onChange={() => handleCheckboxChange('email')}
              />
            </div>
          </div>
        </div>
        <div>
          <button className='otpButton' onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default OtpMethod;
