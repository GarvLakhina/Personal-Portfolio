import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/garvlakhinagl@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success("Message transmitted successfully! 🚀", {
          description: "Quantum entanglement established. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error("Transmission failed", {
        description: "The quantum link was interrupted. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/garv-lakhina",
      icon: Linkedin,
      color: "neon-blue",
      username: "garv-lakhina"
    },
    {
      name: "GitHub",
      url: "https://github.com/GarvLakhina",
      icon: Github,
      color: "neon-green",
      username: "GarvLakhina"
    },
    {
      name: "Email",
      url: "mailto:garvlakhinagl@gmail.com",
      icon: Mail,
      color: "neon-pink",
      username: "garvlakhinagl@gmail.com"
    },
    {
      name: "Phone",
      url: "tel:+918792874224",
      icon: Phone,
      color: "neon-cyan",
      username: "+91-8792874224"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark-void relative overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {String.fromCharCode(33 + Math.random() * 93)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="overflow-hidden">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cyber font-black text-transparent bg-gradient-neon bg-clip-text mb-4 sm:mb-6 whitespace-nowrap overflow-visible">
              CONTACT.init()
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate! Whether you have a project in mind or just want to say hi, I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-dark-surface/80 backdrop-blur-sm border border-neon-blue/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-glow opacity-10 rounded-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-cyber font-bold text-neon-cyan text-glow mb-4 sm:mb-6">
                  Quantum Communication Channel
                </h3>

                <form 
                  action="https://formsubmit.co/garvlakhinagl@gmail.com" 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-4 sm:space-y-6"
                >
                  <input type="hidden" name="_next" value="https://yourportfolio.com/thanks" />
                  <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-muted-foreground mb-1 sm:mb-2">
                      Identification Protocol
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name..."
                      required
                      className="bg-dark-void border-neon-blue/30 text-foreground font-mono focus:border-neon-blue focus:ring-neon-blue/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-muted-foreground mb-1 sm:mb-2">
                      Transmission Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@domain.com"
                      required
                      className="bg-dark-void border-neon-blue/30 text-foreground font-mono focus:border-neon-blue focus:ring-neon-blue/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-muted-foreground mb-1 sm:mb-2">
                      Data Payload
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Compose your message..."
                      required
                      rows={6}
                      className="bg-dark-void border-neon-blue/30 text-foreground font-mono focus:border-neon-blue focus:ring-neon-blue/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cyber"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-void border-t-transparent rounded-full animate-spin mr-2" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Terminal-style Output */}
                <div className="mt-8 bg-dark-void border border-neon-green/30 rounded p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-neon-green rounded-full mr-2 animate-pulse" />
                    <span className="text-xs font-mono text-neon-green">TERMINAL ACTIVE</span>
                  </div>
                  <div className="font-mono text-xs text-foreground">
                    <span className="text-neon-cyan">garv@portfolio:~$</span> status --communication-channel
                    <br />
                    <span className="text-neon-green">✓ Quantum encryption: ENABLED</span>
                    <br />
                    <span className="text-neon-green">✓ Response time: &lt; 24 hours</span>
                    <br />
                    <span className="text-neon-cyan">Ready to receive transmission...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-dark-surface/60 border border-neon-pink/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-cyber font-bold text-neon-purple text-glow mb-4 sm:mb-6">
                  Direct Channels
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 sm:p-4 rounded-xl border border-muted/30 hover:border-neon-blue/50 transition-all duration-300 group"
                      >
                        <div className={`p-2 sm:p-3 bg-${link.color}/10 rounded-lg border border-${link.color}/20 flex-shrink-0`}>
                          <IconComponent className={`w-6 h-6 text-${link.color}`} />
                        </div>
                        <div>
                          <div className="font-cyber font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                            {link.name}
                          </div>
                          <p className="text-xs sm:text-sm font-mono text-muted-foreground break-all">
                            {link.username}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <div className="bg-dark-surface/60 border border-neon-green/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-cyber font-bold text-neon-green text-glow mb-4 sm:mb-6">
                  Physical Location
                </h3>
                <div className="flex items-center">
                  <div className="p-3 bg-neon-green/20 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <div className="font-cyber font-bold text-foreground">
                      Bangalore, India
                    </div>
                    <div className="text-sm font-mono text-muted-foreground">
                      Silicon Valley of India
                    </div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="bg-dark-surface/60 border border-neon-cyan/30 rounded-2xl p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-neon-cyan rounded-full animate-pulse" />
                </div>
                <h4 className="text-base sm:text-lg font-cyber font-bold text-neon-cyan mb-1">
                  Status: ONLINE
                </h4>
                <p className="text-sm font-mono text-muted-foreground">
                  Available for collaborations and opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;