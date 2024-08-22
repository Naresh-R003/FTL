import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.jpg';
import './Createpass.css';
import { EmailContext } from '../../EmailContext';

const Createpass = () => {
  const { resetEmail } = useContext(EmailContext);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      try {
        const response = await axios.put('http://192.168.1.18:8080/auth/update/password', {
          reset_email:resetEmail,
          new_password: newPassword
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (response.status===200) {
          navigate('/reset-successful');
        } else {
          alert('Failed to reset password');
        }
      } catch (error) {
        alert('Error resetting password');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className='createMain'>
      <div className='inner'>
        <img src={logo} alt="" />
        <h2>Create new password</h2>
        <p className='innertext'>
          Please set a new password for your account <br /> to retrieve your account
        </p>
        <div className='text'>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder='Enter new password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className='btn'>RESET PASSWORD</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createpass;
