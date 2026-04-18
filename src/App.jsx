import ContactSection from "./components/sections/ContactSection";
import Hero from "./components/sections/Hero";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import SkillsSection from "./components/sections/SkillsSection";
import TechStack from "./components/sections/TechStack";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
