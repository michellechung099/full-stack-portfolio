import {
  ExternalLink,
  Github,
  Zap,
  Sparkles,
  Image,
  Video,
} from "lucide-react";
import skinstory1 from "../assets/skinstory-1.png";
import skinstory2 from "../assets/skinstory-2.png";
import skinstory3 from "../assets/skinstory-3.png";
import skinstory4 from "../assets/skinstory-4.png";
import skinstory5 from "../assets/skinstory-5.png";
import skinstory6 from "../assets/skinstory-6.png";
import skinstory7 from "../assets/skinstory-7.png";
import architecture from "../assets/architecture-diagram.png";
import wireframe from "../assets/wireframe.png";
import demoVideo from "../assets/demo-video.mp4";

export default function CaseStudy() {
  const highlights = [
    "Async Playwright scraper for ingredient extraction",
    "FastAPI API product lookup and ingredient classification",
    "Relational data model (Products ↔ Ingredients) via SQLModel",
    "Cache-first search with database lookup and fallback scraping",
    "React Native search and ingredient safety UI",
  ];

  const results = [
    "24% performance improvement after migrating from Selenium",
    "Improved product lookup reliability via rate limiting and persistence",
    "Consistent ingredient classification through normalized matching",
    "Polished Expo-based mobile experience",
  ];

  const screenshots = [
    skinstory1,
    skinstory2,
    skinstory3,
    skinstory4,
    skinstory5,
    skinstory6,
    skinstory7,
  ];

  return (
    <section
      id="case-study"
      className="py-20 px-6 bg-gradient-to-b from-[#fffefe] to-[#FFF8FB] dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6FAF8] dark:bg-[#52D1C9]/20 rounded-full mb-6 border border-[#CCFBF1] dark:border-[#52D1C9]/40">
            <Sparkles size={16} className="text-[#52D1C9]" />
            <span className="text-[#0D9488] dark:text-[#52D1C9] text-sm font-semibold">
              FEATURED CASE STUDY
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#52D1C9] text-2xl">✧</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Skin Story
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            AI-powered skincare journaling app
          </p>
        </div>

        <div className="soft-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10 md:border-r border-gray-200 dark:border-gray-700">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#52D1C9] rounded-full"></span>
                  Problem
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  People with sensitive skin struggle to connect irritation to
                  specific ingredients. Tracking is fragmented across products,
                  routines, and photos, so patterns are hard to spot and repeat.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#52D1C9] rounded-full"></span>
                  Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Skin Story helps users check ingredient safety, log routines
                  with photos, and identify potential ingredient triggers as
                  data accumulates. I built the full product end-to-end: React
                  Native app, FastAPI backend, Supabase data layer, and a
                  Playwright-based ingestion pipeline that scrapes, categorizes,
                  and persists ingredient data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#52D1C9] rounded-full"></span>
                  My Role
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#52D1C9] mt-1">▹</span>
                    <span>Owned product UX end-to-end</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#52D1C9] mt-1">▹</span>
                    <span>
                      Architected backend services (FastAPI + SQLModel +
                      Supabase)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#52D1C9] mt-1">▹</span>
                    <span>Built Playwright scraping pipeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#52D1C9] mt-1">▹</span>
                    <span>Shipped React Native UI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-gradient-to-br from-[#FFF8FB] to-white dark:from-gray-800 dark:to-gray-800">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-[#52D1C9]" />
                  Technical Highlights
                </h3>
                <div className="space-y-3">
                  {highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#52D1C9]/30 transition-colors"
                    >
                      <span className="text-[#52D1C9] font-bold text-sm mt-0.5">
                        →
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-[#52D1C9]" />
                  Key Results
                </h3>
                <div className="space-y-2">
                  {results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#52D1C9] mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 md:px-10 py-8 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#FFF8FB] to-white dark:from-gray-800 dark:to-gray-800">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.notion.so/Skin-Story-Development-Case-Study-2be0d57bee018022ad91d65dd4424e36?source=copy_link"
                className="btn-gradient flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold"
              >
                <ExternalLink size={18} />
                Read the Case Study
              </a>
              <a
                href="#"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#52D1C9] text-[#52D1C9] font-semibold hover:bg-[#E6FAF8] dark:hover:bg-[#52D1C9]/20 transition-colors rounded-full"
              >
                <Github size={18} />
                Code (available on request)
              </a>
            </div>
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="mt-12 soft-card p-8 md:p-10 bg-gradient-to-br from-[#E6FAF8] to-white dark:from-gray-800 dark:to-gray-800 border-2 border-[#52D1C9]/20">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={24} className="text-[#52D1C9]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Behind the Scenes
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Skin Story started as a tool I wanted for myself. I journaled daily
            to design realistic flows, benchmarked Selenium vs Playwright, and
            built the backend from scratch. It became a personal obsession that
            blends UX, systems engineering, and AI-empowered workflows.
          </p>
        </div>

        {/* APP UI Preview Gallery */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <Image size={24} className="text-[#52D1C9]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              App UI Preview
            </h3>
          </div>
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-6 min-w-max">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="soft-card overflow-hidden aspect-[9/16] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex-shrink-0 w-[280px] md:w-[320px] flex items-center justify-center"
                >
                  <div className="text-center p-6 w-full h-full flex items-center justify-center">
                    <img
                      src={screenshot}
                      alt={`Skinstory UI ${index + 1}`}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <Zap size={24} className="text-[#52D1C9]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Architecture
            </h3>
          </div>
          <div className="soft-card overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-12">
            <div className="text-center">
              <img
                src={architecture}
                className="w-md h-sm rounded-md mx-auto  max-w-full h-auto mb-4"
              />
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                High-level system diagram showing React Native → FastAPI →
                SQLModel → Supabase → Playwright scraper pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* Drawing App */}
        <div className="text-center mb-12 mt-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#52D1C9] text-2xl">✧</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Drawing App
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Figma design to React Native implementation
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <Image size={24} className="text-[#52D1C9]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Figma Wireframe Design
            </h3>
          </div>
          <div className="soft-card overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-12">
            <div className="text-center">
              <img
                src={wireframe}
                className="w-md h-sm rounded-md mx-auto  max-w-full h-auto mb-4"
              />
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                designed by Charisse Yeh on Figma
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <Video size={24} className="text-[#52D1C9]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Demo Video
            </h3>
          </div>

          <div className="soft-card overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 md:p-12">
            <div className="aspect-video w-full max-w-xl mx-auto rounded-lg overflow-hidden">
              <video
                src={demoVideo}
                controls
                className="w-full h-full object-contain"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
