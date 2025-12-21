import { Code2, Wrench, Database, Brain, Sparkles } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["React Native", "React", "Next.js", "FastAPI", "Tailwind CSS"],
    },
    {
      title: "Data & Platforms",
      icon: Database,
      skills: [
        "Supabase",
        "Redis",
        "Docker",
        "Git",
        "Vercel",
        "AWS S3",
        "PostgreSQL",
      ],
    },
    {
      title: "Tooling & AI",
      icon: Brain,
      skills: ["LangChain", "GPT-4", "Selenium | Playwright", "Pytest | Jest"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-[#52D1C9] text-2xl">✧</span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
            Technical Skills
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Leveraging modern technologies to build scalable and efficient
          solutions
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="soft-card p-8 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#E6FAF8] dark:bg-[#52D1C9]/20 rounded-xl group-hover:bg-[#CCFBF1] dark:group-hover:bg-[#52D1C9]/30 transition-colors">
                    <Icon className="text-[#52D1C9]" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="soft-tag px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
