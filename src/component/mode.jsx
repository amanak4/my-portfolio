import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import './mode.css';
const Modeld = () => {

    
    const getstorageMode=()=>{
let darkmo='dark';
if(localStorage.getItem('mode')){
    darkmo=localStorage.getItem('mode');
}
return darkmo;
    }

    const [DarkMode,setDarkMode] = useState(getstorageMode());

    const mode=()=>{
      if(DarkMode==='light'){
        setDarkMode('dark');
      }
      else{
        setDarkMode('light');
      }
    }
  
    useEffect(()=>{
      document.documentElement.className = DarkMode;
      localStorage.setItem('mode',DarkMode);
    },[DarkMode]);

  return (
    <div className='darkmode__btn' onClick={mode}>
    {DarkMode==='dark'?<FaMoon /> : <FaSun />}
  </div>
  )
}

export default Modeld
