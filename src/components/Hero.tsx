import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById('glassmorphism');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-10 w-20 h-20 bg-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10"
        />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-48 right-10 w-32 h-32 bg-pink-500/20 rounded-full backdrop-blur-sm border border-white/10"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-500/20 rounded-3xl backdrop-blur-sm border border-white/10"
        />

        {/* Main glassmorphic panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center space-y-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="text-white" size={32} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl text-white mb-4">
                Modern Web Design Styles
              </h1>
              <p className="text-2xl md:text-3xl text-white/80">
                Interactive Guide & Live Examples
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/70 max-w-2xl mx-auto"
            >This project is open-source and Vibe-coded for educational purposes.
If you want to suggest improvements or contact me, here is my Instagram: @r1yoma <br></br>
              Master cutting-edge design techniques with comprehensive explanations, 
              interactive demonstrations, and ready-to-use code snippets. From glassmorphism 
              to micro-interactions, learn everything you need to create stunning modern interfaces.
              
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-4"
            >
              <button
                onClick={scrollToContent}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Start Exploring
                  <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-3xl text-white">10+</div>
                <div className="text-white/60">Design Styles</div>
              </div>
              <div>
                <div className="text-3xl text-white">50+</div>
                <div className="text-white/60">Live Examples</div>
              </div>
              <div>
                <div className="text-3xl text-white">100%</div>
                <div className="text-white/60">Interactive</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12"
        >
          <div className="text-white/50 flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <ArrowDown size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
