import { Award, Trophy, Star, Zap } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "UI/UX for Beginners",
      issuer: "Figma",
      type: "Design",
      icon: Award,
      color: "neon-pink",
      year: "2024",
      link: "https://drive.google.com/file/d/1eFR08v-6-bjeECjq0u-femv7hYLzPx1g/view?usp=drive_link"
    },
    {
      title: "Sigma at Figma Workshop",
      issuer: "Figma",
      type: "Design",
      icon: Award,
      color: "neon-pink",
      year: "2024",
      link: "https://drive.google.com/file/d/1t_WdjroC8Mm_NZp_kTFr0GKyA6veWt08/view?usp=drivesdk"
    },
    {
      title: "Android Development Workshop",
      issuer: "Google Developer",
      type: "Mobile",
      icon: Star,
      color: "neon-green",
      year: "2023",
      link: "https://drive.google.com/file/d/1bdEPr0w8Ogd0BKiyV9l0isYjhGI2twyw/view?usp=drivesdk"
    },
    {
      title: "DSA with C++ Bootcamp",
      issuer: "Let'sUpgrade",
      type: "Programming",
      icon: Zap,
      color: "neon-blue",
      year: "2024",
      link: "https://verify.letsupgrade.in/certificate/LUEDSACPPAUG12481"
    },
    {
      title: "Java Training",
      issuer: "Oracle",
      type: "Programming",
      icon: Award,
      color: "neon-cyan",
      year: "2024",
      link: "https://drive.google.com/file/d/1FhYqO4RQtLezq27UzicvXv_21JHtS6Xn/view?usp=drivesdk"
    },
    {
      title: "HTML Training",
      issuer: "W3C",
      type: "Web",
      icon: Star,
      color: "neon-purple",
      year: "2024",
      link: "https://drive.google.com/file/d/1Fm1axkg6j5tkch_-BCI5bC0ZCkCyLiNq/view?usp=drivesdk"
    },
    {
      title: "Aventus 3.0 Hackathon",
      issuer: "Aventus",
      type: "Cybersecurity, Hackathon",
      icon: Trophy,
      color: "neon-cyan",
      year: "2025",
      link: "https://drive.google.com/file/d/1FdlPfkc7ECPNmnfcdfEeIRRGOwy5iUDq/view?usp=drivesdk"
    },
    {
      title: "Ton Hacker House",
      issuer: "TON Foundation",
      type: "Blockchain, Hackathon",
      icon: Trophy,
      color: "neon-green",
      year: "2024",
      link: "https://drive.google.com/file/d/1FpFK-NNnqc5st2QMUXaGGUhl0R1HzfTV/view?usp=drivesdk"
    },

  ];

  return (
    <section id="certifications" className="py-16 md:py-24 bg-gradient-cosmic relative overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-2">
          <div className="overflow-visible">
            <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-cyber font-black text-transparent bg-gradient-neon bg-clip-text mb-4 sm:mb-6 break-words px-2 overflow-visible">
              CERTIFICATIONS.db
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              Validations of my expertise and commitment to continuous learning in the tech industry.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-dark-surface/80 backdrop-blur-sm border border-muted/30 rounded-xl p-3 sm:p-4 md:p-5 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 bg-${cert.color} rounded-full flex items-center justify-center border-2 border-dark-void group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-dark-void" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className={`px-1.5 py-0.5 bg-${cert.color}/20 text-${cert.color} text-[10px] sm:text-xs font-mono rounded border border-${cert.color}/30`}>
                          {cert.type}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                          {cert.year}
                        </span>
                      </div>
                      <h3 className={`text-sm sm:text-base font-cyber font-bold text-${cert.color} text-glow group-hover:scale-105 transition-transform duration-300 line-clamp-2 h-[2.4em]`}>
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-foreground mt-0.5 sm:mt-1 line-clamp-1">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Verification Badge */}
                    <div className="flex items-center justify-between mt-2 sm:mt-3">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-1.5 animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-mono text-neon-green">
                          Verified
                        </span>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[10px] sm:text-xs font-mono text-${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 underline`}
                      >
                        View →
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${cert.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-2 sm:px-0">
          {[
            { number: "7+", label: "Certifications", color: "neon-cyan" },
            { number: "5", label: "Workshops", color: "neon-green" },
            { number: "3", label: "Bootcamps", color: "neon-pink" },
            { number: "100%", label: "Completion", color: "neon-blue" }
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-dark-surface/60 border border-muted/30 rounded-xl p-3 sm:p-4 md:p-5 hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className={`text-xl sm:text-2xl md:text-3xl font-cyber font-black text-${stat.color} text-glow mb-0.5 sm:mb-1.5 group-hover:scale-105 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;