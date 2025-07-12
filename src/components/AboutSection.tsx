import { Code, Shield, Cpu, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "5+", label: "Projects Completed", icon: Code, delay: "0s" },
    { number: "10+", label: "Tools Used", icon: Cpu, delay: "0.2s" },
    { number: "2+", label: "Hackathons Participated", icon: Zap, delay: "0.4s" },
    { number: "100%", label: "Passion for Innovation", icon: Shield, delay: "0.6s" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-cosmic relative overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-bg opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="overflow-hidden">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cyber font-black text-transparent bg-gradient-neon bg-clip-text mb-4 sm:mb-6 whitespace-nowrap overflow-visible">
              ABOUT_ME.exe
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              Get to know the mind behind the code. My journey, skills, and what drives me in this digital universe.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar/Visual */}
          <div className="relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
              {/* Rotating Ring */}
              <div className="absolute inset-0 border-4 border-neon-cyan/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 border-2 border-neon-pink/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              
              {/* Central Avatar */}
              <div className="absolute inset-8 bg-gradient-glow rounded-full flex items-center justify-center">
                <div className="w-full h-full bg-dark-surface rounded-full border-2 border-neon-blue flex items-center justify-center">
                  <Code className="w-24 h-24 text-neon-blue pulse-neon" />
                </div>
              </div>

              {/* Floating Icons */}
              {[Shield, Cpu, Zap].map((Icon, index) => (
                <div
                  key={index}
                  className="absolute w-12 h-12 floating"
                  style={{
                    top: `${20 + index * 20}%`,
                    right: index % 2 === 0 ? '-10%' : 'auto',
                    left: index % 2 === 1 ? '-10%' : 'auto',
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className="w-full h-full bg-dark-surface rounded-full border border-neon-green/50 flex items-center justify-center hover:border-neon-green transition-colors">
                    <Icon className="w-6 h-6 text-neon-green" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-neon" />
              <p className="text-base sm:text-lg leading-relaxed text-foreground pl-6 sm:pl-8 font-mono">
                I'm <span className="text-neon-cyan font-bold text-glow">Garv Lakhina</span>, a Computer Science student at{" "}
                 <span className="text-neon-green">MVJ College of Engineering</span> with a passion for building{" "}
                <span className="text-neon-pink">secure, intelligent, and blockchain tech</span>.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-foreground pl-6 sm:pl-8 font-mono mt-4">
                From decentralized will systems to AI-based safety apps, I strive to{" "}
                <span className="text-neon-cyan text-glow">code for real-world impact</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-dark-surface/50 p-4 sm:p-6 rounded-lg border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-500 hover:transform hover:scale-105"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-glow rounded-lg">
                        <IconComponent className="w-8 h-8 text-neon-blue group-hover:text-neon-cyan transition-colors" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neon-cyan font-cyber group-hover:text-glow">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;