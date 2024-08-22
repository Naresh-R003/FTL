import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.jpg';
import './Forgetpass.css';
import { EmailContext } from '../../EmailContext';

const Forgetpass = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { setResetEmail } = useContext(EmailContext); // Get the setEmail function from context

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.keyCode === 8) {
      if (otp[index] === '') {
        if (index !== 0) {
          setOtp([...otp.map((d, idx) => (idx === index - 1 ? '' : d))]);
          event.target.previousSibling.focus();
        }
      } else {
        setOtp([...otp.map((d, idx) => (idx === index ? '' : d))]);
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.18:8080/auth/forgot-password', {
        email,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status===202) {
        alert('OTP sent to your email');
        setResetEmail(email);
      } else {
        alert('Failed to send OTP');
      }
    } catch (error) {
      alert('Error sending OTP');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');

    try {
      const response = await axios.post(`http://192.168.1.18:8080/auth/reset/verify?email=${email}&otp=${enteredOtp}`, {}, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status===200) {
        setShowPopup(true);
        setTimeout(() => {
          navigate('/create-password');
        }, 2000);
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      alert('Error verifying OTP');
    }
  };

  return (
    <>
      <div className='forgetMain'>
        <div className='inner'>
          <img src={logo} alt="" />
          <h2>Forgot password</h2>

          <p className='innertext'>
            Enter your registered email below to receive <br /> password reset instructions
          </p>
          <div className='forgetEmailContainer'>
            <div className='forgotText'>
              <form>
                <input
                  className='forgotInp'
                  type="text"
                  placeholder='Email address'
                  value={email}
                  onChange={handleEmailChange}
                />
              </form>
            </div>
            <div>
              <button className='otpButton' onClick={handleSendOtp}>SEND OTP</button>
            </div>
          </div>

          <div>
            <form className='forgotOtpForm' onSubmit={handleSubmit}>
              <div>
                <p>Enter OTP here:</p>
                {otp.map((data, index) => (
                  <input
                    className='otpBox'
                    key={index}
                    type="text"
                    name="otp"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onFocus={(e) => e.target.select()}
                    style={{ width: '3rem', height: '3rem', textAlign: 'center', margin: '0.2rem', fontSize: '1.5rem', borderRadius: '6px', border: '1px solid  #339380' }}
                  />
                ))}
              </div>
              <div>
                <button type="submit" className='otpButton'>VERIFY OTP</button>
              </div>
            </form>
          </div>

          {showPopup && (
            <div className='popup'>
              <p style={{color:'green'}}>OTP verified</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Forgetpass;
