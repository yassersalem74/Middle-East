
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import AboutSection from './components/AboutSection'
import ServiceSection from './components/ServiceSection'
import OurTeamSection from './components/OurTeamSection'
import GetInTouchSection from './components/GetInTouchSection'
import Footer from './components/Footer'

function App() {

  return (
<div className="min-h-screen" style={{
      background: "linear-gradient(135deg, #0F3D2E 0%, #0B1F2A 50%, #0A1B25 100%)",
    }}>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
   <WhyChooseUsSection></WhyChooseUsSection>
   <AboutSection></AboutSection>
   <ServiceSection></ServiceSection>
   <OurTeamSection></OurTeamSection>
   <GetInTouchSection></GetInTouchSection>
   <Footer></Footer>
</div>
  )
}

export default App
