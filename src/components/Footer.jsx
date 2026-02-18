import logoFooter from "./assets/LOGOFooter.png";
import '../styles/Footer.css'

const Footer = () => {
  return (
  <div className="footer">
    <img src={logoFooter} alt="Logo"/>
    <p>© 2020 Kasa. All rights reserved</p>
  </div>
  );
 
}

export default Footer;