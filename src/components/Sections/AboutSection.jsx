import profileImg from "../../assets/img/okuma.jpeg"; // replace with your image path
import { ArrowRight, Download } from "lucide-react"; // if using lucide-react icons

export const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Side - Image and Tags */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-72 h-72 rounded-full bg-[#F9B233] flex items-center justify-center overflow-hidden">
          <img
            src={profileImg}
            alt="Ifechukwu Okuma"
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>

        {/* Skill Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            "Web Developer",
            "Frontend Developer",
            "Backend Developer",
            "Software Developer",
            "Speaker",
          ].map((tag, index) => (
            <span
              key={index}
              className="bg-[#F9B233] text-black text-sm px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 text-[#F9B233] font-semibold">
          <p className="text-[#F9B233] font-semibold">— About Me</p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Who is <span className="text-[#F9B233]">Ifechukwu Okuma?</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 max-w-lg">
          I’m Ifechukwu Okuma, a developer with a focus on building practical solutions — from conversion-driven websites to simple tools that solve real problems.
I also have some knowledge of UI/UX design, which helps me visualize how my projects should look and function before I start coding. 
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 pt-4">
          <div>
            <h3 className="text-3xl font-bold text-[#F9B233]">20+</h3>
            <p className="text-sm text-gray-300">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#F9B233]">5+</h3>
            <p className="text-sm text-gray-300">Industries Covered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#F9B233]">2+</h3>
            <p className="text-sm text-gray-300">Years of Experience</p>
          </div>
        </div>

        {/* Buttons (opposite sides) */}
        <div className="flex flex-wrap gap-3 items-center">
          <a
  href="/Okuma-Ifechukwu-CV.pdf"
  download
  className="flex items-center gap-2 bg-[#F9B233] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#e8a020] transition-all"
>
  <Download className="h-5 w-5" />
  View Resumé
</a>

<a
  href="/about"
  className="flex items-center gap-2 border border-[#F9B233] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#F9B233] hover:text-black transition-all"
>
  More Of Me
  <ArrowRight className="h-5 w-5" />
</a>

        </div>
      </div>
    </section>
  );
};
