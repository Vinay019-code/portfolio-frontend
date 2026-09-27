import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Learnings from "./components/Learning";
import ScrollProgress from "./components/ScrollProgress";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <ScrollProgress />
      <Background />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/learnings" element={<Learnings />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
