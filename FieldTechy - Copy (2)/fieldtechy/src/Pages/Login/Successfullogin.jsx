// src/Successfullogin.js
import React from 'react';
import './Successfullogin.css';
import Check from "../../assets/check-mark.png";

const Successfullogin = () => {
  return (
    <div className='successMain'>
      <div className='inner'>
        <img className='tick' src={Check} alt="" />
        <p className='innertext'>Login successfull. <br /> Redirecting to Home page....</p>
        
        {/* <button className='Successbtn'>LOGIN</button> */}
      </div>
    </div>
  );
};

export default Successfullogin;
