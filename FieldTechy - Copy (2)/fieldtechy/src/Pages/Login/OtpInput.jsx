// src/OtpInput.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './OtpInput.css';
import logo from '../../assets/logo.jpg';
import { EmailContext } from '../../EmailContext';
import { useNavigate } from 'react-router-dom';

const OtpInput = () => {
  const { email, verificationType } = useContext(EmailContext);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60); // 2 minutes in seconds
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const navigate= useNavigate();
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setIsResendEnabled(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.keyCode === 8) {
      if (otp[index] === "") {
        if (index !== 0) {
          setOtp([...otp.map((d, idx) => (idx === index - 1 ? "" : d))]);
          event.target.previousSibling.focus();
        }
      } else {
        setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    try {
      const response = await axios.post('http://192.168.1.18:8080/auth/login/verification', {
        email,
        otp: enteredOtp,
        verification_type: verificationType
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status===200) {
        alert("OTP verified successfully!");
        navigate('/success');
        // Redirect to the desired page after successful verification
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      alert("Error verifying OTP. Please try again.");
    }
  };

  const handleResendCode = async () => {
    if (!isResendEnabled) return;

    try {
      const response = await axios.post('http://192.168.1.18:8080/auth/resend-code', {
        email,
        verification_type: verificationType
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status===200) {
        alert("OTP resent successfully!");
        setTimeLeft(60); // Reset the timer
        setIsResendEnabled(false);
      } else {
        alert("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      alert("Error resending OTP. Please try again.");
    }
  };

  return (
    <div className='outer'>
      <div className='otpContainer'>
        <div>
          <img className='otpLogo' src={logo} alt="logo" />
        </div>
        <div>
          <h1 className='otpHeader' style={{ fontWeight: '10px' }}>Two-step verification</h1>
        </div>
        <div className='otpPara'>
          Thanks for keeping your account secure
        </div>
        <div>
          <p className='otpPara'>For security purposes, please enter the OTP we have sent to your email {email} or mobile SMS.</p>
        </div>
        <div>
          
          <form style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px"}} onSubmit={handleSubmit}>

            <div className='otpInputContainer' >
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  name="otp"
                  maxLength="1"
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  onFocus={e => e.target.select()}
                  style={{
                    width: '2rem',
                    height: '2rem',
                    textAlign: 'center',
                    margin: '0.2rem',
                    fontSize: '1.5rem',
                    borderRadius: '6px',
                    border: '1px solid  #339380',
                  }}
                />
              ))}
              {/* <span style={{color:"blue",paddingLeft:"30px"}} className='timer'><div><ClarityAlarmClockLine/></div>{formatTime(timeLeft)}</span> */}
            </div>
            <div className='buttonContainer'>
              <button type="submit" className='otpButton'>SIGN IN SECURELY</button>
            </div>
          </form>
        </div>
        <p style={{display:"flex"}}>Didn't get the code? <span onClick={handleResendCode} style={{ cursor: isResendEnabled ? 'pointer' : 'not-allowed', color: isResendEnabled ? 'blue' : 'grey',paddingLeft:"5px", paddingRight:"5px"  }}>Resend code</span> in <span style={{color:"blue",display:"flex",paddingLeft:"5px"}} className='timer'>{formatTime(timeLeft)}</span>
        </p>
      </div>
    </div>
  );
};

export default OtpInput;
