import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Droplets, CreditCard, Bell, TrendingUp, Check, X } from 'lucide-react';

export function GlassmorphismSection() {
  const codeExample = `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* For dark glass effect */
.glass-dark {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}`;

  return (
    <SectionLayout
      id="glassmorphism"
      title="Glassmorphism"
      description="Create stunning frosted glass effects that add depth and visual hierarchy to your interfaces. Perfect for modern, premium designs."
    >
      <div className="space-y-12">
        {/* Key Properties */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Key Properties</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">backdrop-filter: blur()</strong>
                <p className="text-white/60">Creates the frosted glass effect</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Semi-transparent backgrounds</strong>
                <p className="text-white/60">rgba() with low opacity (0.1-0.2)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Subtle borders</strong>
                <p className="text-white/60">Light borders enhance the glass effect</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Vibrant backgrounds</strong>
                <p className="text-white/60">Works best with colorful backgrounds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Live Demo</h3>
          
          {/* Background for glass effect */}
          <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl" />
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {[
                { icon: CreditCard, title: 'Dashboard Card', value: '$12,450', label: 'Total Revenue' },
                { icon: Bell, title: 'Notifications', value: '24', label: 'Unread Messages' },
                { icon: TrendingUp, title: 'Analytics', value: '+34%', label: 'Growth Rate' },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-white/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <card.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-white">{card.title}</h4>
                  </div>
                  <div className="text-3xl text-white mb-1">{card.value}</div>
                  <div className="text-white/70">{card.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Login form example */}
            <div className="mt-8 max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="text-white" size={28} />
                  <h4 className="text-xl text-white">Glass Login Form</h4>
                </div>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white hover:bg-white/30 transition-colors">
                    Sign In
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Example</h3>
          <CodeBlock code={codeExample} />
        </div>

        {/* Best Practices */}
        <div>
          <h3 className="text-2xl text-white mb-6">✅ Best Practices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-green-400">
                <Check size={24} />
                <h4 className="text-xl">Do This</h4>
              </div>
              <ul className="space-y-2 text-white/80">
                <li>• Use on vibrant, colorful backgrounds</li>
                <li>• Keep blur values between 10-20px</li>
                <li>• Use subtle borders (1px white/20%)</li>
                <li>• Layer multiple glass elements</li>
                <li>• Ensure sufficient contrast for text</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-red-400">
                <X size={24} />
                <h4 className="text-xl">Don't Do This</h4>
              </div>
              <ul className="space-y-2 text-white/80">
                <li>• Use on plain white backgrounds</li>
                <li>• Over-blur (affects readability)</li>
                <li>• Make backgrounds too opaque</li>
                <li>• Forget -webkit- prefix for Safari</li>
                <li>• Use without proper contrast</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🎯 Perfect Use Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-white">Dashboard Cards</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">🔐</div>
              <div className="text-white">Login Forms</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">📱</div>
              <div className="text-white">Navigation Bars</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-white">Modal Dialogs</div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
