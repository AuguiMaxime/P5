import LogementComplete from "./LogementComplete.jsx";
import Logements from "../data/logements.json";


const LogementContent = ()=>{
  return (
    <div className="logement-content">
      {Logements.map((logement) => (
        <LogementComplete key={logement.id} logement={logement} />
      ))}
    </div>
  );

  }
 export default LogementContent;