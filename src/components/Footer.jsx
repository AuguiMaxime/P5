import logoFooter from "./assets/LOGOFooter.png";


const Footer = () => {
  return (
  <div className="footer">
    <img src={logoFooter} alt="Logo" className="logo-footer"/>
    <p>© 2020 Kasa. All rights reserved</p>
  </div>
  );
}
export default Footer;