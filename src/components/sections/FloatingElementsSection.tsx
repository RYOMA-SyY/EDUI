import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Layers, Box, Package } from 'lucide-react';

export function FloatingElementsSection() {
  const codeExample = `/* Elevation System */
.elevation-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
}

.elevation-2 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15),
              0 2px 4px rgba(0, 0, 0, 0.12);
}

.elevation-3 {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
              0 3px 6px rgba(0, 0, 0, 0.10);
}

.elevation-4 {
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15),
              0 5px 10px rgba(0, 0, 0, 0.05);
}

/* Hover Lift Effect */
.lift-on-hover {
  transition: transform 0.3s, box-shadow 0.3s;
}

.lift-on-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
              0 8px 16px rgba(0, 0, 0, 0.15);
}`;

  const elevationLevels = [
    {
      level: 1,
      name: 'Subtle',
      description: 'Light touch, minimal depth',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      use: 'Cards, list items'
    },
    {
      level: 2,
      name: 'Standard',
      description: 'Default elevation for cards',
      shadow: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
      use: 'Default cards, buttons'
    },
    {
      level: 3,
      name: 'Elevated',
      description: 'Noticeable floating effect',
      shadow: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
      use: 'Modals, dropdowns'
    },
    {
      level: 4,
      name: 'Floating',
      description: 'Maximum elevation and depth',
      shadow: '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
      use: 'Popovers, tooltips'
    },
  ];

  return (
    <SectionLayout
      id="floating"
      title="Floating Elements & Elevation"
      description="Create depth and visual hierarchy using shadows and transforms. Master the art of making elements appear to float above the page."
    >
      <div className="space-y-12">
        {/* Key Properties */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Key Properties</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Layered box-shadows</strong>
                <p className="text-white/60">Combine multiple shadows for realism</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Transform on hover</strong>
                <p className="text-white/60">translateY() for lift effect</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Smooth transitions</strong>
                <p className="text-white/60">250-300ms for natural feel</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Progressive elevation</strong>
                <p className="text-white/60">Use consistent scale (1, 2, 3, 4)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Elevation Levels */}
        <div>
          <h3 className="text-2xl text-white mb-6">📊 Elevation Levels</h3>
          
          <div className="space-y-8">
            {elevationLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-indigo-500 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    {level.level}
                  </div>
                  <div>
                    <h4 className="text-xl text-white">{level.name}</h4>
                    <p className="text-white/60">{level.description}</p>
                    <p className="text-white/40 mt-1">Best for: {level.use}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-12 flex items-center justify-center">
                  <div
                    className="bg-white rounded-2xl p-8 w-64 text-center"
                    style={{ boxShadow: level.shadow }}
                  >
                    <Layers className="mx-auto mb-3 text-slate-700" size={32} />
                    <div className="text-slate-900">Elevation {level.level}</div>
                    <div className="text-slate-500">{level.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hover Effects Demo */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Hover Lift Effects</h3>
          
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Box, title: 'Gentle Lift', lift: -4 },
                { icon: Package, title: 'Medium Lift', lift: -8 },
                { icon: Layers, title: 'Strong Lift', lift: -12 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: item.lift,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15)'
                  }}
                  className="bg-white rounded-2xl p-8 text-center cursor-pointer"
                  style={{
                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.3s'
                  }}
                >
                  <item.icon className="mx-auto mb-4 text-indigo-600" size={40} />
                  <h4 className="text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500">Hover over me</p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-slate-600 mt-8">
              Hover over the cards above to see different lift intensities
            </p>
          </div>
        </div>

        {/* Practical Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">🎯 Practical Examples</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)'
              }}
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-48" />
              <div className="p-6">
                <h4 className="text-slate-900 mb-2">Product Card</h4>
                <p className="text-slate-600 mb-4">
                  Elevates on hover to indicate interactivity
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl text-slate-900">$49</span>
                  <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Feature Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 transition-all duration-300"
              style={{
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)'
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                <Box className="text-white" size={28} />
              </div>
              <h4 className="text-slate-900 mb-2">Feature Highlight</h4>
              <p className="text-slate-600">
                Uses subtle elevation with hover effect to draw attention
              </p>
              <div className="mt-4 flex gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Example</h3>
          <CodeBlock code={codeExample} />
        </div>

        {/* Best Practices */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">💡 Best Practices</h3>
          <div className="space-y-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <strong className="text-white">Use consistent elevation scale</strong>
                <p className="text-white/60">Stick to 4-5 levels maximum for consistency</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <strong className="text-white">Higher elevation = higher importance</strong>
                <p className="text-white/60">Modals should be more elevated than cards</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <strong className="text-white">Smooth transitions</strong>
                <p className="text-white/60">Use 250-300ms for natural hover effects</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <strong className="text-white">Consider context</strong>
                <p className="text-white/60">Buttons on hover, cards by default, modals always elevated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}