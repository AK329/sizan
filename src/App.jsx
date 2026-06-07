import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeDScene from "./components/ThreeDScene";

function App() {
  return (
    <div className="relative min-h-screen bg-[#03001C] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <ThreeDScene />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
