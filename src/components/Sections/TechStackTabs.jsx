// src/components/TechStackTabs.jsx
import { useState } from "react";
import {
  Code,
  Server,
  Database,
  Settings,
  Braces,
  GitBranch,
  Layers,
  Globe,
  FileCode2,
  Palette,
  Boxes,
  BookOpen,
} from "lucide-react";

export const TechStackTabs = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend", icon: <Code size={18} /> },
    { id: "backend", label: "Backend & Database", icon: <Server size={18} /> },
    { id: "tools", label: "Frameworks & Tools", icon: <Settings size={18} /> },
  ];

  const content = {
    frontend: [
      { name: "HTML", icon: <FileCode2 size={26} /> },
      { name: "CSS", icon: <Palette size={26} /> },
      { name: "JavaScript", icon: <Braces size={26} /> },
      { name: "React", icon: <Layers size={26} /> },
      { name: "TypeScript", icon: <Code size={26} /> },
    ],
    backend: [
      { name: "Supabase", icon: <Database size={26} /> },
      { name: "Sanity", icon: <Boxes size={26} /> },
    ],
    tools: [
      { name: "Git", icon: <GitBranch size={26} /> },
      { name: "GitHub", icon: <Globe size={26} /> },
      { name: "Tailwind CSS", icon: <Palette size={26} /> },
      { name: "Bootstrap CSS", icon: <Layers size={26} /> },
      { name: "Next.js", icon: <BookOpen size={26} />, learning: true },
    ],
  };

  return (
    <section className="py-17 text-center" id="techstack">
      <div className="mb-8">
        <p className="text-[#F9B233] font-semibold">— My Favorite Tools</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Exploring the Tools <br />
          <span className="text-[#F9B233] italic">Behind My Work</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium border transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#F9B233] text-black border-[#F9B233]"
                : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-[#F9B233]/10"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {content[activeTab].map((tool, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center bg-gray-50 dark:bg-[#22242a] shadow rounded-2xl py-4 px-4 w-32 hover:scale-105 transition-transform"
          >
            {tool.learning && (
              <span className="absolute -top-2 -right-2 bg-[#F9B233] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                Learning
              </span>
            )}
            <div className="p-3 bg-[#F9B233]/10B dark:bg-[#000]/10 rounded-full mb-2 dark:text-white">
              {tool.icon}
            </div>
            <p className="font-semibold text-black dark:text-white text-sm">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};