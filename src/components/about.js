// src/components/About.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faWindowMinimize, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
const About = ({ id, title, description, imageUrl, onClose, onMinimize, onMaximize }) => {

  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };
  return (
    <div className={`popup ${isMaximized ? 'maximized' : ''}`} id={id}>
      <div className="popup-container"  style={{
          width: isMaximized ? '100%' : 'min(900px, 90%)',
          top: isMaximized ? '50%' : '45%',
        }}>
        <div className="popup-header">
          <div className="button-container">
            <button className="close-btn circle-btn red" onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button className="close-btn circle-btn yellow" onClick={onClose}>
              <FontAwesomeIcon icon={faWindowMinimize} />
            </button>
            <button className="maximize-btn circle-btn green" onClick={handleMaximize}>
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </button>
          </div>
        </div>
        <div  className={`popup-body about-container ${isMaximized ? 'prevent-scroll' : ''}`}
          style={{
            height: isMaximized ? '90vh' : '70vh',
          }} >
          <div className="img-frame">
            <img src={imageUrl} alt="Profile" />
          </div>
          <div className="hero_content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
