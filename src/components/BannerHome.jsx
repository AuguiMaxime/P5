import background from "./assets/Background-home.png";


const BannerHome = () => {
  return (
  <div className="banner">
    <img src={background} alt="Image paysage"/>
    <div className="overlay"></div>
    <h1>
      <span className="line1">Chez vous, </span> 
      <span className="line2">partout et ailleurs</span>
      </h1>
  </div>
  );
 
}

export default BannerHome;