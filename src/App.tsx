import Header from "./components/Header";
import FABGroup from "./components/FABGroup";

import HeroSection from "./sections/HeroSection";
import SpecialtiesSection from "./sections/SpecialtiesSection";
import AboutMeSection from "./sections/AboutMeSection";
import ReviewSection from "./sections/ReviewSection";
import LocationSection from "./sections/LocationSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <div className="relative">
      <FABGroup />

      <Header />

      <main role="main" className="p-4 z-[-1]">
        <HeroSection />
        <SpecialtiesSection />
        <AboutMeSection />
        <ReviewSection />
        <LocationSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
