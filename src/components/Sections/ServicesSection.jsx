// src/components/Sections/ServicesSection.jsx
import { ArrowRight } from "lucide-react";
import { servicesData } from "../Data/servicesData"; // ✅ corrected import path
import * as Icons from "lucide-react";

// Helper for dynamic Lucide icons
const IconComponent = ({ name, color = "#F9B233", size = 22 }) => {
  const LucideIcon = Icons[name];
  return LucideIcon ? <LucideIcon className={`text-[${color}]`} size={size} /> : null;
};

const homeServices = servicesData.webServices.slice(0, 3);

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#F9B233] font-semibold">— Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              <span className="text-[#F9B233] italic">Services</span> I Provide
            </h2>
          </div>

          <a
            href="/services"
            className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#F9B233] hover:text-[#203B2E] transition"
          >
            View All Services <ArrowRight size={18} />
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {homeServices.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#F9B233]/10 flex items-center justify-center rounded-full">
                  <IconComponent name={service.icon} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
