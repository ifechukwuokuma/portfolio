import { Hero } from "../components/Sections/Hero";
import { ProjectsSection } from "../components/Sections/ProjectsSection";
import { TechStackTabs } from "../components/Sections/TechStackTabs";
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
