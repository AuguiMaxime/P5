import {Link} from "react-router-dom";

 function Notfound () {
  return (
    <div className="error">
      <h3>404</h3>
      <p>
        <span className="line1">Oups! La page que </span>
        <span className="line2">vous demandez n'éxiste pas.</span>
        </p>
      <Link to="/" className="nav-link">Retourner sur la page d'accueil</Link>
    </div>
 )
}
 
export default Notfound;
