import React from 'react'
import logo from '../../assets/logo.jpg'
import './Twostep.css'

const Twostep = () => {
    return (
        <>
            <div className='twostepMain'>
                <div className='inner'>
                    <img src={logo} alt="" />
                    <h2>Two-step verification</h2>

                    <p className='innertext'>Thanks for keeping your account secure</p>
                    <p className='innertext'>For security please enter the OTP we have <br /> sent to your email abc@gmail.com or mobile SMS <br /> +91 9238489338</p>

                    <div className='otp-container'>
                        <form id='otp-form'>
                            <input type="text" className='otp-input' maxLength={1} />
                            <input type="text" className='otp-input' maxLength={1}/>
                            <input type="text" className='otp-input' maxLength={1}/>
                            <input type="text" className='otp-input' maxLength={1}/>
                            <input type="text" className='otp-input' maxLength={1}/>
                            <input type="text" className='otp-input' maxLength={1}/>


                        </form>
                    </div>


                    <button className='btn'>SIGN IN SECURELY</button>

                    <p style={{fontSize: "13px", marginTop: "10px"}}>Didn't get the code? <a href=""><span style={{color:  "rgb(53, 122, 104)", textDecoration: 'none'}}> Resend code</span></a> </p>




                </div>





            </div>
        </>
    )
}

export default Twostep