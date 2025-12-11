// src/pages/Services.jsx
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TechStackTabs } from "../components/Layout/TechStackTabs";
import { Footer } from "../components/Layout/Footer";
import { servicesData } from "../components/Data/servicesData"; // ✅ fixed import path
import * as Icons from "lucide-react";
import { ContactSection } from "../components/Sections/ContactSection";

// Helper to render dynamic Lucide icons
const IconComponent = ({ name, color = "#F9B233", size = 22 }) => {
  const LucideIcon = Icons[name];
  return LucideIcon ? <LucideIcon className={`text-[${color}]`} size={size} /> : null;
};

export const Services = () => {
  const { webServices} = servicesData;

  return (
    <main className="text-black">
      {/* Section header */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#F9B233] font-semibold">— Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              <span className="text-[#F9B233] italic">Services</span> I Provide
            </h2>
          </div>

          <a
            href="https://wa.me/2348024233790?text=Hi%20Ifechukwu%2C%20I'm%20coming%20from%20your%20website.%20I%20want%20to%20book%20a%20call%20to%20discuss%20my%20website%20need."
              target="_blank"
              rel="noreferrer"
            className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#F9B233] hover:text-black transition"
          >
            Let Talk
          </a>
        </div>

        {/* Web Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webServices.map((s, i) => (
            <article
              key={i}
              className="bg-[#FBFCFD] rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F9B233]/10 flex items-center justify-center">
                  <IconComponent name={s.icon} />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="text-gray-600 mt-3">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tech stack area */}
      <div className="max-w-7xl mx-auto px-6">
        <TechStackTabs />
      </div>

      
      {/* Projects CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#F8FAFB] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[#F9B233] font-semibold">— Work</p>
            <h3 className="text-2xl font-bold mb-2">
              Selected development work & case studies
            </h3>
            <p className="text-black">
              I focus on product quality, performance and measurable impact.
              Explore a curated set of projects that show how I solve real
              problems for businesses.
            </p>
          </div>
        

          <div>
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-[#F9B233] hover:text-black transition"
            >
              View Projects <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ContactSection */}
      <ContactSection/>

      {/* Footer */}
      <Footer />
    </main>
  );
};
