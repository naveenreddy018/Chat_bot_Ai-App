import React, { useEffect } from 'react';
import "./notify.css"
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from 'react-toastify';

 export function Appa(props){
    const {action} = props
    console.log(action)
  const notify = (action) => toast(`${action}`);
  useEffect(()=>{
    notify(action)
  },[action])

  return (
    <div className='notify-container '>

      <ToastContainer  position="top-center" autoClose={3000}/>
    </div>
  );
}