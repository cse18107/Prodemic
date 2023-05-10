import React from 'react'
import './Home.css'
import back3 from '../../assets/back3.jpg'
import logo from '../../assets/logo.png'
import down from '../../assets/down-arrow.png'
import {s} from '../../assets/stringfile'

const Home = () => {

  return (
    <div className="container">
      <div className="content">
        <div className="left-content">
          <div className="left-content-container">
            <img src={logo} alt='logo' className='logo'/>
            <div className='down-div'>
                <img src={down} alt="down" className='up-down'/>
            </div>
            <div
              className="left-content-text-content"
              dangerouslySetInnerHTML={{ __html: s }}
            ></div>
            <img
              className="background-image left-image"
              src={back3}
              alt="background"
            />
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-overlay"></div>
          <img className="background-image" src={back3} alt="background" />
        </div>
      </div>
    </div>
  );
}

export default Home