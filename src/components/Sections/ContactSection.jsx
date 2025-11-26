import { Phone, Mail, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappNumber = "2348024233790"; // same structure you used
    const url = `https://wa.me/${whatsappNumber}?text=Hello,%20my%20name%20is%20${encodeURIComponent(
      name
    )}.%0AEmail:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-16" id="contact">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div>
          <p className="text-[#F9B233] font-semibold">— Contact Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Let’s Talk for{" "}
            <span className="text-[#F9B233] italic">Your Next Projects</span>
          </h2>
          <p className="text-black mb-8">
            Have a project in mind? Share the details below or connect with me
            directly.
          </p>

          <ul className="space-y-5 text-gray-700">
            <li className="flex items-center gap-3">
              <div className="bg-[#F9B233]/20 text-black p-3 rounded-full">
                <Phone size={20} />
              </div>
              <span>+234 802 423 3790</span>
            </li>

            <li className="flex items-center gap-3">
              <div className="bg-[#F9B233]/20 text-black p-3 rounded-full">
                <Mail size={20} />
              </div>
              <span>helloifechukwuokuma@gmail.com</span>
            </li>

            <li className="flex items-center gap-3">
              <div className="bg-[#F9B233]/20 text-black p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Right Column - WhatsApp Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-sm space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F9B233] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F9B233] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Tell me about your project..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F9B233] focus:outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-[#F9B233] hover:text-black transition"
          >
            Submit <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};
