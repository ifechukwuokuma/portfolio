import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Sections/Footer";

const categories = ["All", "Technical", "Career", "Life", "Productivity"];

const posts = [
  {
    id: 1,
    slug: "how-to-create-custom-404-page-nextjs",
    title: "How To Create A Custom 404 Page In Next.js App Router",
    category: "Technical",
    cover: "https://placehold.co/600x400/111/fff?text=404",
    author: "Ifechukwu Okuma",
    date: "January 6, 2026",
    readTime: "3 mins read",
  },
  {
    id: 2,
    slug: "introduction-to-react-core-concepts",
    title: "Introduction To React And Its Core Concepts",
    category: "Technical",
    cover: "https://placehold.co/600x400/111/fff?text=React",
    author: "Ifechukwu Okuma",
    date: "January 6, 2026",
    readTime: "5 mins read",
  },
  {
    id: 3,
    slug: "how-to-install-tailwind-css-html",
    title: "How To Install Tailwind CSS In HTML",
    category: "Technical",
    cover: "https://placehold.co/600x400/111/fff?text=Tailwind",
    author: "Ifechukwu Okuma",
    date: "January 6, 2026",
    readTime: "2 mins read",
  },
  {
    id: 4,
    slug: "my-uiux-internship-experience",
    title: "My UI/UX Internship Experience",
    category: "Career",
    cover: "https://placehold.co/600x400/111/fff?text=UX",
    author: "Ifechukwu Okuma",
    date: "August 24, 2024",
    readTime: "7 mins read",
  },
  {
    id: 5,
    slug: "5-lessons-i-learnt-in-2023",
    title: "5 Lessons I Learnt In 2023",
    category: "Life",
    cover: "https://placehold.co/600x400/111/fff?text=Lessons",
    author: "Ifechukwu Okuma",
    date: "December 15, 2023",
    readTime: "6 mins read",
  },
  {
    id: 6,
    slug: "how-i-made-my-first-150-dollars",
    title: "How I Made My First $150 Dollars From Freelancing",
    category: "Career",
    cover: "https://placehold.co/600x400/111/fff?text=Money",
    author: "Ifechukwu Okuma",
    date: "April 19, 2023",
    readTime: "6 mins read",
  },
  {
    id: 7,
    slug: "how-i-made-my-first-150-dollars",
    title: "How I Made My First $150 Dollars From Freelancing",
    category: "Career",
    cover: "https://placehold.co/600x400/111/fff?text=Money",
    author: "Ifechukwu Okuma",
    date: "April 19, 2023",
    readTime: "6 mins read",
  },
];

const POSTS_PER_PAGE = 6;

export const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <section className="py-16 min-h-screen" id="insights">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-[#F9B233] font-semibold">— Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            <span className="text-[#F9B233] italic">Thoughts</span> & Writing
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition border ${
                activeCategory === cat
                  ? "bg-[#F9B233] text-black border-[#F9B233]"
                  : "bg-transparent border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-[#F9B233] hover:text-[#F9B233]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {paginated.map((post) => (
            <Link
              key={post.id}
              to={`/insights/${post.slug}`}
              className="group block rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-52 object-cover rounded-2xl"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="pt-4 pb-2 text-left">
                <h3 className="text-black dark:text-white font-bold text-base mb-1 line-clamp-2 group-hover:text-[#F9B233] transition">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {post.author} - {post.date} - {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm disabled:opacity-40 hover:bg-[#F9B233] hover:text-black transition"
            >
              ← Previous
            </button>
            <div className="flex gap-2 items-center">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`rounded-full transition-all duration-300 ${
                    page === i + 1
                      ? "w-6 h-3 bg-[#F9B233]"
                      : "w-3 h-3 bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm disabled:opacity-40 hover:bg-[#F9B233] hover:text-black transition"
            >
              Next →
            </button>
          </div>
        )}

      </div>
      <Footer />
    </section>
  );
};