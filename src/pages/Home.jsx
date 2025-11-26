import { Footer } from "../components/Layout/Footer";
import { TechStackTabs } from "../components/Layout/TechStackTabs";
import { AboutSection } from "../components/Sections/AboutSection";
import { ContactSection } from "../components/Sections/ContactSection";
import { Hero } from "../components/Sections/Hero";
import { ProjectsSection } from "../components/Sections/ProjectsSection";
import { ServicesSection } from "../components/Sections/ServicesSection";


export const Home = () => {
  return (
    <main>
      <Hero/>
      <ServicesSection/>
      <AboutSection/>
      <TechStackTabs/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
};
