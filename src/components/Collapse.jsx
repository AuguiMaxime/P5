import React, { useState } from 'react';
import masquer from "./Assets/masquer.png";
import afficher from "./Assets/afficher.png";

const Collapse = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='collapse-content'>
            <div className='collapse-header'> 
            <h3>{title}</h3>
            <button onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? afficher : masquer} alt={isOpen ? "Afficher le texte" : "Masquer le texte" } />
            </button>
      </div>

      {isOpen && <p className='collapse-text'>{children}</p>}

        </div>
    )
}
export default Collapse;