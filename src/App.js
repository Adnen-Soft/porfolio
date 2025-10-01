// src/App.js
import React, { useState } from 'react';
import About from "./components/about";
import Skills from './components/Skills';
import Projects from './components/projects';
import Contact from './components/contact';
import IconContainer from "./components/iconcontainer";
import Modal from "./components/Modal";
import './App.css'; // CSS styles
import profileimage from "./assets/images/IMG_20240510_153631.jpg"
function App() {
  const [selectedModal, setSelectedModal] = useState("about");
  const [selected, setSelected] = useState(null);
  const handleIconClick = (modalName) => {
    setSelectedModal(modalName);
  };
  
  const handleClose = () => {
    setSelectedModal(null);
  };

  return (
    <div className="App">
      
      <main>
        <IconContainer handleIconClick={handleIconClick}/>
        {selectedModal === "about" && <About
          id="about"
          title="Adnen Hamouda"
          description="I'm a FullStack developer. I have dedicated myself to creating visually appealing and user-friendly websites. I'm always open to using new skill sets and I believe in the power of collaboration, working closely with designers and back-end developers to deliver cohesive and effective solutions."
          imageUrl={profileimage}
          onClose={handleClose}
         
        />}
        <div style={{ display: selectedModal === "projects" ? 'block' : 'none' }}>
          <Projects setSelected={setSelected} onClose={handleClose} />
        </div>
       
        {selectedModal === "skills" && <Skills onClose={handleClose} />}
        {selectedModal === "contact" && <Contact onClose={handleClose} />}
        <Modal selected={selected} setSelected={setSelected} />
        
      </main>
    </div>
  );
}

export default App;
