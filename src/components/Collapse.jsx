import React, { useState } from 'react';
import masquer from "./Assets/masquer.png";
import afficher from "./Assets/afficher.png";

const Collapse = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div> 
            <h3>{title}</h3>
            <button onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? masquer : afficher} alt={isOpen ? "Masquer le texte" : "Afficher le texte"} />
            </button>
      </div>

      {isOpen && <p>{children}</p>}

        </div>
    )
}
export default Collapse;