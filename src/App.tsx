import Header from "./components/Header";

import HeroSection from "./sections/HeroSection";
import SpecialtiesSection from "./sections/SpecialtiesSection";
import AboutMeSection from "./sections/AboutMeSection";

function App() {
  return (
    <div>
      <Header />

      <main role="main" className="p-4">
        <HeroSection />
        <SpecialtiesSection />
        <AboutMeSection />
      </main>
    </div>
  );
}

export default App;
