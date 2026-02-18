import background from "./assets/Background.png";
import '../styles/Section1.css'

const Section1 = () => {
  return (
  <div className="section">
    <img src={background} alt="Image paysage"/>
    <h1>Chez vous, partout et ailleurs</h1>
  </div>
  );
 
}

export default Section1;