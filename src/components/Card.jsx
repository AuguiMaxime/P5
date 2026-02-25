import '../styles/card.scss'
import { Link } from "react-router-dom";

const Card = ({logement}) => {
  return (
    <Link to={`/logement/${logement.id}`} className="card-link">
  <article className="card">
    <img src = {logement.cover} alt={logement.title} className="card-cover"/>
    <h2 className="card-title">{logement.title}</h2>    
  </article>
  </Link>
  );
 
}

export default Card;