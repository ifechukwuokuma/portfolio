import { Hero } from "../components/Sections/Hero";
import { ServicesSection } from "../components/Sections/ServicesSection";
import { ProjectsSection } from "../components/Sections/ProjectsSection";
import { TechStackTabs } from "../components/Layout/TechStackTabs";
import { AboutSection } from "../components/Sections/AboutSection";
import { ContactSection } from "../components/Sections/ContactSection";
import { Footer } from "../components/Layout/Footer";



export const Home = () => {
  return (
    <main>
      <Hero/>
      <ServicesSection/>
      <ProjectsSection/>
      <TechStackTabs/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
};
