import React, { useState, useEffect, useContext } from 'react';
import ImageComponent from '../ImageComponent/image.jsx';
import { assets } from '../../assets/assets';
import './slide.css';

import { Array } from '../reponse_bar/response.jsx';
import { Link } from 'react-router-dom';


function Slide_Bar() {
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  
  const getMinWidth = () => {
    if (windowWidth <= 468) {
      return menu ? '55vw' : '0vw';
    } else if (windowWidth <= 768) {
      return menu ? '25vw' : '0vw';
    } else {
      return menu ? '15vw' : '0vw';
    }
  };

  return (
    <div className='slide_container'>
      <div className='top' style={{ minWidth: getMinWidth() }}>
        <ImageComponent
          src={assets.menu_icon}
          style={{
            width: 30,
            margin: 10,
           
          }}
             title = "click on hamburger"
          onClick={() => setMenu((prev) => !prev)}
        />

        <div className='top-section'>
          <div className='top-middle-layer'>
            <div className='plus-icon' title = "New chat">
              <ImageComponent
                src={assets.history_icon}
                style={{
                  width: 30,
                  margin: 5
                }}
                title = "New chat"
              />
              {menu && <p>Recent history</p>}
            </div>
          </div>

          <div className='top-bottom-layer'>
            <div className='recent-items'>
          


              {
                menu && Array.length > 0 ? (
                  <div className="recent-history">
                    {
                      Array.map((item, index) => (
                        <>
                          <p key={index}>{item}</p>
                        </>

                      ))
                    }
                  </div>
                ) : null

              }
            </div>
          </div>
        </div>
      </div>

      <div className='bottom'>
        {/* <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.history_icon}
            style={{
              width: 30,
            }}
          />
          {menu && <Link to="/history">History</Link>}
        </div> */}
        <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.question_icon}
            style={{
              width: 30,
            }}
            title = "Click on Hamburger to access"
          />
            {menu && <Link to="/Help">Help</Link>}
        </div>
        <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.setting_icon}
            style={{
              width: 30,
            }}
                 title = "Click on Hamburger to access"
          />
          {menu && <Link to="/settings">Settings</Link>}
        </div>
      </div>
    </div>
  );
}

export default Slide_Bar;

