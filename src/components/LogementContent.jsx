
import Logements from "../data/logements.json";
import Collapse from "./Collapse";
import Slideshow from "./Slideshow";
import { useParams, Navigate } from "react-router-dom"


function LogementContent(){
const {id} = useParams()
const logement = Logements.find(log => log.id=== id)
const nameParts = logement?.host.name.split(" ") || [];
const firstName = nameParts[0];
const lastName = nameParts.slice(1).join(" ");

if (!logement){
  return (
    <Navigate to="/404" />
  )
}
return (
  <article className="card-content">
    <Slideshow pictures={logement.pictures}/>
    
    <div className="logement-info">
    <div className="card-loc">
    <h2 className="card-title">{logement.title}</h2>
    <p className="card-location">{logement.location}</p>
    
      <div className="card-tags">
        {logement.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div> 
    </div>

    
<div className="rating-host">

    <div className="host-content">
    <div className="host-name">
      <span className="first-name"> {firstName} </span>
      <span className="last-name"> {lastName} </span>
    </div>
    <img src ={logement.host.picture} alt={logement.host.name} className="host-img"/>
    
    </div>

      <div className="card-rating">
      {[1,2,3,4,5].map((star) => (
      <span key={star}
       className={star <= logement.rating ? "star active" : "star inactive"}>
      ★</span>
      ))}</div>
</div>

      </div>

<div className="collapses">
       <Collapse title ="Description" > 
         <p className="card-info">{logement.description}</p>
       </Collapse>



       <Collapse title ="Équipements"> 
          <ul className="card-equipment">
           {logement.equipments.map((item, index) => (
          <li key={index}>{item}</li>
           ))}
          </ul>
       </Collapse>
</div>
  </article>
  );
  }

 
 export default LogementContent;