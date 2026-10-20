import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import EngineeringApproach from "./components/EngineeringApproach";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-dark-base text-editorial-primary selection:bg-accent-violet/30 selection:text-white relative">
      <Header />
      <main id="main-content" className="overflow-x-hidden">
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <EngineeringApproach />
        <Contact />
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;
