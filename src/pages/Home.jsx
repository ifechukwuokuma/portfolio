import { Hero } from "../components/Sections/Hero";
import { ServicesSection } from "../components/Sections/ServicesSection";
import { ProjectsSection } from "../components/Sections/ProjectsSection";
import { TechStackTabs } from "../components/Sections/TechStackTabs";
import { AboutSection } from "../components/Sections/AboutSection";
import { ContactSection } from "../components/Sections/ContactSection";
import { Footer } from "../components/Sections/Footer";



export const Home = () => {
  return (
    <main>
      <Hero/>
      <TechStackTabs/>
      <ProjectsSection/>
      <Footer/>
    </main>
  );
};
