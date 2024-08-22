import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../../assets/Logo.png';
import './Corporate.css';
import { useNavigate } from 'react-router-dom';
const Corporateregis = () => {
  const [companyName, setCompanyName] = useState('');
  const [corporateEmail, setCorporateEmail] = useState('');
  const [corporatePhone, setCorporatePhone] = useState('');
  const navigate= useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://192.168.1.18:8080/corporate/register', {
        company_name: companyName,
        corporate_email: corporateEmail,
        corporate_phone: corporatePhone,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        alert('your details submited we will contact you soon');
        navigate('/');

        // Navigate or update the UI as needed after successful registration
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      alert('Error during registration');
    }
  };

  return (
    <>
      <div className='corporateRegisterMain'>
        <div className='inner'>
          <img src={logo} alt="Logo" />
          <h2 className='innertext'>Become a part of our community <br /> and access exclusive features!</h2>
          <div className='text'>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder='Company name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <input
                type="email"
                placeholder='Official mail ID'
                value={corporateEmail}
                onChange={(e) => setCorporateEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder='Official phone number'
                value={corporatePhone}
                onChange={(e) => setCorporatePhone(e.target.value)}
              />
              <button type="submit" className='btn'>SUBMIT REQUEST</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Corporateregis;
