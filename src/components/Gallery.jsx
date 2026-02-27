import Card from "./Card.jsx";
import Logements from "../data/logements.json";


const Gallery = () => {
  return (
    <div className="gallery">
      {Logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
}

export default Gallery;
