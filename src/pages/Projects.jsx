import { useEffect, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { fetchGitHubProjects } from "../components/Data/projects";
import { Footer } from "../components/Sections/Footer";

const isInProgress = (pushedAt) => {
  const daysSince = (Date.now() - new Date(pushedAt)) / (1000 * 60 * 60 * 24);
  return daysSince <= 7;
};

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchGitHubProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const SkeletonLoader = () => (
    <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-300"></div>
      <div className="p-6 text-left">
        <div className="w-1/3 h-6 bg-gray-300 mb-4"></div>
        <div className="w-full h-4 bg-gray-300 mb-4"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="w-24 h-8 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16" id="projects">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#F9B233] font-semibold">— Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              <span className="text-[#F9B233] italic">Latest</span> Projects
            </h2>
          </div>
          <a
            href="https://github.com/ifechukwuokuma?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#F9B233] hover:text-black transition"
          >
            <Github size={18} />
            View GitHub
          </a>
        </div>
      </div>

      {/* Project Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              {loading ? (
                <>
                  <SkeletonLoader />
                  <SkeletonLoader />
                </>
              ) : (
                projects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => setSelected(proj)}
                    className="bg-gray-50 dark:bg-[#22242a] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer group"
                  >
                    <div className="relative">
                      <img
                        src={proj.thumbnail}
                        alt={proj.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 px-4 py-2 rounded-full">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="p-6 text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-semibold text-black dark:text-white">{proj.name}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            isInProgress(proj.status)
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {isInProgress(proj.status) ? "In Progress" : "Live"}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{proj.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
      
            {/* Modal */}
            {selected && (
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelected(null)}
              >
                <div
                  className="bg-white dark:bg-[#22242a] rounded-2xl shadow-xl w-full max-w-lg overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <img
                      src={selected.thumbnail}
                      alt={selected.name}
                      className="w-full h-52 object-cover"
                    />
                    <button
                      onClick={() => setSelected(null)}
                      className="absolute top-3 right-3 bg-black/60 text-white p-1.5 rounded-full hover:bg-black transition"
                    >
                      <X size={16} />
                    </button>
                  </div>
      
                  <div className="p-6 text-left space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-black dark:text-white">{selected.name}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          isInProgress(selected.status)
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {isInProgress(selected.status) ? "In Progress" : "Live"}
                      </span>
                    </div>
      
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{selected.description}</p>
      
                    {selected.languages.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {selected.languages.map((lang) => (
                          <span
                            key={lang}
                            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    )}
      
                    <div className="flex justify-between items-center pt-2">
                      <a
                        href={selected.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-yellow-600 font-medium hover:underline text-sm"
                      >
                        View Repo <Github size={16} />
                      </a>
                      {selected.liveUrl && (
                        <a
                          href={selected.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-yellow-600 font-medium hover:underline text-sm"
                        >
                          View Project <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

      <Footer />
    </section>
  );
};