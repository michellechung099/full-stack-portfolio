import { Mail, Linkedin, Github, Send, Sparkles, Cat } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#FFF8FB] to-[#fffefe] dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-[#52D1C9] text-2xl">✧</span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
            Get In Touch
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg">
          Let's build something amazing together
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="soft-card p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities,
              innovative projects, or just having a chat about technology and
              software engineering.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:michelle.chung@example.com"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-[#E6FAF8] dark:bg-[#52D1C9]/20 rounded-xl group-hover:bg-[#CCFBF1] dark:group-hover:bg-[#52D1C9]/30 transition-colors">
                  <Mail className="text-[#52D1C9]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </div>
                  <div className="text-gray-900 dark:text-white font-semibold">
                    mchung099@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/michelle-chung-3a915a134/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-[#E6FAF8] dark:bg-[#52D1C9]/20 rounded-xl group-hover:bg-[#CCFBF1] dark:group-hover:bg-[#52D1C9]/30 transition-colors">
                  <Linkedin className="text-[#52D1C9]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    LinkedIn
                  </div>
                  <div className="text-gray-900 dark:text-white font-semibold">
                    https://linkedin.com/in/michelle-chung
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/michellechung099"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-[#E6FAF8] dark:bg-[#52D1C9]/20 rounded-xl group-hover:bg-[#CCFBF1] dark:group-hover:bg-[#52D1C9]/30 transition-colors">
                  <Github className="text-[#52D1C9]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    GitHub
                  </div>
                  <div className="text-gray-900 dark:text-white font-semibold">
                    github.com/michelle-chung
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="soft-card p-8 bg-gradient-to-br from-[#E6FAF8]/30 to-white dark:from-gray-800 dark:to-gray-800">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#CCFBF1] to-[#E6FAF8] dark:from-[#52D1C9]/30 dark:to-[#52D1C9]/10 rounded-full flex items-center justify-center border-4 border-[#52D1C9]">
                <span className="text-5xl font-bold text-[#52D1C9]">MC</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Michelle Chung
              </h3>
              <p className="text-[#52D1C9] font-semibold mb-4">
                Full-Stack Software Engineer
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Passionate about creating innovative solutions and pushing the
                boundaries of what's possible with technology.
              </p>
              <a
                href="mailto:mchung099@gmail.com"
                className="btn-gradient inline-flex items-center gap-2 px-6 py-3 text-white font-semibold"
              >
                <Send size={20} />
                Send Message
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#52D1C9]">🐾</span>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with meow meow
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Michelle Chung. Built with React, TypeScript, and Tailwind
            CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
