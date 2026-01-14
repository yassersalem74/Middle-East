import HeroSection from "../components/Home-Components/HeroSection";
import SliderImageSection from "../components/Home-Components/SliderImageSection";
import WhyChooseUsSection from "../components/Home-Components/WhyChooseUsSection";
import AboutSection from "../components/Home-Components/AboutSection";
import ServiceSection from "../components/Home-Components/ServiceSection";
import OurTeamSection from "../components/Home-Components/OurTeamSection";
import GetInTouchSection from "../components/Home-Components/GetInTouchSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SliderImageSection></SliderImageSection>
      <WhyChooseUsSection />
      <AboutSection />
      <ServiceSection />
      <OurTeamSection />
      <GetInTouchSection />
    </main>
  );
}
