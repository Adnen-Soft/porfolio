import React, { useState, useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faWindowMinimize,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
const Projects = ({ setSelected, onClose, onMinimize, onMaximize }) => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [ActiveGenre,setActiveGenre]=useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMaximized, setIsMaximized] = useState(false);
 
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };
  const Card = ({ setSelected, item }) => {
    return (
      <motion.div layout 
      animate={{
        opacity:1,scale:1
      }}
      initial={{
        opacity:0 ,scale:0
      }}
      exit={{
        opacity:0,scale:0
      }}
      whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
      className={`inline-block w-full mb-4 card glass cursor-pointer ${isMaximized ? "w-65" : "w-64"}`}  onClick={() => {
        console.log("Image clicked", item);
        setSelected(item);
      }}>
         <figure>
        <img
         
          
          layoutId={`card-${item.id}`}
          src={item.featured_image.medium}
         
        />
        </figure>
        <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <div className="flex flex-wrap mt-2">
          {item.tags.map((tag) => {
            return (
              <div
                className="badge bg-base-300 border-none text-zinc-600 mr-1 mb-1"
                key={tag}
              >
                {tag}
              </div>
            );
          })}
        </div>
   
  </div>
       
      </motion.div>
    );
  };
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://backend.adnenhamouda.tn/wp-json/wl/v1/posts"
      );
      setProjects(response.data);
      setFiltered(response.data); // Update state with the data
      setLoading(false); // Stop the loading indicator
    } catch (err) {
      setError(err.message); // Set an error message
      setLoading(false); // Stop the loading indicator
    }
  };

  useEffect(() => {
    fetchProjects(); // Call the function to fetch data when the component mounts
  }, []); // Em
  return (
    <div className={`popup ${isMaximized ? "maximized" : ""}`}>
      <div
        className="popup-container"
        style={{
          width: isMaximized ? "100%" : "min(1000px, 90%)",
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
          className={`popup-body ${
            isMaximized ? "prevent-scroll" : ""
          }`}
          style={{
            height: isMaximized ? "90vh" : "70vh",
          }}
        >
          <div className="p-4">
            <h1 className="text-center font-bold text-4xl mb-8">My Projects</h1>
            <Filter Popular={projects} ActiveGenre={ActiveGenre} setfiltered={setFiltered} setActiveGenre={setActiveGenre}/>
            <motion.div
          layout
          className={`gap-2 ${
            isMaximized
              ? "md:columns-3 xl:columns-4 xs:column-2"
              : "md:columns-3 xl:columns-3 xs:column-2"
          } ${loading ? "flex items-center justify-center h-full" : ""}`}
        >
            {loading?(<span className="loading loading-infinity loading-lg"></span>):(<AnimatePresence>
              {filtered.map((item) => (
                <Card key={item.id} setSelected={setSelected} item={item} />
              ))}
              </AnimatePresence>)}
            
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
