import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { fetchGitHubProjects } from "../components/Data/projects";
import { Footer } from "../components/Layout/Footer";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for skeleton loader

  useEffect(() => {
    fetchGitHubProjects().then((data) => {
      setProjects(data); // Set all projects without slicing
      setLoading(false); // Set loading to false when data is loaded
    });
  }, []);

  // Skeleton Loader component for projects
  const SkeletonLoader = () => (
    <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-300"></div> {/* Skeleton for image */}
      <div className="p-6 text-left">
        <div className="w-1/3 h-6 bg-gray-300 mb-4"></div> {/* Skeleton for title */}
        <div className="w-full h-4 bg-gray-300 mb-4"></div> {/* Skeleton for description */}
        <div className="flex justify-between items-center mt-4">
          <div className="w-24 h-8 bg-gray-300"></div> {/* Skeleton for buttons */}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16" id="projects">
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Title */}
          <div className="text-center md:text-left">
            <p className="text-[#F9B233] font-semibold">— Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              <span className="text-[#F9B233] italic">Latest</span> Projects
            </h2>
          </div>

          <a
  href="https://github.com/ifechukwuokuma?tab=repositories"
  target="_blank"
  rel="noreferrer"
  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#F9B233] hover:text-black transition"
>
  <Github size={18} />
 View GitHub
</a>

        </div>
      </div>

      {/* Project Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {loading ? (
          // Show skeleton loader while data is loading
          <>
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        ) : (
          // Show actual project data after loading
          projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <img
                src={proj.thumbnail}
                alt={proj.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
                <p className="text-black mb-4">{proj.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-600 font-medium hover:underline"
                  >
                    View Repo <Github size={18} />
                  </a>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-600 font-medium hover:underline"
                  >
                    View Project <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </section>
  );
};
