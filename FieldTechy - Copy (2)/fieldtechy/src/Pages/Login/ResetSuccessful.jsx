import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Successfullogin.css';
import Check from "../../assets/check-mark.png";

const ResetSuccessful = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='successMain'>
      <div className='inner'>
        <img className='tick' src={Check} alt="" />
        <p className='innertext'>Reset successfull with your new password. <br /> Redirecting to Home page....</p>
        
        {/* <button className='Successbtn'>LOGIN</button> */}
      </div>
    </div>
  );
};

export default ResetSuccessful;
