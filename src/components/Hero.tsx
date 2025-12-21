import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full mb-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <MapPin size={16} className="text-[#52D1C9]" />
          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            San Francisco, CA
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Michelle Chung
        </h1>

        <h2 className="text-2xl md:text-3xl text-[#52D1C9] font-semibold mb-6">
          I build calm, user-centered apps with React Native, FastAPI, and AI.
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          What matters most in my work is clarity in UX, backend design, and
          real-world performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("case-study")}
            className="group btn-gradient px-8 py-4 text-white font-semibold flex items-center justify-center gap-2 hover:gap-3"
          >
            View My Work
            <ArrowRight size={20} className="transition-all duration-300" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="btn-gradient-outline px-8 py-4 font-semibold"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
