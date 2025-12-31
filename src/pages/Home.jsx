import HeroSection from "../components/Home-Components/HeroSection";
import WhyChooseUsSection from "../components/Home-Components/WhyChooseUsSection";
import AboutSection from "../components/Home-Components/AboutSection";
import ServiceSection from "../components/Home-Components/ServiceSection";
import OurTeamSection from "../components/Home-Components/OurTeamSection";
import GetInTouchSection from "../components/Home-Components/GetInTouchSection";
export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      <AboutSection></AboutSection>
      <ServiceSection></ServiceSection>
      <OurTeamSection></OurTeamSection>
      <GetInTouchSection></GetInTouchSection>
    </div>
  );
}
