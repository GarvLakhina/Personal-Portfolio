import { Code, Database, Palette, Brain, FileCode, Server, Monitor, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "C++", color: "neon-blue", icon: FileCode },
        { name: "Java", color: "neon-green", icon: Code },
        { name: "Python", color: "neon-cyan", icon: FileCode },
        { name: "JavaScript", color: "neon-pink", icon: Code },
        { name: "Solidity", color: "neon-purple", icon: FileCode }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Database,
      skills: [
        { name: "ReactJS", color: "neon-cyan", icon: Code },
        { name: "Spring Boot", color: "neon-green", icon: Server },
        { name: "Firebase", color: "neon-pink", icon: Database },
        { name: "Web3.js", color: "neon-blue", icon: Code },
        { name: "OpenCV", color: "neon-purple", icon: Brain }
      ]
    },
    {
      title: "Dev Tools",
      icon: Brain,
      skills: [
        { name: "Git/GitHub", color: "neon-green", icon: Code },
        { name: "VS Code", color: "neon-blue", icon: Monitor },
        { name: "Remix IDE", color: "neon-cyan", icon: Wrench },
        { name: "Eclipse", color: "neon-pink", icon: Monitor },
        { name: "TON Web IDE", color: "neon-purple", icon: Wrench }
      ]
    },
    {
      title: "Design & Soft Skills",
      icon: Palette,
      skills: [
        { name: "Figma", color: "neon-pink", icon: Palette },
        { name: "Problem Solving", color: "neon-green", icon: Brain },
        { name: "Communication", color: "neon-cyan", icon: Brain },
        { name: "Teamwork", color: "neon-blue", icon: Brain },
        { name: "Adaptability", color: "neon-purple", icon: Brain }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-dark-void relative overflow-hidden">
      {/* Circuit Board Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80H10V10z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="20" cy="20" r="3" fill="currentColor"/>
              <circle cx="80" cy="80" r="3" fill="currentColor"/>
              <path d="M20 20L80 80M80 20L20 80" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-neon-blue"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="overflow-hidden">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cyber font-black text-transparent bg-gradient-neon bg-clip-text mb-4 sm:mb-6 whitespace-nowrap overflow-visible">
              SKILLS.array
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              Mastering the art of digital creation through diverse technologies and methodologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className="group bg-dark-surface/80 backdrop-blur-sm border border-muted/30 rounded-2xl p-6 sm:p-8 hover:border-neon-blue/50 transition-all duration-500"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="p-3 sm:p-4 bg-gradient-glow rounded-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-neon-blue group-hover:text-neon-cyan transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-cyber font-bold text-neon-cyan text-glow">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {/* Skill Name */}
                      <div className="flex items-center mb-3">
                        <div className={`p-2 bg-${skill.color}/20 border border-${skill.color}/30 rounded-lg mr-3 group-hover/skill:border-${skill.color} transition-all`}>
                          <skill.icon className={`w-4 h-4 text-${skill.color}`} />
                        </div>
                        <span className="font-mono text-foreground group-hover/skill:text-neon-cyan transition-colors text-lg">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Technical Adaptability */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-dark-surface/60 border border-neon-green/30 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-20 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-cyber font-bold text-neon-green text-glow mb-6">
                Overall Technical Adaptability
              </h3>
              <p className="text-lg font-mono text-muted-foreground">
                Constantly evolving and adapting to new technologies and challenges in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;