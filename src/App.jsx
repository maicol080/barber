import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import useScrollAnimation from "./useScrollAnimation";

import "./App.css";


function App() {

  useScrollAnimation();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Gallery />
        <Team />
        <Reviews />
        <Contact />
      </main>
    </>
  )
}

export default App;