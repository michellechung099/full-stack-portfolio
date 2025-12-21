import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-[#52D1C9] text-2xl">✧</span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="soft-card p-8">
            <Briefcase className="text-[#52D1C9] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Professional Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Full-stack engineer focused on mobile UX and backend performance.
              I’ve worked at early-stage startups, building products from the
              ground up that balance speed, reliability, and clarity.
            </p>
          </div>

          <div className="soft-card p-8">
            <GraduationCap className="text-[#52D1C9] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Education
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              University of Illinois Urbana-Champaign (B.A.) <br />
              App Academy — Full-Stack Web Development.
            </p>
          </div>
        </div>

        <div className="soft-card p-8 bg-gradient-to-r from-[#FFF8FB] to-[#fffefe] dark:from-gray-800 dark:to-gray-800">
          <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            I specialize in building end-to-end applications, from React Native
            interfaces to FastAPI services. I apply AI thoughtfully, only where
            it meaningfully improves usability rather than adding complexity.
          </p>
        </div>
      </div>
    </section>
  );
}
