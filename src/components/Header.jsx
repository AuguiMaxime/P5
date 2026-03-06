import logo from "./assets/LOGOHeader.png";
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
  <div className="header">
    <img className="logo" src={logo} alt="Logo"/>
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"}>
              Accueil
              </NavLink>
      <NavLink to="/about" className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"}>
              A propos
              </NavLink>
    </nav>
  </div>
  );
 
}

export default Header;