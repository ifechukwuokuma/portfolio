import { useState, useEffect } from "react";
import { Search, X, Rss } from "lucide-react";
import { Footer } from "../components/Sections/Footer";

const POSTS_PER_PAGE = 10;

export const Insights = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://ifechukwuokuma.substack.com/feed`
        );
        const data = await res.json();
        if (data.status === "ok") {
          const parsed = data.items.map((item, i) => ({
            id: i,
            title: item.title,
            cover: item.thumbnail || item.enclosure?.url || "https://placehold.co/600x400/111/fff?text=IO",
            author: item.author || "Ifechukwu Okuma",
            date: new Date(item.pubDate).toLocaleDateString("en-NG", {
              year: "numeric", month: "long", day: "numeric",
            }),
            readTime: `${Math.ceil((item.content?.split(" ").length || 200) / 200)} mins read`,
            link: item.link,
          }));
          setPosts(parsed);
        }
      } catch (err) {
        console.error("Failed to fetch Substack posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filtered = searchQuery
    ? posts.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : posts;

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <section className="py-16 min-h-screen" id="insights">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#F9B233] font-semibold">— Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              <span className="text-[#F9B233] italic">Thoughts</span> & Writing
            </h2>
          </div>

          {/* Right: Search + Subscribe */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {searchOpen && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                  placeholder="Search..."
                  className="border border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white text-sm px-3 py-1.5 rounded-full focus:outline-none focus:border-[#F9B233] w-40 transition-all"
                  autoFocus
                />
              )}
              <button
                onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-[#F9B233] hover:text-[#F9B233] transition"
              >
                {searchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>

            <a
              href="https://ifechukwuokuma.substack.com/subscribe"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#F9B233] dark:hover:bg-[#F9B233] dark:hover:text-black transition"
            >
              <Rss size={14} />
              Subscribe
            </a>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl overflow-hidden">
                <div className="h-52 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-20">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {paginated.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-52 object-cover rounded-2xl"
                  />
                </div>
                <div className="pt-4 pb-2 text-left">
                  <h3 className="text-black dark:text-white font-bold text-base mb-1 line-clamp-2 group-hover:text-[#F9B233] transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {post.author} - {post.date} - {post.readTime}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

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
                    page === i + 1 ? "w-6 h-3 bg-[#F9B233]" : "w-3 h-3 bg-gray-400"
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