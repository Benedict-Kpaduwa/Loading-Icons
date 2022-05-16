import React from 'react'
import './App.css';

const BouncyLoad = () => {
  return (
    <div className="body">
        <div className="loader">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <span>Loading</span>
    </div>
    </div>
  )
}

export default BouncyLoad