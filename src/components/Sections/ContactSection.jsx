import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16 text-center" id="contact">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-[#F9B233] font-semibold">— Contact Me</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Let's Work{" "}
          <span className="text-[#F9B233] italic">Together</span>
        </h2>
        <p className="text-gray-600 mb-10">
          I'm currently open to internship opportunities. If you think I'd be a good fit for your team, I'd love to hear from you.
        </p>

        <ul className="space-y-4 text-gray-700 mb-10">
          <li className="flex items-center justify-center gap-3">
            <div className="bg-[#F9B233]/20 text-black p-3 rounded-full">
              <Mail size={20} />
            </div>
            <span>helloifechukwuokuma@gmail.com</span>
          </li>
          <li className="flex items-center justify-center gap-3">
            <div className="bg-[#F9B233]/20 text-black p-3 rounded-full">
              <MapPin size={20} />
            </div>
            <span>Lagos, Nigeria</span>
          </li>
        </ul>

        <a
          href="mailto:helloifechukwuokuma@gmail.com"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-[#F9B233] hover:text-black transition"
        >
          <Mail size={18} />
          Email Me
        </a>

        <div className="flex justify-center gap-5 mt-10">
          <a href="https://www.linkedin.com/in/ifechukwuokuma" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com/ifechukwuokuma" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition">
            <Github size={22} />
          </a>
          <a href="https://www.x.com/Ifechukwuokuma" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#1DA1F2] transition">
            <Twitter size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};