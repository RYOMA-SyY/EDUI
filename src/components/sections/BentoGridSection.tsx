import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { BarChart3, Zap, Globe, Sparkles, Users, TrendingUp } from 'lucide-react';

export function BentoGridSection() {
  const codeExample = `.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

/* Specific card sizes */
.bento-large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-wide {
  grid-column: span 2;
}

.bento-tall {
  grid-row: span 2;
}

/* Card styling */
.bento-card {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}`;

  const bentoItems = [
    { 
      span: 'md:col-span-2 md:row-span-2',
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your performance with real-time insights and beautiful visualizations.',
      gradient: 'from-purple-500 to-pink-500',
      stats: [
        { label: 'Users', value: '12.5K' },
        { label: 'Revenue', value: '$45K' },
      ]
    },
    {
      span: 'md:col-span-1',
      icon: Zap,
      title: 'Fast Performance',
      description: 'Lightning-fast load times',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      span: 'md:col-span-1',
      icon: Globe,
      title: 'Global Reach',
      description: 'Available worldwide',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      span: 'md:col-span-1 md:row-span-2',
      icon: Sparkles,
      title: 'Premium Features',
      description: 'Unlock powerful tools and capabilities designed for professionals.',
      gradient: 'from-pink-500 to-rose-500',
      features: ['Advanced Analytics', 'Priority Support', 'Custom Branding']
    },
    {
      span: 'md:col-span-2',
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with your team members in real-time.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      span: 'md:col-span-1',
      icon: TrendingUp,
      title: 'Growth',
      description: 'Scale your business',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <SectionLayout
      id="bento"
      title="Bento Grid Layouts"
      description="Asymmetric card arrangements inspired by Apple's design language. Perfect for feature showcases and modern landing pages."
    >
      <div className="space-y-12">
        {/* Key Properties */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Key Properties</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">CSS Grid</strong>
                <p className="text-white/60">Variable column and row spans</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Large border-radius</strong>
                <p className="text-white/60">Typically 16-24px for modern look</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Consistent gaps</strong>
                <p className="text-white/60">Usually 16-24px between cards</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Floating shadows</strong>
                <p className="text-white/60">Subtle elevation with hover effects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Live Demo</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {bentoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${item.span} bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden relative group`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <h4 className="text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 mb-4">{item.description}</p>

                  {/* Stats if available */}
                  {item.stats && (
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {item.stats.map((stat, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-4">
                          <div className="text-2xl text-slate-900">{stat.value}</div>
                          <div className="text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features if available */}
                  {item.features && (
                    <ul className="space-y-2 mt-6">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Example</h3>
          <CodeBlock code={codeExample} />
        </div>

        {/* Responsive Behavior */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">📱 Responsive Behavior</h3>
          <div className="space-y-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                📱
              </div>
              <div>
                <strong className="text-white">Mobile (&lt; 768px)</strong>
                <p className="text-white/60">Single column layout - all cards stack vertically</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                💻
              </div>
              <div>
                <strong className="text-white">Tablet (768px+)</strong>
                <p className="text-white/60">2-column grid with strategic spanning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                🖥️
              </div>
              <div>
                <strong className="text-white">Desktop (1024px+)</strong>
                <p className="text-white/60">3+ column grid with varied card sizes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🎯 Perfect Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl mb-3">🎨</div>
              <div className="text-white mb-2">Portfolio Sites</div>
              <p className="text-white/60">Showcase work and projects</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl mb-3">✨</div>
              <div className="text-white mb-2">Feature Showcases</div>
              <p className="text-white/60">Highlight product features</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl mb-3">🚀</div>
              <div className="text-white mb-2">Landing Pages</div>
              <p className="text-white/60">Modern, engaging layouts</p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}