import './homepage.css';
import InfoCards from './PageComponents/HomepageComponents/info-section';
import Footer from './PageComponents/HomepageComponents/footerSection';


export default function Homepage() {
  return (
    
    <div className="hero">
        <InfoCards />
        <Footer />
    </div>
  )
}
