
import Next from "./assets/suivant.png";
import Previous from "./assets/precedent.png";
import React, { useState } from 'react';




function Slideshow ({pictures}){  
    const [currentIndex, setCurrentIndex] = useState(0);
    if (pictures.length === 1){
        return(
     <div className="slideshow">
        <img src={pictures[0]} alt="slide" />
      </div>
        )
    }
    const nextSlide = () => {
        setCurrentIndex(
        currentIndex === pictures.length -1 ? 0 : currentIndex +1)
    }
     const prevSlide = () => {
        setCurrentIndex(
        currentIndex === 0 ? pictures.length -1 : currentIndex -1)
    }
    
    return (
    <div className="slideshow">
        <img src={pictures[currentIndex]} alt="Image Appartement" className="slideshow-cover"></img>
        <img src={Previous} alt="Précedement" className="previous" onClick={prevSlide}/>
        <img src={Next} alt="Suivant" className="next" onClick={nextSlide}/>
        <p className="slide-count">
        {currentIndex + 1} / {pictures.length}
        </p>

    </div>
)
}

export default Slideshow