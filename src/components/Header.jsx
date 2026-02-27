import logo from "./assets/LOGOHeader.png";
import { Link } from 'react-router-dom'


const Header = () => {
  return (
  <div className="header">
    <img className="logo" src={logo} alt="Logo"/>
    <nav className="nav">
      <Link to="/" className="nav-link">Accueil</Link>
      <Link to="/about" className="nav-link">A propos</Link>
    </nav>
  </div>
  );
 
}

export default Header;