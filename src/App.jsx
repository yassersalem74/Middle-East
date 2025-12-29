
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'

function App() {

  return (
<div className="min-h-screen" style={{
      background: "linear-gradient(135deg, #0F3D2E 0%, #0B1F2A 50%, #0A1B25 100%)",
    }}>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
   <WhyChooseUsSection></WhyChooseUsSection>
</div>
  )
}

export default App
