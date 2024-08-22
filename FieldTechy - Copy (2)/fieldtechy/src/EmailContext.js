// src/EmailContext.js
import React, { createContext, useState } from 'react';

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [verificationType, setVerificationType] = useState('');
  const [resetEmail, setResetEmail]=useState('');
  return (
    <EmailContext.Provider value={{ email, setEmail, verificationType, setVerificationType,resetEmail,setResetEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
