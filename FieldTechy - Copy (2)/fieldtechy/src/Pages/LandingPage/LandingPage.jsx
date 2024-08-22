import React from 'react'
import './LandingPage.css'
import Servicecard from '../../Components/Servicecard'
import LandingNav from '../../Components/LandingNav'
import SliderComponent from '../../Components/Slider'
import Process from '../../Components/Process'
import Jobcard from '../../Components/Jobcard'
import Footer from '../../Components/Footer'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
 <div className='main'>
   <div className='child1'>
    <LandingNav/>
   </div>
   <section className='homeContainer'>
      {/* <video autoPlay loop muted playsInline src={backvideo}></video> */}
      <div className='homeContent'>
        <h1 className='homeHead'> The world's best marketplace for IT <br /> 
        field services
        </h1>
        <p className='homepara'>
        Whether you’re building your on-demand workforce or the next chapter in your career, build it with Field Techy.        </p>
        <div className='homeButtons'>
          <button className='b1'onClick={() => handleNavigation('/CompanySignUp')}>Find Engineer</button>
          <button className='b2' onClick={() => handleNavigation('/EngineerSignUp')}>Find Jobs</button>
        </div>
      </div>
   </section>
   <section className='advertisement'>
    <div className='addContainer'>
       <h1 className='addHeading'>10,000+ users trust Field Techy platform </h1>
       <p className='addPara'>This market place provides a platform to easily connect the clients and engineer across the world with 99% success rate in completing 1+ million jobs rapidly and make the clients satisfied with the engineer's performance.</p>

    </div>
    <div className='clientContainer'>
         <h1 className='addHeading'>Our trusted clients</h1>
         <div className='logos 'style={{justifySelf:'center'}}>
          <SliderComponent/>
         </div>
    </div>
    <div className='mapContainer'>
        <h1 className='addHeading'>Find engineers around your locality</h1>
        <p className='mapPara'>Search engineers by country, city and zipcode around your locality across the world. </p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2649874311105!2d80.24155427478826!3d12.954888187358879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8e784d0849%3A0xd7cbc57b04065c0e!2sTeceze%20Consultancy%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1718878520860!5m2!1sen!2sin"
            style={{ width: "100%", height: "50vh", border: "0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}
          />
        </div>
    </div>
       <section>
          <Servicecard/>
       </section>
       <section>
          <Process/>
       </section>
       <section>
        <Jobcard/>
       </section>
       <section>
        <Footer/>
       </section>
   </section>
  
 </div>
  )
}

export default LandingPage
