import { Code, Heart, Terminal } from "lucide-react";

const Footer = () => {
  const matrixChars = "GARV_LAKHINA_CYBERPUNK_PORTFOLIO_2025";
  
  return (
    <footer className="bg-dark-void border-t border-neon-blue/30 relative overflow-hidden">
      {/* Matrix Code Rain */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-neon-green animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Terminal className="w-8 h-8 text-neon-cyan mr-3" />
              <h3 className="text-2xl font-cyber font-bold text-transparent bg-gradient-neon bg-clip-text">
                GARV.dev
              </h3>
            </div>
            <p className="font-mono text-muted-foreground text-sm leading-relaxed">
              Building the future with code, creativity, and cybersecurity. 
              One commit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-cyber font-bold text-neon-green text-glow mb-4">
              Navigation.map()
            </h4>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block font-mono text-sm text-foreground hover:text-neon-cyan transition-colors duration-300"
                >
                  ./{link.name.toLowerCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Status Panel */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-cyber font-bold text-neon-pink text-glow mb-4">
              System.status()
            </h4>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center justify-center md:justify-end">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse" />
                <span className="text-neon-green">Online & Available</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-2 animate-pulse" />
                <span className="text-neon-blue">Projects: Active</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse" />
                <span className="text-neon-cyan">Learning: Continuous</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-neon mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Quote */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-mono text-neon-cyan text-glow italic">
              "Keep calm and code the future."
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center text-center">
            <span className="font-mono text-sm text-muted-foreground mr-2">
              Built with
            </span>
            <Code className="w-4 h-4 text-neon-blue mx-1" />
            <span className="font-mono text-sm text-muted-foreground mx-1">
              and
            </span>
            <Heart className="w-4 h-4 text-neon-pink mx-1 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground ml-2">
              by Garv Lakhina
            </span>
          </div>
        </div>

        {/* Final Copyright Line */}
        <div className="text-center mt-6 pt-6 border-t border-muted/20">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-neon-cyan">©</span> 2025 Garv Lakhina. 
            <span className="text-neon-green ml-1">All rights reserved.</span>
            <span className="text-neon-pink ml-1">Made in Cyberpunk style.</span>
          </p>
        </div>

        {/* Glitch Effect Elements */}
        <div className="absolute bottom-4 left-4 opacity-20">
          <div className="text-neon-cyan font-mono text-xs glitch" data-text="</PORTFOLIO>">
            &lt;/PORTFOLIO&gt;
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4 opacity-20">
          <div className="text-neon-pink font-mono text-xs glitch" data-text="EOF">
            EOF
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;