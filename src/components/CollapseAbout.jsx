import React, { useState } from 'react';
import masquer from "./Assets/masquer.png";
import afficher from "./Assets/afficher.png";

const CollapseAbout = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='collapse-content-about'>
            <div className='collapse-header-about'> 
            <h3>{title}</h3>
            <button onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? afficher : masquer} alt={isOpen ? "Afficher le texte" : "Masquer le texte" } />
            </button>
      </div>
      <div className={`collapse-text-about ${isOpen ? "open" : ""}`}>
        <div className='collapse-about-inner'>
                {children}
                </div>
            </div>
        </div>
    )
}
export default CollapseAbout;