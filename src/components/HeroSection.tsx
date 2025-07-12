import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-cosmic.jpg";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Hi, I'm Garv Lakhina — Code. Create. Repeat.",
    "Building the future with blockchain & AI",
    "Transforming ideas into digital reality"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentString = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(currentString.substring(0, currentText.length + 1));
        
        if (currentText === currentString) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentString.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-void/80 via-dark-void/60 to-dark-void/90" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full animate-pulse floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Glitch Effect Title */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cyber font-black text-transparent bg-gradient-neon bg-clip-text mb-2 md:mb-4">
            GARV
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cyber font-bold text-neon-cyan text-glow">
            LAKHINA
          </h2>
        </div>

        {/* Typing Animation */}
        <div className="h-20 mb-12">
          <p className="text-xl md:text-2xl font-mono text-foreground min-h-[2.5rem] flex items-center justify-center">
            {currentText}
            <span className="ml-1 w-0.5 h-6 bg-neon-cyan animate-pulse" />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-12 md:mb-16 px-4">
          <Button 
            variant="cyber" 
            size="hero"
            onClick={scrollToProjects}
            className="group"
          >
            View Projects
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            variant="neon" 
            size="hero"
            onClick={scrollToContact}
            className="group"
          >
            Contact Me
            <Mail className="ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a 
            href="https://linkedin.com/in/garv-lakhina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 rounded-full border-2 border-neon-blue/30 hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 group-hover:scale-110">
              <Linkedin className="w-6 h-6 text-neon-blue" />
            </div>
          </a>
          <a 
            href="https://github.com/GarvLakhina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 rounded-full border-2 border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 group-hover:scale-110">
              <Github className="w-6 h-6 text-neon-green" />
            </div>
          </a>
          <a 
            href="mailto:garvlakhinagl@gmail.com"
            className="group"
          >
            <div className="p-4 rounded-full border-2 border-neon-pink/30 hover:border-neon-pink hover:bg-neon-pink/10 transition-all duration-300 group-hover:scale-110">
              <Mail className="w-6 h-6 text-neon-pink" />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-neon-cyan" />
      </div>
    </section>
  );
};

export default HeroSection;