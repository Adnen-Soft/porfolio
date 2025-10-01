// src/components/Contact.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faXmark,
  faWindowMinimize,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ id, onClose }) => {
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send formData to an API.
    console.log(formData);
  };
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };
  return (
    <div className={`popup ${isMaximized ? "maximized" : ""}`} id={id}>
      <div
        className="popup-container"
        style={{
          width: isMaximized ? "100%" : "min(900px, 90%)",
          top: isMaximized ? "50%" : "45%",
        }}
      >
        <div className="popup-header">
          <div className="button-container">
            <button className="close-btn circle-btn red" onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button className="close-btn circle-btn yellow" onClick={onClose}>
              <FontAwesomeIcon icon={faWindowMinimize} />
            </button>
            <button
              className="maximize-btn circle-btn green"
              onClick={handleMaximize}
            >
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </button>
          </div>
        </div>
        <div
          className={`popup-body contact-container ${isMaximized ? "prevent-scroll" : ""}`}
          style={{
            height: isMaximized ? "90vh" : "70vh",
          }}
        >
         <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name.."
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Your mail.."
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style={{ height: '200px' }}
        value={formData.subject}
        onChange={handleChange}
      />

      <button className="submit-btn more-btn" type="submit">
        <span>Submit <FontAwesomeIcon icon={faPaperPlane} /></span>
      </button>
    </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
