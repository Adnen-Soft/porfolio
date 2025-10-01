// src/components/About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode, faUsersRectangle, faEnvelope,faBarsProgress } from '@fortawesome/free-solid-svg-icons';


const IconContainer =  ({ handleIconClick }) => {
  return (
    <section>
    <div className="icon-container">
      <div className="icon-box about" data-modal="about" onClick={() => handleIconClick('about')}>
        <FontAwesomeIcon icon={faAddressCard} />
      </div>
      <div className="icon-box projects" data-modal="projects" onClick={() => handleIconClick('projects')}>
        <FontAwesomeIcon icon={faLaptopCode} />
      </div>
      <div className="icon-box testimonial" data-modal="testimonial" onClick={() => handleIconClick('skills')}>
        <FontAwesomeIcon icon={faBarsProgress} />
      </div>
      <div className="icon-box contact" data-modal="contact" onClick={() => handleIconClick('contact')}>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
     
    </div>
  </section>
  );
};

export default IconContainer;
