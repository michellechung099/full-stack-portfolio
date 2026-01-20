import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import HowIBuild from "./components/HowIBuild";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <HowIBuild />
      <CaseStudy />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
