import Header from "./components/Header";

import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <div>
      <Header />

      <main role="main" className="p-4">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
