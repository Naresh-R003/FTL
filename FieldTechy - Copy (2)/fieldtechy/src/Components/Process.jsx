import React from 'react'
import './Process.css'
import checkbox from '../assets/checkbox.png'
import {MynauiThreeHexagon,MynauiOneHexagon,MynauiTwoHexagon} from '../Icons'
const Process = () => {


  return (
    <div className='processmain'>
      <div className='left-process'>
        <div className='buttonset'>
          <button className='jobButton1'>How it work for buyers</button>
          <button className="jobbutton">How it work for providers </button>
        </div>

        <div className='process-text'>
          <h2 className='processHead' >Find talented engineers for you jobs</h2>

          <p className='processPara'>We provide a marketplace where clients can find skilled engineers to get through the job within the timestamp</p>
        </div>

      </div>


      <div className='right-process'>

    


        

        <div className='process-card'>
          <div className='processcardimg'>
            <MynauiOneHexagon/>
          </div>
          <div className='process-cardtext'>
            <h4>Post and manage job</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem!</p>

          </div>


        </div>

        <div className='process-card'>
          <div className='processcardimg'>
          <MynauiTwoHexagon/>
          </div>
          <div className='process-cardtext'>
            <h4>Seek talented engineers</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem!</p>

          </div>


        </div>

        <div className='process-card'>
          <div className='processcardimg'>
          <MynauiThreeHexagon />

          </div>
          <div className='process-cardtext'>
            <h4>Feasible across the world</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem!</p>

          </div>


        </div>




      </div>
    </div>
  )
}

export default Process
