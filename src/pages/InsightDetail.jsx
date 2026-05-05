import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../components/Sections/Footer";

const posts = [
  {
    id: 1,
    slug: "how-to-create-custom-404-page-nextjs",
    title: "How To Create A Custom 404 Page In Next.js App Router",
    category: "Technical",
    cover: "https://placehold.co/1200x600/111/fff?text=404",
    author: "Ifechukwu Okuma",
    date: "January 6, 2026",
    readTime: "3 mins read",
    content: `
      A custom 404 page improves user experience by giving visitors a clear, branded message when they land on a page that doesn't exist.
      In Next.js App Router, creating one is straightforward. You simply create a not-found.jsx file inside your app directory.
      This file is automatically used by Next.js whenever a route is not found, no extra configuration needed.
      You can style it however you want — add a button to go back home, your logo, or even an animation.
      The key is making sure the user doesn't feel lost, and knows exactly what to do next.
    `,
  },
  {
    id: 2,
    slug: "introduction-to-react-core-concepts",
    title: "Introduction To React And Its Core Concepts",
    category: "Technical",
    cover: "https://placehold.co/1200x600/111/fff?text=React",
    author: "Ifechukwu Okuma",
    date: "January 6, 2026",
    readTime: "5 mins read",
    content: `
      React is a JavaScript library for building user interfaces. It was built by Meta and has become one of the most popular frontend tools in the world.
      At its core, React is about components — small, reusable pieces of UI that you compose together to build complex interfaces.
      React also introduced the concept of a virtual DOM, which makes updates faster by only re-rendering what actually changed.
      Understanding props, state, and hooks like useState and useEffect will take you a long way as a React developer.
    `,
  },
  {
    id: 3,
    slug: "how-to-install-tailwind-css-html",
    title: "How To Install Tailwind CSS In HTML",
    category: "Technical",
    cover: "https://placehold.co/1200x600/111/fff?text=Tailwind",
    author: "Ifechukwu Okuma",
    date: "January 6, 2026",
    readTime: "2 mins read",
    content: `
      Tailwind CSS is a utility-first CSS framework that lets you style directly in your HTML using class names.
      To install it in a plain HTML project, the quickest way is to use the CDN link in your HTML head tag.
      For production projects, you'll want to install it via npm and configure a tailwind.config file.
      Once set up, you can use classes like flex, text-center, bg-yellow-400, and hundreds more to build any design.
    `,
  },
  {
    id: 4,
    slug: "my-uiux-internship-experience",
    title: "My UI/UX Internship Experience",
    category: "Career",
    cover: "https://placehold.co/1200x600/111/fff?text=UX",
    author: "Ifechukwu Okuma",
    date: "August 24, 2024",
    readTime: "7 mins read",
    content: `
      My UI/UX internship was one of the most valuable experiences I've had as a developer.
      Working with a real design team taught me how to think about users first, not just code.
      I learned how to use Figma properly, how to conduct simple user research, and how to present design decisions clearly.
      The biggest lesson? Design and development are not separate — the best frontend developers understand both.
    `,
  },
  {
    id: 5,
    slug: "5-lessons-i-learnt-in-2023",
    title: "5 Lessons I Learnt In 2023",
    category: "Life",
    cover: "https://placehold.co/1200x600/111/fff?text=Lessons",
    author: "Ifechukwu Okuma",
    date: "December 15, 2023",
    readTime: "6 mins read",
    content: `
      2023 was a year of growth, mistakes, and clarity. Here are five things it taught me.
      First — consistency beats intensity. Showing up every day matters more than working hard once in a while.
      Second — learning in public accelerates your growth. Don't wait until you're an expert to share what you know.
      Third — rest is productive. Burnout is real, and protecting your energy is part of the work.
      Fourth — the people around you shape your trajectory more than any course or book.
      Fifth — done is better than perfect. Ship it, learn, iterate.
    `,
  },
  {
    id: 6,
    slug: "how-i-made-my-first-150-dollars",
    title: "How I Made My First $150 Dollars From Freelancing",
    category: "Career",
    cover: "https://placehold.co/1200x600/111/fff?text=Money",
    author: "Ifechukwu Okuma",
    date: "April 19, 2023",
    readTime: "6 mins read",
    content: `
      Making my first money from coding felt surreal. It wasn't a big amount, but it proved something important — this skill has value.
      I found my first client through a WhatsApp group. They needed a simple landing page for their business.
      I quoted ₦20,000, they agreed, and I delivered in three days. That was my proof of concept.
      The lessons: start with your network, underpromise and overdeliver, and always get something in writing.
    `,
  },
];

export const InsightDetail = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const suggested = posts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Post not found</h2>
        <Link to="/insights" className="text-[#F9B233] hover:underline">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">

        {/* Back */}
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#F9B233] transition text-sm mb-6"
        >
          <ArrowLeft size={16} />
          Back to Insights
        </Link>

        {/* Category */}
        <div className="mb-4">
          <span className="inline-block bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
          {post.author} · {post.date} · {post.readTime}
        </p>

        {/* Cover Image */}
        <img
          src={post.cover}
          alt={post.title}
          className="w-full rounded-2xl mb-10 object-cover max-h-[420px]"
        />

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
          {post.content.trim().split("\n").filter(Boolean).map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-200 dark:border-gray-700" />

        {/* Suggested Posts */}
        <div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-6">Suggested Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggested.map((s) => (
              <Link
                key={s.id}
                to={`/insights/${s.slug}`}
                className="group block rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={s.cover}
                    alt={s.title}
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {s.category}
                  </span>
                </div>
                <div className="pt-3 text-left">
                  <h4 className="text-black dark:text-white font-bold text-sm mb-1 line-clamp-2 group-hover:text-[#F9B233] transition">
                    {s.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {s.author} - {s.date} - {s.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </section>
  );
};