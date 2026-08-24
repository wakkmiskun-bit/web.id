import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ProjectEstimator from "./components/ProjectEstimator";
import Workflow from "./components/Workflow";
import TechMatrix from "./components/TechMatrix";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import FaqSection from "./components/FaqSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CTAFooter from "./components/CTAFooter";
import Background3D from "./components/Background3D";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-950 text-slate-100 selection:bg-accent-indigo/40 selection:text-white relative overflow-x-hidden">
      {/* Dynamic 3D Particle Constellation Background Canvas */}
      <Background3D />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <ProjectEstimator />
        <Workflow />
        <TechMatrix />
        <Pricing />
        <Testimonials />
        <Team />
        <FaqSection />
      </main>

      {/* Footer & Floating Triggers */}
      <CTAFooter />
      <FloatingWhatsApp />
    </div>
  );
}
