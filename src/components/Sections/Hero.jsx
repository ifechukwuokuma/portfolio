import { useEffect, useState } from "react";
import profileImg from "../../assets/img/okuma.png";
import { Linkedin, Github, Twitter } from "lucide-react";

export const Hero = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-NG", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Lagos",
          hour12: false,
        })
      );
      setDate(
        now.toLocaleDateString("en-NG", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          timeZone: "Africa/Lagos",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="flex items-center justify-center py-5 min-h-[90vh]">
        <div className="max-w-7xl w-full px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* ===== Left: Text ===== */}
            <div className="w-full lg:w-6/12 space-y-5  lg:text-left order-2 lg:order-1">

              {/* Big Name */}
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-black dark:text-white leading-tight tracking-tight">
                Ifechukwu<br />
                <span className="text-[#F9B233]">Okuma.</span>
              </h1>

              {/* Role Tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm px-4 py-1 rounded-sm font-medium tracking-wide" style={{clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"}}>
                  Frontend Developer
                </span>
                <span className="border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm px-4 py-1 rounded-sm font-medium tracking-wide" style={{clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"}}>
                  Technical Writer
                </span>
              </div>

              {/* Bio */}
             <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base">
  I building products with a strong focus on{" "}
  <span className="text-gray-900 dark:text-white font-semibold">user experience</span>, not just how they look, but how they work for real people.
  
  I approach development with a{" "}
  <span className="text-gray-900 dark:text-white font-semibold">UX mindset</span>, thinking through what is being built, why it matters, and how it can be improved.
</p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="/projects"
                  className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#F9B233] dark:hover:bg-[#F9B233] dark:hover:text-white hover:text-white transition font-semibold text-sm shadow-sm"
                >
                  View My Projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition font-semibold text-sm shadow-sm"
                >
                  Resume →
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center lg:justify-start pt-2">
                <a href="https://www.linkedin.com/in/ifechukwuokuma" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#F9B233] transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/ifechukwuokuma" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#F9B233] transition">
                  <Github size={20} />
                </a>
                <a href="https://www.x.com/Ifechukwuokuma" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#F9B233] transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* ===== Right: Photo + Widget ===== */}
            <div className="w-full lg:w-5/12 order-1 lg:order-2 flex flex-col items-center">
              <div className="relative w-full max-w-[420px]">
                <img
                  src={profileImg}
                  alt="Ifechukwu Okuma"
                  loading="lazy"
                  className="rounded-2xl w-full object-cover"
                />

                {/* Location / Time Widget */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 py-3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
                  <div className="text-white text-xs font-mono">
                    <div className="text-lg font-bold">WAT {time}</div>
                    <div className="opacity-70">{date}</div>
                  </div>
                  <div className="text-white text-xs font-medium opacity-80">
                    Based in Lagos, Nigeria
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};