import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Layout/Navbar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
