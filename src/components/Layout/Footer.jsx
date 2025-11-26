import { Linkedin, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left items-center">
        {/* Left: Tagline */}
        <div>
          <p className="font-semibold text-gray-800 mb-1 leading-snug">
            Code with taste,
            <br />
            compiled with a couple cup of coffee.
          </p>
          <small className="text-gray-500">
            © Ifechukwu Okuma, 2025. All rights reserved.
          </small>
        </div>

        {/* Center: Contact */}
        <div>
          <p className="font-semibold text-gray-800 mb-1">Let's discuss</p>
          <a
            href="mailto:helloifechukwuokuma@gmail.com"
            className="text-gray-700 hover:text-[#F9B233] transition"
          >
            helloifechukwuokuma@gmail.com
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <a
            href="https://www.linkedin.com/in/ifechukwuokuma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#F9B233] transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/ifechukwuokuma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#F9B233] transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.x.com/Ifechukwuokuma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#F9B233] transition"
            aria-label="Twitter/X"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
