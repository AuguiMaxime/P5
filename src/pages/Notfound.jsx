import {Link} from "react-router-dom";

 function Notfound () {
  return (
    <div className="error">
      <h3>404</h3>
      <p>Oups! La page que vous demandez n'éxiste pas.</p>
      <Link to="/" className="nav-link">Retourner sur la page d'accueil</Link>
    </div>
 )
}
 
export default Notfound;
