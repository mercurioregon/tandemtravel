import './homepage.css';
import { Container } from "react-bootstrap"
import HeroImg from './Page Components/HeroImg';
import InfoCards from './Page Components/info-section';
import Footer from './Page Components/footerSection';


export default function Homepage() {
  return (
    
    <div className="hero">
        <HeroImg />
        <InfoCards />
        <Footer />
    </div>
  )
}
