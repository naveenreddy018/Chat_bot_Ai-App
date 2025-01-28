import React from 'react'
import './hello.css'

import Slide_Bar from '../slide_bar/slide_bar';
import Response_Bar from '../reponse_bar/response';

import "./hello.css"
import { useState } from 'react';
function Hello() {
  const [isDarkMode,setIsDarkMode] = useState(true)
  
  const toggle = ()=>{
    setIsDarkMode(prev => !prev)
  }
  return (
    <div className='app-container1'  style={{backgroundColor : isDarkMode ? "white" : "black"}}>
       {/* <button className='toggle_chat' style={{backgroundColor : isDarkMode ? "white" : "black"}} onClick={toggle}>
       {isDarkMode ? '🌙' : '☀️'}
       </button> */}
       < Slide_Bar color={isDarkMode} />
       <Response_Bar />
    </div>
  )
}

export default Hello;

