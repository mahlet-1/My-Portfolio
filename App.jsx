import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/MySkills";
import Projects from "./components/Projects";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="app">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}