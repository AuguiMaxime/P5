import BackgroundAbout from "../components/assets/Background-about.png";
import '../styles/Banner.scss'

const BannerHome = () => {
  return (
  <div className="banner">
      <img src={BackgroundAbout} alt="Image paysage"/>
    </div>
  );
}
export default BannerHome;