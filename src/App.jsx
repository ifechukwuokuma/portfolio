import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Sections/Navbar";
import { Home } from "./pages/Home";
import { Insights } from "./pages/Insights";
import { InsightDetail } from "./pages/InsightDetail";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";

import ScrollToTop from "./ScrollToTop";  // ← add this

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
