import React from 'react'
import './Jobcard.css'
import Button from './Button'

const Jobcard = () => {
    return (
        <div className='jobdiv'>
            <div className='maintext'>
                <h1 className='jobHead' >Our job types</h1>
            </div>

            <p className="lowertext">We provide all the below services across the world with more than 50+ skillsets to achieve the success rate</p>

            <div className="jobcontainer">
                <div className=" jobcard">
                    <h3 className='service-title'>Dedicated Services</h3>
                    <div className="card-image card-1"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis rerum laudantium in eos quas?</p>
                    <div style={{width:"300px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Button text="Read more" />
                    </div>
                   

                </div>
                <div className=" jobcard">
                    <h3 className='service-title'>Dispatch Service</h3>
                    <div className="card-image card-2"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quam nisi praesentium rerum suscipit harum .</p>
                    <div style={{width:"300px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Button text="Read more" />
                    </div>

                </div>
                <div className=" jobcard">
                    <h3 className='service-title'> Schedule Services</h3>
                    <div className="card-image card-3"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quam nisi praesentium rerum suscipit harum .</p>
                    <div style={{width:"300px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Button text="Read more" />
                    </div>

                </div>

                <div>
                <div className='maintext'>
                    <h1 className='jobHead'>Choose our marketplace for excellent control of our service </h1>
                </div>
               

                <div className="buttons">
                <button className='jobButton1'>Find Engineers</button>
                <button className="jobbutton">Find Jobs</button>
               


                </div>

                </div>

            </div>

        </div>
    )
}

export default Jobcard
