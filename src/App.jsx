import React, { useEffect, useRef, useState } from "react";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';
import Toast from './components/Toast.jsx';
import InteractiveBackground from './components/InteractiveBackground.jsx';
import content from './data/content.json';
import './styles/tokens.css';
import './styles/globals.css';

export default function App() {
  const [active, setActive] = useState("home");
  const liveRef = useRef(null);
  const mainRef = useRef(null);

  // Observe sections for scrollspy, reveal, and hash update
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section.page"));
    const reveals = Array.from(document.querySelectorAll("[data-section]"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            // Active tab/hash
            setActive(id);
            const newHash = `#${id}`;
            if (location.hash !== newHash) history.replaceState(null, "", newHash);
            if (liveRef.current) liveRef.current.textContent = `${id} section active`;
            
            // Add fade-in animation to page content
            const container = entry.target.querySelector('.container');
            if (container && !container.classList.contains('fade-in')) {
              container.classList.add('fade-in');
            }
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((s) => io.observe(s));
    reveals.forEach((el) => revealIO.observe(el));

    // On load, if hash exists, ensure focus/scroll
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      el?.scrollIntoView({ behavior: "instant", block: "start" });
    }

    return () => {
      io.disconnect();
      revealIO.disconnect();
    };
  }, []);

  // Keyboard paging between sections (PageDown/PageUp/Space)
  useEffect(() => {
    function keyHandler(e) {
      const order = ["home", "about", "experience", "projects", "resume", "contact"];
      const idx = order.indexOf(active);
      const prev = order[Math.max(0, idx - 1)];
      const next = order[Math.min(order.length - 1, idx + 1)];
      const go = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const heading = el.querySelector("h1, h2, h3, [tabindex]") || el;
        heading.setAttribute("tabindex", "-1");
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => heading.focus({ preventScroll: true }), 300);
      };

      const key = e.key;
      const isSpace = key === " " || key === "Spacebar";
      if (key === "PageDown" || (isSpace && !e.shiftKey)) { e.preventDefault(); go(next); }
      if (key === "PageUp" || (isSpace && e.shiftKey)) { e.preventDefault(); go(prev); }
    }
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [active]);

  // Simple toast for form demo
  const [toast, setToast] = useState("");
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <>
      <InteractiveBackground />
      
      {/* Skip to main content */}
      <a href="#home" className="skip-link">Skip to content</a>

      <Header activeId={active} content={content} />

      <main ref={mainRef} id="main">
        <Home content={content} />
        <About content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Resume content={content} />
        <Contact content={content} onToast={setToast} />
      </main>

      <Footer content={content} />

      <div className="sr-only" aria-live="polite" ref={liveRef} />
      <Toast msg={toast} />
    </>
  );
}
