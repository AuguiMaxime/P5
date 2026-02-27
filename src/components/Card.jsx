
import { Link } from "react-router-dom";

const Card = ({logement}) => {
  return (
    
  <article className="card">
    <Link to={`/logement/${logement.id}`} className="card-link">
    <img src = {logement.cover} alt={logement.title} className="card-cover"/>
    <div className="card-overlay"></div>
    <h2 className="card-title">{logement.title}</h2> 
    </Link>   
  </article>
  
  );
 
}

export default Card;