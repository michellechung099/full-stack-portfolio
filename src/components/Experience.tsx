import { Calendar, MapPin, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI Evaluation & Benchmarking Analyst (Contract)",
      company: "Handshake",
      location: "Remote",
      period: "Jun 2026 - Present",
      description:
        "Evaluate AI-generated software engineering solutions and build benchmarks that reveal coding-agent failure modes",
      achievements: [
        "Evaluate AI-generated solutions to software engineering tasks for accuracy and alignment with user requests.",
        "Built a reproducible Docker benchmark to identify AI coding agent failure modes in data pipeline debugging, using a held-out pytest verifier for scoring.",
      ],
      tech: ["Docker", "Python", "Pytest", "Git"],
    },
    {
      title: "Frontend Engineer (Contract)",
      company: "Charisse Yeh",
      location: "San Francisco, CA",
      period: "Jul 2024 - Oct 2024",
      description:
        "Translated designer-provided Figma designs into a polished, production-ready React Native onboarding experience.",
      achievements: [
        "Shipped a production-ready React Native onboarding flow from Figma designs, enabling secure account creation and photo uploads through Firebase.",
        "Built reusable components and navigation patterns that preserved the designer’s layout, typography, and interaction states across the onboarding flow.",
      ],
      tech: ["React Native", "Firebase", "Figma", "Expo"],
    },
    {
      title: "Software Engineering Intern",
      company: "Dorsal AI",
      location: "Remote",
      period: "Sep 2023 - Dec 2023",
      description:
        "Worked on data-heavy financial applications, building APIs and frontend dashboards to improve performance, scalability, and usability.",
      achievements: [
        "Developed a REST API to retrieve SEC 10-K/10-Q reports and transcripts, reducing report load latency by 20%.",
        "Built an interactive dashboard in Next.js with infinite pagination, reducing dashboard render time by 35%.",
        "Moved static assets to Supabase Storage with CDN delivery, reducing server load and improving load times.",
        "Evaluated RAG pipelines (RetrievalQA, Map-Reduce, Stuff) for earnings call analysis, identifying tradeoffs in summarization and guidance extraction quality.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Supabase",
        "SQL",
        "Tailwind CSS",
        "Git",
      ],
    },
    {
      title: "Relationship Banker",
      company: "Bank of America",
      location: "San Francisco, CA",
      period: "Jul 2022 - Nov 2022",
      description:
        "Worked in client-facing financial services, developing communication skills and experience translating complex information into clear, actionable guidance.",
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-28 py-20 px-6 bg-gradient-to-b from-[#FFF8FB] to-[#fffefe] dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-[#52D1C9] text-2xl">✧</span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
            Work Experience
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Experience across AI evaluation, startup engineering, and client work
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="soft-card p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-[#52D1C9] font-semibold text-lg">
                    {exp.company}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-[#52D1C9] mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.tech && exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="soft-tag px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
