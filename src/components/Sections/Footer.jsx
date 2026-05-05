import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16" id="contact">
      <div className="pt-10 pb-4">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Heading + Tagline + Copyright */}
          <div>
            <p className="text-[#F9B233] font-semibold mb-2">— Contact Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-black dark:text-white">
              Let's Work{" "}
              <span className="text-[#F9B233] italic">Together</span>
            </h2>
            <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1 leading-snug">
              Code with taste,
              <br />
              compiled with a couple cup of coffee.
            </p>
            <small className="text-gray-500 dark:text-gray-400">
              © Ifechukwu Okuma, 2025. All rights reserved.
            </small>
          </div>

          {/* Right: Email + Location, Button + Socials */}
          <div className="space-y-5">

            {/* Email + Location on same line */}
            <div className="flex flex-wrap items-center gap-6 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#F9B233]" />
                <span className="text-sm">helloifechukwuokuma@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#F9B233]" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Email Me button + Socials on same line */}
            <div className="flex items-center gap-20">
              <a
                href="mailto:helloifechukwuokuma@gmail.com"
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full font-medium hover:bg-[#F9B233] dark:hover:bg-[#F9B233] hover:text-black transition text-sm"
              >
                <Mail size={16} />
                Email Me
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/ifechukwuokuma" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[#F9B233] transition" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/ifechukwuokuma" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[#F9B233] transition" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.x.com/Ifechukwuokuma" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[#F9B233] transition" aria-label="Twitter/X">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};