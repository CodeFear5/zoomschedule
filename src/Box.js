// src/Box.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Box.css';
import  myimage from './zoomlogo.jpeg'

const Box = () => {
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    navigate('/schedule');
  };

  return (
    <div className="box">
      <img
        src={myimage}
        alt="Zoom Meeting"
        className="zoom-image"
      />
      <button onClick={handleScheduleClick} className="schedule-button">
        Schedule a Meeting
      </button>
    </div>
  );
};

export default Box;
