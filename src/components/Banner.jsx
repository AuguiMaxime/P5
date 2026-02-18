import logo from "./assets/LOGOHeader.png";
import '../styles/Banner.css'


const Banner = () => {
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

export default Banner;