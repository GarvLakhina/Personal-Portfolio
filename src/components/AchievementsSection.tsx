import { Trophy } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-gradient-cosmic relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-2">
          <div className="overflow-visible">
            <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 overflow-x-auto pb-2 px-4">
              <h2 className="min-w-max text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-cyber font-black text-transparent bg-gradient-neon bg-clip-text mb-4 sm:mb-6 whitespace-nowrap">
                ACHIEVEMENTS.unlock()
              </h2>
            </div>
            <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              Milestones and recognitions that highlight my journey and expertise in the digital realm.
            </p>
          </div>
        </div>

        {/* Special Achievement */}
        <div className="mt-8 sm:mt-12 md:mt-16 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-dark-surface/80 border-2 border-neon-green/30 rounded-2xl p-5 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/10 to-transparent animate-pulse" />
            <div className="relative z-10">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Trophy className="w-10 h-10 sm:w-14 sm:h-14 text-neon-green pulse-neon" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-cyber font-bold text-neon-green text-glow mb-2 sm:mb-3 px-2">
                🏆 Top 15 at Aventus 3.0
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <p className="font-mono text-sm sm:text-base text-foreground leading-relaxed">
                  <span className="text-neon-cyan text-glow">Top 15</span> of <span className="text-neon-pink text-glow">3800+</span> with Sentinel AI
                </p>
                <p className="font-mono text-xs sm:text-sm text-muted-foreground italic">
                  Automated Penetration Testing Tool with Real-time Visualizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;