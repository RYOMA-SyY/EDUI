import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Play, Pause, SkipForward, Volume2, AlertTriangle, Check, X } from 'lucide-react';
import { useState } from 'react';

export function NeumorphismSection() {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const codeExample = `.neomorphic {
  background: #e0e5ec;
  border-radius: 16px;
  box-shadow: 
    9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

/* Pressed/Inset state */
.neomorphic-inset {
  box-shadow: 
    inset 6px 6px 12px rgba(163, 177, 198, 0.6),
    inset -6px -6px 12px rgba(255, 255, 255, 0.5);
}

/* Button example */
.neomorphic-button {
  background: #e0e5ec;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  box-shadow: 
    6px 6px 12px rgba(163, 177, 198, 0.6),
    -6px -6px 12px rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
}

.neomorphic-button:active {
  box-shadow: 
    inset 4px 4px 8px rgba(163, 177, 198, 0.6),
    inset -4px -4px 8px rgba(255, 255, 255, 0.5);
}`;

  return (
    <SectionLayout
      id="neumorphism"
      title="Neumorphism"
      description="Soft UI design that creates a subtle, extruded appearance. Elements appear to gently rise from or sink into the background."
    >
      <div className="space-y-12">
        {/* Key Properties */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Key Properties</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Double box-shadows</strong>
                <p className="text-white/60">Light shadow + dark shadow for depth</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Monochromatic backgrounds</strong>
                <p className="text-white/60">Element and background must match</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Soft, extruded look</strong>
                <p className="text-white/60">Elements appear to rise from surface</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Inset variations</strong>
                <p className="text-white/60">For pressed or active states</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Live Demo</h3>
          
          {/* Neumorphic container with light background */}
          <div className="bg-[#e0e5ec] rounded-3xl p-8 md:p-12">
            {/* Music Player Example */}
            <div className="max-w-md mx-auto mb-12">
              <div 
                className="bg-[#e0e5ec] rounded-3xl p-8"
                style={{
                  boxShadow: '20px 20px 40px rgba(163, 177, 198, 0.6), -20px -20px 40px rgba(255, 255, 255, 0.5)'
                }}
              >
                <div className="text-center mb-8">
                  <h4 className="text-2xl text-slate-700 mb-2">Music Player</h4>
                  <p className="text-slate-500">Soft UI Design</p>
                </div>

                {/* Album art placeholder */}
                <div 
                  className="w-48 h-48 mx-auto mb-8 bg-[#e0e5ec] rounded-2xl flex items-center justify-center"
                  style={{
                    boxShadow: 'inset 8px 8px 16px rgba(163, 177, 198, 0.6), inset -8px -8px 16px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <div className="text-slate-400">♪</div>
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                  <div 
                    className="h-2 bg-[#e0e5ec] rounded-full"
                    style={{
                      boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    <div className="h-full w-1/3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  </div>
                  <div className="flex justify-between mt-2 text-slate-500">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                  {[
                    { icon: SkipForward, rotation: 'rotate-180' },
                    { icon: Play, size: 56 },
                    { icon: SkipForward },
                  ].map((control, index) => (
                    <motion.button
                      key={index}
                      whileTap={{ scale: 0.95 }}
                      className={`${control.size ? 'w-14 h-14' : 'w-12 h-12'} bg-[#e0e5ec] rounded-full flex items-center justify-center text-slate-600 transition-all ${control.rotation || ''}`}
                      style={{
                        boxShadow: activeButton === index
                          ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.5)'
                          : '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.5)'
                      }}
                      onMouseDown={() => setActiveButton(index)}
                      onMouseUp={() => setActiveButton(null)}
                      onMouseLeave={() => setActiveButton(null)}
                    >
                      <control.icon size={control.size ? 28 : 20} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Button Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Play, label: 'Play' },
                { icon: Pause, label: 'Pause' },
                { icon: Volume2, label: 'Volume' },
                { icon: SkipForward, label: 'Next' },
              ].map((btn, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#e0e5ec] rounded-2xl p-6 flex flex-col items-center gap-3 text-slate-700 transition-all"
                  style={{
                    boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <btn.icon size={28} />
                  <span>{btn.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Input examples */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <input
                type="text"
                placeholder="Neomorphic Input"
                className="px-6 py-4 bg-[#e0e5ec] rounded-xl text-slate-700 placeholder:text-slate-400 border-none outline-none"
                style={{
                  boxShadow: 'inset 6px 6px 12px rgba(163, 177, 198, 0.6), inset -6px -6px 12px rgba(255, 255, 255, 0.5)'
                }}
              />
              <button
                className="px-6 py-4 bg-[#e0e5ec] rounded-xl text-slate-700 transition-all"
                style={{
                  boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.5)'
                }}
              >
                Submit Button
              </button>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Example</h3>
          <CodeBlock code={codeExample} />
        </div>

        {/* Limitations Warning */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-amber-400 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl text-amber-400 mb-3">⚠️ Important Limitations</h3>
              <ul className="space-y-2 text-white/80">
                <li>• <strong>Accessibility Issues:</strong> Low contrast can be hard to see for users with visual impairments</li>
                <li>• <strong>No Dark Mode:</strong> Neumorphism only works well on light backgrounds</li>
                <li>• <strong>Limited Use Cases:</strong> Best for simple, minimal interfaces</li>
                <li>• <strong>Overuse Warning:</strong> Can quickly become visually overwhelming</li>
              </ul>
            </div>
          </div>
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
                <li>• Use for simple, minimal interfaces</li>
                <li>• Keep to light mode only</li>
                <li>• Use for calculators, music players</li>
                <li>• Ensure element = background color</li>
                <li>• Add subtle color for important actions</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-red-400">
                <X size={24} />
                <h4 className="text-xl">Don't Do This</h4>
              </div>
              <ul className="space-y-2 text-white/80">
                <li>• Use for complex interfaces</li>
                <li>• Attempt dark mode neumorphism</li>
                <li>• Use different element/bg colors</li>
                <li>• Overuse on every element</li>
                <li>• Ignore accessibility concerns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🎯 Best Used For</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">🧮</div>
              <div className="text-white">Calculators</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">🎵</div>
              <div className="text-white">Music Players</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-white">Minimal Widgets</div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
