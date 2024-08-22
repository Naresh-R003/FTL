import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import LandingPage from './Pages/LandingPage/LandingPage';

import About from './Pages/About/About';
import Login from './Pages/Login/Login'
import OtpMethod from './Pages/Login/OtpMethod'
import OtpInput from './Pages/Login/OtpInput'
import Successfullogin from './Pages/Login/Successfullogin'
import ResetSuccessful from './Pages/Login/ResetSuccessful'
import Createpass from './Pages/Login/Createpass'
import Forgetpass from './Pages/Login/Forgetpass'
import Clientregis from './Pages/SignUp/EndUser/Clientregis';
import Corporateregis from './Pages/SignUp/Corporate/Corporateregis';
import EmailVerification from './Pages/SignUp/EndUser/EmailVerification';
function App() {
  return (
   <div>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main/>}>
        <Route path='/' element={<LandingPage/>}/>
         <Route path="/Clientregis" element={<Clientregis/>}/>
         <Route path="/Corporateregis" element={<Corporateregis/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/email-verification" element={<EmailVerification/>}/>

         <Route path="/Login" element={<Login/>}/>
         <Route path="/otp-method" element={<OtpMethod />} />
        <Route  path="/otp-input" element={<OtpInput />} />
        <Route path="/success" element={<Successfullogin />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/create-password" element={<Createpass/>} />
        <Route path="/reset-successful" element={<ResetSuccessful/>} />


        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
