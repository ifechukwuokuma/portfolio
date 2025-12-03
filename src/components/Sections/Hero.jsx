import "../../assets/Home.css";
import profileImg from "../../assets/img/okuma.jpeg";
import {
  Linkedin,
  Github,
  Twitter,
  Briefcase,
  CalendarCheck,
} from "lucide-react";

export const Hero = () => {
  return (
    <main>
 <section className="home-section flex items-center justify-center py-6 md:py-10">
  <div className="max-w-7xl w-full px-6 mx-auto">
    <div className="
      flex flex-col 
      lg:flex-row 
      items-center 
      justify-between 
      gap-6
    ">
        {/* ===== Social Icons (Left - Laptop only) ===== */}
        <div
          className="
            hidden lg:flex
            flex-col
            justify-center 
            items-center 
            gap-4 
            order-1
          "
        >
          <a
            href="https://www.linkedin.com/in/ifechukwuokuma"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="social-icons hover:text-[#0A66C2]" />
          </a>
          <a
  href="https://github.com/ifechukwuokuma"
  target="_blank"
  rel="noreferrer"
>
  <Github className="social-icons hover:text-gray-900" />
</a>
          <a
            href="https://www.x.com/Ifechukwuokuma"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="social-icons hover:text-[#1DA1F2]" />
          </a>
        </div>

        {/* ===== Text Section (Middle) ===== */}
       <div className="w-full lg:w-6/12 order-2 space-y-2 text-center lg:text-left">

          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-[#F9B233]/20 text-black font-medium px-4 py-1 rounded-full border border-[#F9B233] mx-auto lg:mx-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#F9B233]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            </svg>
            Hello There!
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            I’m <span className="text-[#F9B233]">Ifechukwu Okuma</span>,
            <br />
            Web & Software Developer.
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 max-w-lg mx-auto items-center">
            I help businesses stand out online with{" "}
            <span className="font-semibold text-gray-800">
              custom-coded websites
            </span>{" "}
            that are fast, responsive, and{" "}
            <span className="font-semibold text-gray-800">
              built to convert
            </span>
            . With a strong foundation in{" "}
            <span className="font-semibold text-gray-800">UI/UX</span>, I turn
            designs into clean and maintainable code that{" "}
            <span className="font-semibold text-gray-800">
              reflect your brand
            </span>{" "}
            and give customers a smooth experience.
          </p>

          {/* Action Buttons */}
         <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-3">

            <a
              href="/projects"
              className="bg-black text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#F9B233] hover:text-white transition shadow-sm"
            >
              <Briefcase size={18} />
              View My Projects
            </a>

            <a
              href="https://wa.me/2348024233790?text=Hi%20Ifechukwu%2C%20I'm%20coming%20from%20your%20website.%20I%20want%20to%20book%20a%20call%20to%20discuss%20my%20website%20need."
              target="_blank"
              rel="noreferrer"
              className="border border-black text-black px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition shadow-sm"
            >
              <CalendarCheck size={18} />
              Hire Me
            </a>
          </div>
        </div>

        {/* ===== Profile Image (Right) ===== */}
        <div
          className="
            order-3 
            flex 
            flex-col 
            items-center 
            w-full lg:w-4/12
          "
        >
          <img
            src={profileImg}
            alt="Ifechukwu Okuma's Profile Picture"
            loading="lazy"
            className="rounded-2xl max-w-[300px] mx-auto"
          />
          {/* Social Icons */} 
          <div className=" lg:hidden flex justify-center items-center gap-2 mt-4 order-3 md:order-3 :vertical lg:order-1 flex-row lg:flex-col " > 
            <a href="https://www.linkedin.com/in/ifechukwuokuma" target="_blank" rel="noreferrer" > <Linkedin className="social-icons hover:text-[#0A66C2]" /> </a> 
          <a href="https://github.com/ifechukwuokuma" target="_blank" rel="noreferrer">
  <Github className="social-icons hover:text-gray-900" />
</a>
          <a href="https://www.x.com/Ifechukwuokuma" target="_blank" rel="noreferrer" > <Twitter className="social-icons hover:text-[#1DA1F2]" /> </a> 
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  );
};
