import '../styles/card.scss'

const Card = ({logement}) => {
  return (
  <article className="card">
    <img src = {logement.cover} alt={logement.title} className="card-cover"/>
    <h2 className="card-title">{logement.title}</h2>    
  </article>
  );
 
}

export default Card;