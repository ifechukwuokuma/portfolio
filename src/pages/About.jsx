import { Linkedin, Twitter, Github } from "lucide-react";
import profileImg from "../assets/img/okuma.png";
import { Footer } from "../components/Sections/Footer";

export const About = () => {
  return (
    <section className="py-10 min-h-screen" id="about">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left – Image with Offset Frame Aesthetic */}
          <div className="lg:w-5/12 relative group">
            {/* The decorative "wireframe" backgrounds from the reference image */}
            <div className="absolute -inset-4 border border-[#F9B233]/30 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="absolute -inset-4 border border-gray-200 dark:border-gray-800 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <img
                src={profileImg}
                alt="Ifechukwu Okuma"
                className="rounded-xl w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition duration-700 shadow-2xl"
              />
              
              {/* Floating Stat Box like in image (4).jpg */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-xl">
                <p className="text-[#F9B233] text-3xl font-bold leading-none">2026</p>
                <p className="text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-widest mt-1 font-semibold">CS Candidate • UI</p>
              </div>
            </div>
          </div>

          {/* Right – Content Area */}
          <div className="lg:w-7/12 space-y-8">
  <div className="space-y-2">
    <p className="text-[#F9B233] font-medium tracking-[0.2em] uppercase text-sm">— About Me</p>
    <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
      I turn ideas into <span className="text-[#F9B233] italic">interfaces</span> that people actually enjoy.
    </h2>
  </div>

  <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
    <p>
      I’m a <span className="font-medium text-gray-900 dark:text-white">Frontend Developer</span> and Computer Science student. I focus on building practical, user-ready solutions, from conversion-driven websites to simple digital tools that make everyday tasks easier.
    </p>
    
    <p>
      I work with <span className="text-gray-900 dark:text-white underline decoration-[#F9B233] decoration-2 underline-offset-4">UI/UX design</span> to shape how my projects should feel before I start building, ensuring that what I create is not just functional, but intuitive and easy to use.
    </p>

    <p>
      Beyond development, I create through content, speaking, and writing. Whether it is a product, an idea, or a message, I focus on turning it into something people can understand and connect with.
    </p>
  </div>

  {/* Focus Areas Badges */}
  <div className="flex flex-wrap gap-2">
    {["Software Architecture", "UI/UX Design", "Technical Writing", "SaaS Development"].map((skill) => (
      <span key={skill} className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/50">
        {skill}
      </span>
    ))}
  </div>
</div>



        </div>
      </div>
      <Footer />
    </section>
  );
};