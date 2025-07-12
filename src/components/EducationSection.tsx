import { GraduationCap, Calendar, TrendingUp } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-dark-void relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border border-neon-blue/20 animate-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="px-4 overflow-hidden">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cyber font-black text-transparent bg-gradient-neon bg-clip-text mb-4 sm:mb-6 whitespace-nowrap overflow-visible">
              EDUCATION.log
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 bg-gradient-neon h-full" />

            {/* Education Card */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center mb-16">
              {/* Timeline Node */}
              <div className="absolute left-1/2 -top-3 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-neon-cyan rounded-full border-4 border-dark-void pulse-neon z-10" />

              {/* Card */}
              <div className="w-full md:w-5/6 lg:w-5/12 md:ml-auto bg-dark-surface/80 backdrop-blur-sm border border-neon-blue/30 rounded-xl p-6 sm:p-8 group hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-500">
                {/* Institution Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-glow rounded-lg mr-4">
                    <GraduationCap className="w-8 h-8 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-cyber font-bold text-neon-cyan text-glow">
                      MVJ College of Engineering
                    </h3>
                    <p className="text-neon-green font-mono text-sm sm:text-base">
                      Bachelor of Engineering
                    </p>
                  </div>
                </div>

                {/* Course Details */}
                <div className="space-y-4">
                  <div className="flex items-center text-foreground font-mono">
                    <span className="text-neon-pink">Field:</span>
                    <span className="ml-2 text-neon-cyan">Computer Science</span>
                  </div>

                  <div className="flex items-center text-foreground font-mono">
                    <Calendar className="w-5 h-5 text-neon-green mr-2" />
                    <span className="text-neon-pink">Duration:</span>
                    <span className="ml-2">Nov 2022 – Present</span>
                  </div>

                  <div className="flex items-center text-foreground font-mono">
                    <TrendingUp className="w-5 h-5 text-neon-blue mr-2" />
                    <span className="text-neon-pink">GPA:</span>
                    <span className="ml-2 text-neon-cyan font-bold text-glow">
                      8.55 / 10
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-mono text-muted-foreground">
                      Academic Progress
                    </span>
                    <span className="text-sm font-mono text-neon-cyan">
                      85.5%
                    </span>
                  </div>
                  <div className="w-full bg-dark-void rounded-full h-3 border border-neon-blue/30">
                    <div 
                      className="h-full bg-gradient-neon rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-neon-blue/50"
                      style={{ width: '85.5%' }}
                    />
                  </div>
                </div>

                {/* Specializations */}
                <div className="mt-6">
                  <p className="text-sm font-mono text-muted-foreground mb-3">
                    Key Focus Areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Cybersecurity',
                      'AI/ML',
                      'Web Development',
                      'Blockchain',
                      'Data Structures',
                      'Algorithms'
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-void border border-neon-green/30 rounded-full text-xs font-mono text-neon-green hover:border-neon-green hover:text-glow transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Achievement Node */}
            <div className="relative flex items-center justify-start mt-16 md:mt-0">
              <div className="absolute left-1/2 -top-3 transform -translate-x-1/2 w-6 h-6 bg-neon-pink rounded-full border-2 border-dark-void z-10" />
              
              <div className="w-full lg:w-5/12 bg-dark-surface/60 border border-neon-pink/30 rounded-xl p-6 hover:border-neon-pink transition-all duration-500">
                <div className="text-center">
                  <h4 className="text-lg font-cyber font-bold text-neon-pink text-glow mb-2">
                      Code & Beyond
                  </h4>
                  <p className="text-sm font-mono text-muted-foreground">
                  Beyond academics, applying concepts in real-time through self-driven projects, competitive programming, and collaborative learning experiences that shape my developer mindset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;