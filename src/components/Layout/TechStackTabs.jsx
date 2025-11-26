// src/components/TechStackTabs.jsx
import { useState } from "react";
import {
  Code,
  Server,
  Database,
  Settings,
  Braces,
  GitBranch,
  Terminal,
  Layers,
  Globe,
  FileCode2,
  Palette,
  Cpu,
  Boxes,
} from "lucide-react";

export const TechStackTabs = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend", icon: <Code size={18} /> },
    { id: "backend", label: "Backend", icon: <Server size={18} /> },
    { id: "database", label: "Database", icon: <Database size={18} /> },
    { id: "tools", label: "Frameworks & Tools", icon: <Settings size={18} /> },
  ];

  const content = {
    frontend: [
      { name: "HTML", icon: <FileCode2 size={26} /> },
      { name: "CSS", icon: <Palette size={26} /> },
      { name: "JavaScript", icon: <Braces size={26} /> },
      { name: "React", icon: <Layers size={26} /> },
    ],
    backend: [
      { name: "Node.js", icon: <Server size={26} /> },
      { name: "PHP", icon: <Code size={26} /> },
      { name: "Python", icon: <Terminal size={26} /> },
    ],
    database: [
      { name: "MySQL", icon: <Database size={26} /> },
      { name: "Firebase", icon: <Boxes size={26} /> },
    ],
    tools: [
      { name: "Git", icon: <GitBranch size={26} /> },
      { name: "GitHub", icon: <Globe size={26} /> },
      { name: "VS Code", icon: <FileCode2 size={26} /> },
      { name: "Tailwind CSS", icon: <Palette size={26} /> },
    ],
  };

  return (
    <section className="py-13 text-center" id="techstack">
      {/* Section Title */}
      <div className="mb-8">
        <p className="text-[#F9B233] font-semibold">— My Favorite Tools</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Exploring the Tools <br />
          <span className="text-[#F9B233] italic">Behind My Work</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium border transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#F9B233] text-black border-[#F9B233]"
                : "border-gray-300 text-gray-600 hover:bg-[#F9B233]/10"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <div className="flex flex-wrap justify-center gap-2 mb-z">
        {content[activeTab].map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 shadow rounded-2xl py-4 px-4 w-32 hover:scale-105 transition-transform"
          >
            <div className="p-3 bg-[#F9B233]/10 rounded-full mb-2">
              {tool.icon}
            </div>
            <p className="font-semibold text-black text-sm">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
