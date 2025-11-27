import { Linkedin, Instagram, Twitter, Github, Mail, Rss } from "lucide-react";
import profileImg from "../assets/img/okuma.jpeg"; // adjust path to your asset
import { WorkExperience } from "../components/Sections/WorkExperience ";
import { Footer } from "../components/Layout/Footer";

export const About = () => {
  
  return (
    <section id="about">
      <WorkExperience/>
      <div className="text-center py-10">
            <p className="text-[#F9B233] font-semibold">— About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              <span className="text-[#F9B233] italic">Let's get to</span> know each other.
            </h2>
          </div>
      <div className="max-w-7xl mx-auto py-3 px-3 flex flex-col lg:flex-row items-center gap-12">
  {/* Left – Image */}
  <div className="lg:w-1/2 flex justify-center">
    <img
  src={profileImg}
  alt="Ifechukwu Okuma"
  className="rounded-2xl max-w-[350px] w-full object-cover"
/>
  </div>

  {/* Right – Content */}
  <div className="lg:w-1/2 space-y-6">
<h2 className="text-black text-left font-extrabold text-3xl md:text-4xl">I’m Ifechukwu Okuma</h2>
    <p className="text-black leading-relaxed md:text-left">
      A developer focused on <span className="font-semibold text-gray-900"> building practical, user-ready solutions</span> — from conversion-driven websites to simple digital tools that make life easier.
      <br />
      I also work with <span className="font-semibold text-gray-900">UI/UX design</span> to shape how my projects should feel before I start building them.
      <br />
      Beyond tech, I create through <span className="font-semibold text-gray-900">content, speaking, and writing</span>. Whether it's a project, a story, or a message — I like turning ideas into something people can actually connect with.
    </p>

    {/* Focus Areas Badges */}
    <div className="flex flex-wrap gap-3 mt-4">
      <span className="px-3 py-1 rounded-full border text-gray-800 bg-gray-50">Content Creation</span>
      <span className="px-3 py-1 rounded-full border text-gray-800 bg-gray-50">Public Speaking</span>
      <span className="px-3 py-1 rounded-full border text-gray-800 bg-gray-50">Software Development</span>
      <span className="px-3 py-1 rounded-full border text-gray-800 bg-gray-50">Writing</span>
    </div>

    {/* Social / Connect Section */}
    <div className="mt-8 pt-4 border-t border-gray-200">
      <p className="font-semibold mb-2 text-gray-800">Connect</p>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="https://www.linkedin.com/in/ifechukwuokuma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-[#F9B233] transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
          <span className="text-sm">LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/ifechukwu.okuma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-[#F9B233] transition"
          aria-label="Instagram"
        >
          <Instagram size={20} />
          <span className="text-sm">Instagram</span>
        </a>

        <a
          href="https://github.com/ifechukwuokuma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-[#F9B233] transition"
          aria-label="GitHub"
        >
          <Github size={20} />
          <span className="text-sm">GitHub</span>
        </a>

        <a
          href="mailto:helloifechukwuokuma@gmail.com"
          className="flex items-center gap-2 text-gray-700 hover:text-[#F9B233] transition"
          aria-label="Email"
        >
          <Mail size={20} />
          <span className="text-sm">Email</span>
        </a>

        <a
          href="https://www.x.com/IfechukwuOkuma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-[#F9B233] transition"
          aria-label="Twitter/X"
        >
          <Twitter size={20} />
          <span className="text-sm">X / Twitter</span>
        </a>
        <a
  href="https://ifechukwuokuma.substack.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-700 hover:text-[#F9B233] transition"
  aria-label="Substack"
>
  <Rss size={20} />
  <span className="text-sm">Substack</span>
</a>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </section>
  );
};
