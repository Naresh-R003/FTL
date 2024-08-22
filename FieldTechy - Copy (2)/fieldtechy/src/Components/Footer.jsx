import React from 'react'
import "./Footer.css"
import logo1 from '../assets/logowhite.png'

const Footer = () => {

    return (
        <>

            <div className='footermain'>

                <section className='footer'>
                    <div className='footer-content'>
                        <img src={logo1} alt="" />

                    </div>
                    <div className='footer-content'>
                        <h4>FIND ENGINEERS</h4>
                        <li><a href="">How it works for clients</a></li>
                        <li><a href="">Plan & pricing</a></li>
                        <li><a href="">Reviews & ratings</a></li>
                        <li><a href="">Contact sales</a></li>

                    </div>
                    <div className='footer-content'>
                        <h4>FIND JOBS</h4>
                        <li><a href="">How it works for engineers</a></li>
                        <li><a href="">Plan & pricing</a></li>
                        <li><a href="">Insurance</a></li>
                        <li><a href="">Skillsets</a></li>
                        <li><a href="">Sign up</a></li>

                    </div>
                    <div className='footer-content'>
                        <h4>RESOURCES</h4>
                        <li><a href="">Our blogs</a></li>
                        <li><a href="">MAp coverage</a></li>
                        <li><a href="">FAQs</a></li>

                    </div>
                    <div className='footer-content'>
                        <h4>ABOUT</h4>
                        <li><a href="">Our tale</a></li>
                        <li><a href="">Our partners</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Support</a></li>

                    </div>
                    <div className='footer-content'>
                        <h4>CONTACT US</h4>
                        <li><a href="">+447700960160</a></li>
                        <li><a href="">73 Mc</a></li>


                    </div>


                </section>
                <div className='row'>
                    <hr className='line' />

                </div>

             <div className='foot'>
                <div className='lowerfooter'>




                    <div>@2024 Field Techy, All right reserved</div>
                    <div className='lowerfootermidtext'>
                        <div> Terms of Services</div>
                        <div> Privacy Policy</div>
                        <div> Security</div>

                    </div>

                    <div>English</div>

                </div>

         </div>


            </div>








        </>


    )
}

export default Footer
