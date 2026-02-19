import { Sparkles } from "lucide-react";

export default function HowIBuild() {
  const steps = [
    "Model data and failure states before building screens",
    "Ship minimal end-to-end flow early to validate assumptions",
    "Assume real input is messy (typos, partial names, missing data)",
    "Add logging, fallbacks and tests so failures don't break the app",
    "Optimize only after measuring real bottlenecks",
  ];

  return (
    <section
      id="approach"
      className="py-20 px-6 bg-gradient-to-b from-[#FFF8FB] to-[#fffefe] dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-[#52D1C9] text-2xl">✧</span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
            How I Build
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          My approach to creating thoughtful, user-centered products
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="soft-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#52D1C9] to-[#3FBFB7] flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
