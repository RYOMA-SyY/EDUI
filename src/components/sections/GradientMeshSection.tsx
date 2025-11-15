import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { useState } from 'react';
import { Palette } from 'lucide-react';

export function GradientMeshSection() {
  const [selectedGradient, setSelectedGradient] = useState(0);

  const codeExample = `.gradient-mesh {
  background: 
    radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 50%),
    radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
    radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
    radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
    radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
}

/* With blur for smoother transitions */
.gradient-mesh-blur {
  background: /* same as above */;
  filter: blur(80px);
}

/* Animated gradient */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.gradient-animated {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}`;

  const gradients = [
    {
      name: 'Sunset Vibes',
      class: 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600',
      colors: ['#FB923C', '#EC4899', '#9333EA']
    },
    {
      name: 'Ocean Breeze',
      class: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
      colors: ['#22D3EE', '#3B82F6', '#4F46E5']
    },
    {
      name: 'Forest Dream',
      class: 'bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600',
      colors: ['#34D399', '#22C55E', '#0D9488']
    },
    {
      name: 'Aurora',
      class: 'bg-gradient-to-br from-purple-400 via-pink-400 to-rose-500',
      colors: ['#C084FC', '#F472B6', '#F43F5E']
    },
  ];

  const meshExamples = [
    {
      title: 'Multi-Color Mesh',
      style: {
        background: `
          radial-gradient(at 27% 37%, rgba(59, 130, 246, 0.5) 0px, transparent 50%),
          radial-gradient(at 97% 21%, rgba(34, 197, 94, 0.5) 0px, transparent 50%),
          radial-gradient(at 52% 99%, rgba(239, 68, 68, 0.5) 0px, transparent 50%),
          radial-gradient(at 10% 29%, rgba(168, 85, 247, 0.5) 0px, transparent 50%),
          radial-gradient(at 97% 96%, rgba(251, 146, 60, 0.4) 0px, transparent 50%),
          radial-gradient(at 33% 50%, rgba(99, 102, 241, 0.4) 0px, transparent 50%),
          radial-gradient(at 79% 53%, rgba(236, 72, 153, 0.4) 0px, transparent 50%)
        `,
      }
    },
    {
      title: 'Soft Pastel Mesh',
      style: {
        background: `
          radial-gradient(at 40% 20%, rgba(253, 224, 71, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(251, 191, 36, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(244, 114, 182, 0.3) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(167, 139, 250, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 100%, rgba(96, 165, 250, 0.3) 0px, transparent 50%),
          radial-gradient(at 0% 0%, rgba(134, 239, 172, 0.3) 0px, transparent 50%)
        `,
      }
    },
    {
      title: 'Vibrant Energy',
      style: {
        background: `
          radial-gradient(at 10% 10%, rgba(239, 68, 68, 0.6) 0px, transparent 50%),
          radial-gradient(at 90% 10%, rgba(234, 179, 8, 0.6) 0px, transparent 50%),
          radial-gradient(at 50% 50%, rgba(168, 85, 247, 0.6) 0px, transparent 50%),
          radial-gradient(at 10% 90%, rgba(59, 130, 246, 0.6) 0px, transparent 50%),
          radial-gradient(at 90% 90%, rgba(236, 72, 153, 0.6) 0px, transparent 50%)
        `,
      }
    },
  ];

  return (
    <SectionLayout
      id="gradient"
      title="Gradient Meshes"
      description="Create organic, multi-color gradients that add depth and visual interest to your designs. Perfect for backgrounds and glassmorphic interfaces."
    >
      <div className="space-y-12">
        {/* Key Properties */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Key Properties</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Multiple radial gradients</strong>
                <p className="text-white/60">Layer 5-7 gradients for rich effect</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Strategic positioning</strong>
                <p className="text-white/60">Place gradients at different points</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Soft transitions</strong>
                <p className="text-white/60">Use transparency for smooth blending</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Optional blur</strong>
                <p className="text-white/60">Add filter: blur() for organic feel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo - Mesh Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Live Mesh Examples</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {meshExamples.map((mesh, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-3xl overflow-hidden cursor-pointer"
                style={mesh.style}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-3">
                    <h4 className="text-white">{mesh.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Gradient Tool */}
        <div>
          <h3 className="text-2xl text-white mb-6">🎨 Interactive Gradient Explorer</h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Preview */}
              <div>
                <h4 className="text-white mb-4">Preview</h4>
                <motion.div
                  key={selectedGradient}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${gradients[selectedGradient].class} h-64 rounded-2xl shadow-2xl`}
                />
              </div>

              {/* Controls */}
              <div>
                <h4 className="text-white mb-4">Select Gradient</h4>
                <div className="space-y-3">
                  {gradients.map((gradient, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedGradient(index)}
                      className={`w-full p-4 rounded-xl border-2 transition-all ${
                        selectedGradient === index
                          ? 'border-white bg-white/10'
                          : 'border-white/20 bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`${gradient.class} w-12 h-12 rounded-lg`} />
                        <div className="text-left">
                          <div className="text-white">{gradient.name}</div>
                          <div className="flex gap-1 mt-1">
                            {gradient.colors.map((color, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded border border-white/20"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* With Glassmorphism */}
        <div>
          <h3 className="text-2xl text-white mb-6">💎 Combined with Glassmorphism</h3>
          
          <div className="relative bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500 rounded-3xl p-12 overflow-hidden">
            {/* Mesh overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(at 20% 30%, rgba(255, 255, 255, 0.2) 0px, transparent 50%),
                  radial-gradient(at 80% 20%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
                  radial-gradient(at 70% 80%, rgba(236, 72, 153, 0.3) 0px, transparent 50%)
                `,
              }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8">
                <Palette className="text-white mb-4" size={32} />
                <h4 className="text-2xl text-white mb-3">Beautiful Combination</h4>
                <p className="text-white/80">
                  Gradient meshes provide the perfect vibrant background for glassmorphic elements to shine.
                </p>
              </div>

              <div className="bg-black/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8">
                <div className="text-white/90">
                  <div className="text-4xl mb-2">100%</div>
                  <div className="text-white/70">Visual Impact</div>
                  <div className="mt-4 text-white/60">
                    Creates depth and visual hierarchy effortlessly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Example</h3>
          <CodeBlock code={codeExample} />
        </div>

        {/* Use Cases */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🎯 Perfect Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl mb-3">🎨</div>
              <div className="text-white mb-2">Hero Backgrounds</div>
              <p className="text-white/60">Eye-catching landing sections</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl mb-3">💎</div>
              <div className="text-white mb-2">Glass UI Backdrops</div>
              <p className="text-white/60">Perfect foundation for glass</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl mb-3">✨</div>
              <div className="text-white mb-2">Brand Pages</div>
              <p className="text-white/60">Unique brand identity</p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
