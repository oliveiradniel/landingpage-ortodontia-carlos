import Header from "./components/Header";

import HeroSection from "./sections/HeroSection";
import SpecialtiesSection from "./sections/SpecialtiesSection";

function App() {
  return (
    <div>
      <Header />

      <main role="main" className="p-4">
        <HeroSection />
        <SpecialtiesSection />
      </main>
    </div>
  );
}

export default App;
