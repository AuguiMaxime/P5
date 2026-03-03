import logoFooter from "./assets/LOGOFooter.png";


const Footer = () => {
  return (
  <div className="footer">
    <img src={logoFooter} alt="Logo" className="logo-footer"/>
    <h2>
     <span className="footer-line1">© 2020 Kasa. All </span> 
     <span className="footer-line2">rights reserved</span>
     </h2>
  </div>
  );
}
export default Footer;