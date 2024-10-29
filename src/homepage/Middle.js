import React from 'react';
import './home-css/Middle.css';
import { FiMousePointer } from "react-icons/fi";

const Middle = () => {
  return (
    <section className="Middle-section">
      <div className="Middle-content">
        <h1 className="Middle-heading">Convert your word into voice</h1>
        <p className="Middle-description">
          From text-to-speech to AI dubbing, our innovative tools break down language barriers, give a voice to the voiceless, and create authentic, human-like interactions, reshaping the way we communicate in the digital world
        </p>
        <button className="Middle-button">Get Started < FiMousePointer className='pointer-icon'/></button>
      </div>
      <div className="Middle-image-container">
        <img src="https://voixoff.pro/wp-content/uploads/2023/04/robot-intelligence-artificielle-parlant-au-micro.jpg" alt="Example" className="Middle-image" />
      </div>
    </section>
  );
};

export default Middle;
