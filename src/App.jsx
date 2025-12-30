
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
<div className="min-h-screen   bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" >
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
