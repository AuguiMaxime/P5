import background from "./assets/Background-home.png";
import '../styles/Banner.scss'

const BannerHome = () => {
  return (
  <div className="banner">
    <img src={background} alt="Image paysage"/>
    <h1>Chez vous, partout et ailleurs</h1>
  </div>
  );
 
}

export default BannerHome;