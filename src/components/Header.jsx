import logo from "./assets/LOGOHeader.png";
import '../styles/Header.scss'


const Header = () => {
  return (
  <div className="header">
    <img src={logo} alt="Logo"/>
    <ul>
      <li>Accueil</li>
      <li>A propos</li>
    </ul>
  </div>
  );
 
}

export default Header;