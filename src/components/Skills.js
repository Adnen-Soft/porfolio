// src/components/About.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faWindowMinimize,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
const Skills = ({
  id,
  title,
  description,
  imageUrl,
  onClose,
  onMinimize,
  onMaximize,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const myskills = [
    {
      image: "https://www.svgrepo.com/show/342062/next-js.svg",
      name: "Next.js",
    },
    {
      image: "https://www.svgrepo.com/show/452092/react.svg",
      name: "React.js",
    },
    {
      image: "https://www.svgrepo.com/show/303494/vue-9-logo.svg",
      name: "Vue.js",
    },
    {
     
      image: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg",
      name: "Node.js",
    },
    {
     
      image: " https://www.svgrepo.com/show/353985/laravel.svg",
      name: "Laravel",
    },
    {
     
      image: "https://www.svgrepo.com/show/452088/php.svg",
      name: "PHP",
    },
    {
     
      image: "https://www.svgrepo.com/show/475696/wordpress-color.svg",
      name: "Wordpress",
    },
    {
     
      image: "https://www.svgrepo.com/show/448236/linux.svg",
      name: "Linux",
    },
    {
     
      image: "https://www.svgrepo.com/show/382713/windows-applications.svg",
      name: "Windows server",
    },
  ];
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
          className={`popup-body ${isMaximized ? "prevent-scroll" : ""}`}
          style={{
            height: isMaximized ? "90vh" : "70vh",
          }}
        >
          <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 my-10 gap-6">
            {myskills.map((item) => (
              <div className="card border-2 border-base-content\/20 card-compact transition-all duration-200 hover:shadow hover:-translate-y-1">
                <figure className="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end overflow-visible">
                  <img
                    src={item.image}
                    loading="lazy"
                    height={96}
                    width={96}
                    className="aspect-square w-full h-auto"
                  />
                </figure>
                <div className="card-body text-center">
                  <span class="text-xs">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
