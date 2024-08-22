import React from 'react'
import "./Servicecard.css"
import cctv from '../assets/cctv.jpg'
import audio from '../assets/audio.jpg'
import cloud from '../assets/cloud.jpg'
import network from '../assets/network.jpg'
import server from '../assets/server.jpg'
import storage from '../assets/storage.jpg'
import data from '../assets/data.jpg'


const Servicecard = () => {
  return (
    <div className='service'>
      <div className='maintext'>
        <h1 className='serviceHeading'>Explore service available</h1>
      </div>

      <p className="lowertext">We provide all the below services across the world with more than 50+ skillsets to achieve the success rate</p>

      <div className="container">
        <div className="card">
          <img src={cctv} alt="" />
          <div className="card-text">CCTV Access Control</div>
        </div>
        <div className="card"> <img src={audio} alt="" /> <div className="card-text">Audio/Video Services</div></div>
        <div className="card"> <img src={storage} alt="" /><div className="card-text">Storage Engineer</div></div>
        <div className="card"> <img src={cloud} alt="" /><div className="card-text">Cloud Engineer</div></div>
        <div className="card"> <img src={cloud} alt="" /><div className="card-text">DevOps Engineer</div></div>
        <div className="card"> <img src={data} alt="" /><div className="card-text">Data Center</div></div>
        <div className="card"> <img src={network} alt="" /><div className="card-text">Network Engineer</div></div>
        <div className="card"> <img src={server} alt="" /><div className="card-text">Server Engineer</div></div>

      </div>


    </div>
  )
}

export default Servicecard
