import { Linkedin, Instagram, Twitter, Github, Mail } from "lucide-react";
import profileImg from "../assets/img/okuma.jpeg"; // adjust path to your asset

export const About = () => {
  // const awards = [
  //   { year: 2023, title: "Outstanding Developer Award – Nigeria" },
  //   { year: 2022, title: "Best Personal Branding Speaker – Tech Forum" },
  //   { year: 2021, title: "Top 10 Emerging Developers – Africa" },
  // ];

  return (
    <section className="py-16" id="about">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left – Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Ifechukwu Okuma"
            className="rounded-2xl max-w-[300px] w-full object-cover"
          />
        </div>

        {/* Right – Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="md:text-left">
            <p className="text-[#F9B233] font-semibold text-center">— About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              <span className="text-[#F9B233] italic">Let's get to</span> know each other
            </h2>
          </div>

          <p className="text-black leading-relaxed">
            I’m <span className="font-semibold text-gray-900">Ifechukwu Okuma</span>, a developer with a focus on{" "}
            <span className="font-semibold text-gray-900">building practical solutions</span>{" "}
            — from conversion-driven websites to simple tools that solve real problems.
            <br />
            I also have some knowledge of{" "}
            <span className="font-semibold text-gray-900">UI/UX design</span>, 
            which helps me visualize how my projects should look and feel before I start coding.
            <br />
            <br />
            Beyond that, I’m passionate about content creation, speaking, software development, and writing. 
            I love sharing ideas through{" "}
            <span className="font-semibold text-gray-900">design, words, and code</span> — 
            whether it’s <span className="font-semibold text-gray-900">a project, a story, or a message that inspires someone.</span>
            <br />
            <br />
            For me, all these hobbies connect. They’re just different ways of expressing, telling stories, and creating impact.
          </p>

          {/* Focus Areas Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 rounded-full border text-gray-800 bg-gray-50">
              Content Creation
            </span>
            <span className="px-3 py-1 rounded-full border text-gray-800 bg-gray-50">
              Public Speaking
            </span>
            <span className="px-3 py-1 rounded-full border text-gray-800 bg-gray-50">
              Software Development
            </span>
            <span className="px-3 py-1 rounded-full border text-gray-800 bg-gray-50">
              Writing
            </span>
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
                href="https://www.instagram.com/ifechukwuokuma"
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
            </div>
          </div>
        </div>
      </div>

      {/* Achievements / Awards Section 
      <div className="mt-16 max-w-7xl mx-auto px-6">
        <p className="text-sm text-[#F9B233] mb-2">— My Award-Winning Journey</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[#203B2E] mb-6">
          Recognitions & Milestones
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl font-semibold text-[#F9B233] mb-2">
                {award.year}
              </div>
              <p className="text-gray-700 font-medium">{award.title}</p>
            </div>
          ))}
        </div>
      </div>*/}
    </section>
  );
};
