import React, { useState, useEffect, useRef } from 'react';
import './LandingNav.css';
import logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LandingNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLoginClick = () => {
    navigate('/Login'); // Navigate to the Login page
  };

  return (
    <div className='LandingNav'>
      <div className='links'>
        <div className='logoContainer'>
          <img className='logo link' src={logo} alt="logo" />
        </div>
        <NavLink className='link' to="/About">About Us</NavLink>
        <div className='link'>Services</div>
        <div className='link'>Resources</div>
      </div>
      <div className='logs'>
        <div className='login link' onClick={handleLoginClick}>Login</div>
        <div className='dropdown-container' ref={dropdownRef}>
          <button className='getStarted' onClick={toggleDropdown}>Sign Up</button>
          {showDropdown && (
            <div className='dropdown'>
              <div className='dropdown-item'>
                <NavLink className="navlinks" to='/Corporateregis' >Corporate Register</NavLink>
              </div>
             <div className='dropdown-item'>
               <NavLink className="navlinks" to='/Clientregis' >EndClient Register</NavLink>
             </div>
            </div>
          )}
        </div>
        <div className='link'>Help</div>
      </div>
    </div>
  );
}

export default LandingNav;
