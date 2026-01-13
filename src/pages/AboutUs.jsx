import AboutUSHeroSection from "../components/AboutUS-Components/AboutUSHeroSection";
import WhoWeAre from "../components/AboutUS-Components/WhoWeAre";
import OurValueSection from "../components/AboutUS-Components/OurValueSection";
import OurJourney from "../components/AboutUS-Components/OurJourney";
import OurTeamAboutSection from "../components/AboutUS-Components/OurTeamAboutSection";

export default function AboutUs() {
  return (
    <main>
      <AboutUSHeroSection></AboutUSHeroSection>
      <WhoWeAre></WhoWeAre>
      <OurValueSection></OurValueSection>
      <OurJourney></OurJourney>
      <OurTeamAboutSection></OurTeamAboutSection>
    </main>
  );
}
