import { ExternalLink, Github, Shield, Brain, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureWave",
      subtitle: "Women's Safety App",
      description: "Real-time location sharing, gesture & gender analytics via CCTV. Voice-activated SOS with emergency alerts system.",
      tech: ["Python", "OpenCV", "TensorFlow", "Firebase"],
      icon: Shield,
      color: "neon-pink",
      glowColor: "shadow-neon-pink/50"
    },
    {
      title: "Complain Hub",
      subtitle: "Smart Complaint System",
      description: "Complaint tracking platform with real-time updates, admin dashboard with smart routing and notifications.",
      tech: ["ReactJS", "Firebase", "Spring Boot"],
      icon: Globe,
      color: "neon-blue",
      glowColor: "shadow-neon-blue/50"
    },
    {
      title: "Web3 Will Execution",
      subtitle: "Decentralized Will System",
      description: "Auto-transfers crypto after user inactivity. Email reminders and smart contract-controlled fund flow.",
      tech: ["Solidity", "Web3.js", "ReactJS", "IPFS"],
      icon: Zap,
      color: "neon-green",
      glowColor: "shadow-neon-green/50"
    },
    {
      title: "Sentinel AI",
      subtitle: "Penetration Testing Tool",
      description: "Simulates SQL Injection, DDoS, MITM attacks. Live attack visualizations and ML-based risk scoring.",
      tech: ["React", "Python", "Firebase", "Canvas API"],
      icon: Brain,
      color: "neon-cyan",
      glowColor: "shadow-neon-cyan/50"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-cosmic relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-pulse floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="overflow-hidden">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cyber font-black text-transparent bg-gradient-neon bg-clip-text mb-4 sm:mb-6 whitespace-nowrap overflow-visible">
              PROJECTS.json
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              A collection of my latest projects, built with cutting-edge technologies and innovative solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-dark-surface/80 backdrop-blur-sm border border-muted/30 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-neon-blue/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  borderColor: `hsl(var(--${project.color}) / 0.3)`
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500" />

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                    <div className={`p-3 sm:p-4 bg-dark-void rounded-xl border border-${project.color}/30 group-hover:border-${project.color} transition-all duration-300 flex-shrink-0`}>
                      <IconComponent className={`w-8 h-8 text-${project.color} group-hover:text-glow`} />
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-cyber font-bold text-${project.color} text-glow group-hover:scale-105 transition-transform duration-300`}>
                        {project.title}
                      </h3>
                      <p className="text-neon-cyan font-mono text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="icon" className="hover:bg-neon-blue/10">
                      <Github className="w-5 h-5 text-neon-blue" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-neon-green/10">
                      <ExternalLink className="w-5 h-5 text-neon-green" />
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground font-mono leading-relaxed mb-6 relative z-10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="relative z-10">
                  <p className="text-sm font-mono text-muted-foreground mb-3">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-dark-void border border-${project.color}/30 rounded-full text-xs font-mono text-${project.color} hover:border-${project.color} hover:text-glow transition-all duration-300 cursor-default`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glitch Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;