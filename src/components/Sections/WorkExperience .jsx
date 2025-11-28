import { useState } from "react";
import * as Icons from "lucide-react";
import { workData } from "../Data/workData"; // update path if needed

const IconComponent = ({ name, size = 20, color = "#F9B233" }) => {
  const LucideIcon = Icons[name];
  return LucideIcon ? <LucideIcon size={size} className={`text-[${color}]`} /> : null;
};

export const WorkExperience = () => {
  const [selected, setSelected] = useState(0);

  const experiences = workData;

  return (
    <section className="py-3 px-3 md:px-12 lg:px-20 text-black">
<div className="text-center md:text-left py-10">
            <p className="text-[#F9B233] font-semibold">— Work Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              <span className="text-[#F9B233] italic">Here's my professional</span> journey so far.
            </h2>
          </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Role List */}
        <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-1/3 overflow-x-auto lg:overflow-visible">
  {experiences.map((exp, index) => (
    <button
      key={index}
      onClick={() => setSelected(index)}
      className={`flex-shrink-0 text-left px-4 py-3 rounded-md border font-medium transition-colors ${
        selected === index
          ? "bg-[#F9B233] text-black border-[#F9B233]" // selected: gold bg
          : "bg-transparent border-gray-700 text-gray-500 hover:border-[#F9B233] hover:text-[#F9B233]" // unselected
      }`}
    >
      <p className="font-semibold">{exp.title}</p>
      <p className={`text-sm ${selected === index ? "text-white" : "text-gray-400"}`}>
        {exp.company}
      </p>
    </button>
  ))}
</div>


        {/* Right Column: Details */}
        <div className="flex-1 bg-black p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-[#F9B233]">
                {experiences[selected].title}
              </h3>
              <p className="text-gray-400">{experiences[selected].company}</p>
            </div>
            <span className="text-gray-400">{experiences[selected].duration}</span>
          </div>

          <div className="mb-4">
            <h4 className="flex font-semibold text-[#F9B233] mb-2">Details:</h4>
            <ul className="gird text-start text-gray-300">
              {experiences[selected].details.map((detail, i) => (
                <li className="flex" key={i}>• {detail}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="flex font-semibold text-[#F9B233] mb-2">Projects:</h4>
            <div className="flex gap-2 flex-wrap">
              {experiences[selected].projects.map((proj, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                >
                  {proj}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex font-semibold text-[#F9B233] mb-2">Technologies:</h4>
            <div className="flex gap-3 flex-wrap">
              {experiences[selected].technologies.map((tech, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-2 rounded-md flex items-center gap-2"
                >
                  <IconComponent name={tech.icon} />
                  <p className="text-sm text-white">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
