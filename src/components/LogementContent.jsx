
import Logements from "../data/logements.json";
import { useParams } from 'react-router-dom'
import NotFound from "../pages/NotFound"
import Collapse from "./Collapse";


function LogementContent(){
const {id} = useParams()
const logement = Logements.find(log => log.id=== id)

if (!logement){
  return (
    <NotFound/>
  )
}
return (
  <article className="card-content">
    <h2 className="card-title">{logement.title}</h2>
    <img src = {logement.pictures[0]} alt={logement.title} className="card-img"/>
    <p className="host-name">{logement.host.name}</p>
    <img src ={logement.host.picture} alt={logement.host.name} className="host-img"/>


    <div className="card-rating">
      {[1,2,3,4,5].map((star) => (
      <span key={star}>
       {star <= logement.rating ? "★" : "☆"}
       </span>
      ))}</div>


    <p className="card-location">{logement.location}</p>

      <div className="card-tags">
        {logement.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div> 

       <Collapse title ="Description"> 
         <p className="card-info">{logement.description}</p>
       </Collapse>

       <Collapse title ="Équipements"> 
          <ul className="card-equipment">
           {logement.equipments.map((item, index) => (
          <li key={index}>{item}</li>
           ))}
          </ul>
       </Collapse>
  </article>
  );
  }

 
 export default LogementContent;