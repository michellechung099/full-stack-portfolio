import { ArrowRight, MapPin } from "lucide-react";
import { Fragment } from "react";
import { motion, type Variants } from "motion/react";

const titleContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.6 },
  },
};

const titleLetter: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 500, damping: 25 },
  },
};

function AnimatedTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.h2
      className={className}
      aria-label={text}
      variants={titleContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wi) => (
        <Fragment key={wi}>
          {wi > 0 && " "}
          <span aria-hidden className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                variants={titleLetter}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 600, damping: 12 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </Fragment>
      ))}
    </motion.h2>
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const spring = { type: "spring", stiffness: 700, damping: 25 } as const;
  const pressable = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { y: 0, scale: 0.94 },
    transition: spring,
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full mb-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <MapPin size={16} className="text-[#52D1C9]" />
          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            San Francisco, CA
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Michelle Chung
        </h1>

        <AnimatedTitle
          text="Product Engineer"
          className="text-2xl md:text-3xl text-[#52D1C9] font-semibold mb-6"
        />

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building AI-powered products and automating complex workflows
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            {...pressable}
            onClick={() => scrollToSection("case-study")}
            className="group btn-gradient px-8 py-4 text-white font-semibold flex items-center justify-center gap-2 hover:gap-3"
          >
            View My Work
            <ArrowRight size={20} className="transition-all duration-300" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            {...pressable}
            className="btn-gradient-outline px-8 py-4 font-semibold"
          >
            Get In Touch
          </motion.button>
        </div>
      </div>
    </section>
  );
}
