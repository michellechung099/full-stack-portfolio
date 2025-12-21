import { ExternalLink, Github, Sparkles, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Skin Story",
      description:
        "AI-powered skincare journaling app that helps users track their skincare journey with intelligent insights and personalized recommendations.",
      tech: [
        "React Native",
        "FastAPI",
        "Supabase",
        "Playwright",
        "LangChain",
        "GPT-4",
      ],
      metrics: [
        "21.4% performance improvement",
        "Sub-second query response",
        "1000+ active users",
      ],
      featured: true,
      demo: "#",
      github: "#",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Enterprise-grade analytics platform with real-time data visualization and predictive insights for financial institutions.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "D3.js"],
      metrics: ["99.9% uptime", "Processing 10M+ events/day"],
      featured: false,
      github: "#",
    },
    {
      title: "AI Content Assistant",
      description:
        "Smart content generation tool leveraging GPT-4 for automated content creation and optimization.",
      tech: ["Next.js", "Python", "OpenAI API", "Vercel"],
      metrics: ["85% time savings", "500+ content pieces generated"],
      featured: false,
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-white to-[#FFF8FB] dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-[#52D1C9] text-2xl">✧</span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
            Featured Projects
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Building innovative solutions with modern technologies and AI
          integration
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`soft-card border-2 ${
                project.featured
                  ? "md:p-8 p-6 border-[#52D1C9]/20"
                  : "p-6 border-transparent"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {project.featured && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E6FAF8] dark:bg-[#52D1C9]/20 border border-[#CCFBF1] dark:border-[#52D1C9]/40 rounded-full mb-3">
                          <Sparkles size={14} className="text-[#52D1C9]" />
                          <span className="text-[#0D9488] dark:text-[#52D1C9] text-xs font-semibold">
                            FEATURED PROJECT
                          </span>
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="soft-tag px-3 py-1 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="mb-6 flex flex-wrap gap-4">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-[#52D1C9]"
                        >
                          <Zap size={16} />
                          <span className="text-sm font-semibold">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="btn-gradient inline-flex items-center gap-2 px-4 py-2 text-white font-semibold"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-[#52D1C9] hover:text-[#52D1C9] transition-colors rounded-full"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
