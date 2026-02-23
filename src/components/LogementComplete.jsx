
const LogementComplete = ({logement}) => {
  return (
  <article className="card">
    <img src = {logement.cover} alt={logement.title} className="card-cover"/>
    <h2 className="card-title">{logement.title}</h2>
    <img src = {logement.pictures[0]} alt={logement.title} className="card-img"/>
    <p className="card-info">{logement.description}</p>
    <p className="host-name">{logement.host.name}</p>
    <img src ={logement.host.picture} alt={logement.host.name} className="host-img"/>
    <p className="card-rating">{logement.rating}</p>
    <p className="card-location">{logement.location}</p>
    <p className="card-equipment">{logement.equipements}</p>
    <p className="card-tags">{logement.tags}</p> 
  </article>
  );
 
}

export default LogementComplete;