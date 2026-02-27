
import Logements from "../data/logements.json";
import { useParams } from 'react-router-dom'
import NotFound from "../pages/NotFound"
import Collapse from "./Collapse";
import Slideshow from "./Slideshow";


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
    <Slideshow pictures={logement.pictures}/>
    <div className="logement-info">
    <div className="card-loc">
    <h2 className="card-title">{logement.title}</h2>
    <p className="card-location">{logement.location}</p>
    </div>
    

<div className="host-content">
    <p className="host-name">{logement.host.name}</p>
    <img src ={logement.host.picture} alt={logement.host.name} className="host-img"/>
    
</div>
</div>
<div className="card-rating-tags">
      <div className="card-tags">
        {logement.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div> 

      <div className="card-rating">
      {[1,2,3,4,5].map((star) => (
      <span key={star}>
       {star <= logement.rating ? "★" : "☆"}
       </span>
      ))}</div>
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