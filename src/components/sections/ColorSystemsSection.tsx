import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Palette, Check, X } from 'lucide-react';
import { useState } from 'react';

export function ColorSystemsSection() {
  const [selectedPalette, setSelectedPalette] = useState(0);

  const codeExample = `:root {
  /* Primary Scale */
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6; /* Base */
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  /* Semantic Colors */
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;

  /* Neutral Scale */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  /* ... */
  --gray-900: #111827;
}`;

  const colorPalettes = [
    {
      name: 'Ocean Blue',
      primary: '#3b82f6',
      shades: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'],
      uses: 'Trust, professionalism, technology'
    },
    {
      name: 'Forest Green',
      primary: '#22c55e',
      shades: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'],
      uses: 'Growth, nature, health'
    },
    {
      name: 'Sunset Purple',
      primary: '#a855f7',
      shades: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87'],
      uses: 'Creativity, luxury, innovation'
    },
    {
      name: 'Coral Pink',
      primary: '#ec4899',
      shades: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9f1239', '#831843'],
      uses: 'Energy, passion, modern'
    },
  ];

  const semanticColors = [
    { name: 'Success', color: '#22c55e', bg: 'bg-green-500', use: 'Confirmations, completed actions' },
    { name: 'Warning', color: '#f59e0b', bg: 'bg-amber-500', use: 'Cautions, important notices' },
    { name: 'Error', color: '#ef4444', bg: 'bg-red-500', use: 'Errors, destructive actions' },
    { name: 'Info', color: '#3b82f6', bg: 'bg-blue-500', use: 'Information, help text' },
  ];

  return (
    <SectionLayout
      id="color"
      title="Modern Color Systems"
      description="Build professional, accessible color palettes that create beautiful and functional interfaces. Master color theory for digital products."
    >
      <div className="space-y-12">
        {/* 60-30-10 Rule */}
        <div>
          <h3 className="text-2xl text-white mb-6">🎨 The 60-30-10 Rule</h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="h-32 bg-slate-100 rounded-xl mb-3 flex items-center justify-center">
                  <span className="text-slate-700">60%</span>
                </div>
                <h4 className="text-white mb-2">Dominant Color</h4>
                <p className="text-white/60">Usually neutral - backgrounds, large areas</p>
              </div>
              <div>
                <div className="h-32 bg-blue-500 rounded-xl mb-3 flex items-center justify-center">
                  <span className="text-white">30%</span>
                </div>
                <h4 className="text-white mb-2">Secondary Color</h4>
                <p className="text-white/60">Brand color - cards, sections</p>
              </div>
              <div>
                <div className="h-32 bg-purple-500 rounded-xl mb-3 flex items-center justify-center">
                  <span className="text-white">10%</span>
                </div>
                <h4 className="text-white mb-2">Accent Color</h4>
                <p className="text-white/60">Call-to-action buttons, highlights</p>
              </div>
            </div>
            <p className="text-white/70 text-center">
              This classic design rule helps create balanced, harmonious color schemes
            </p>
          </div>
        </div>

        {/* Color Scales */}
        <div>
          <h3 className="text-2xl text-white mb-6">🌈 Color Scales</h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              {colorPalettes.map((palette, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPalette(index)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    selectedPalette === index
                      ? 'border-white bg-white/10'
                      : 'border-white/20 bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: palette.primary }}
                    />
                    <span className="text-white">{palette.name}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {colorPalettes[selectedPalette].shades.map((shade, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex-shrink-0 text-center"
                  >
                    <div
                      className="w-20 h-20 rounded-xl shadow-lg mb-2"
                      style={{ backgroundColor: shade }}
                    />
                    <div className="text-white/60">{(index) * 100 || 50}</div>
                    <div className="text-white/40 font-mono">{shade}</div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white mb-2">Best Used For</div>
                <div className="text-white/70">{colorPalettes[selectedPalette].uses}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Colors */}
        <div>
          <h3 className="text-2xl text-white mb-6">💡 Semantic Colors</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {semanticColors.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 ${item.bg} rounded-xl`}
                  />
                  <div>
                    <h4 className="text-white">{item.name}</h4>
                    <div className="text-white/60 font-mono">{item.color}</div>
                  </div>
                </div>
                <p className="text-white/70">{item.use}</p>

                {/* Example usage */}
                <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${item.color}20` }}>
                  <div className="flex items-center gap-2" style={{ color: item.color }}>
                    {item.name === 'Success' && <Check size={18} />}
                    {item.name === 'Error' && <X size={18} />}
                    <span>Example {item.name.toLowerCase()} message</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contrast Checker */}
        <div>
          <h3 className="text-2xl text-white mb-6">♿ Accessibility & Contrast</h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-slate-900 mb-2">Pass</div>
                <div className="text-4xl text-slate-900">AA</div>
                <div className="text-slate-600 mt-2">4.5:1 ratio</div>
                <div className="mt-4 text-slate-500">Normal text minimum</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-slate-900 mb-2">Better</div>
                <div className="text-4xl text-slate-900">AAA</div>
                <div className="text-slate-600 mt-2">7:1 ratio</div>
                <div className="mt-4 text-slate-500">Enhanced contrast</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-slate-900 mb-2">Large Text</div>
                <div className="text-4xl text-slate-900">AA</div>
                <div className="text-slate-600 mt-2">3:1 ratio</div>
                <div className="mt-4 text-slate-500">18pt+ or 14pt bold</div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-900">
                💡 <strong>Tip:</strong> Always test color combinations for accessibility. 
                Use tools like WebAIM Contrast Checker or browser DevTools.
              </p>
            </div>
          </div>
        </div>

        {/* Example Palettes */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Complete Color Systems</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Light theme example */}
            <div className="bg-white rounded-3xl p-8">
              <div className="mb-6">
                <h4 className="text-slate-900 mb-2">Light Theme</h4>
                <p className="text-slate-600">Clean and minimal</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg" />
                  <div className="flex-1">
                    <div className="text-slate-900">Primary</div>
                    <div className="text-slate-500">#3b82f6</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg border-2 border-slate-200" />
                  <div className="flex-1">
                    <div className="text-slate-900">Background</div>
                    <div className="text-slate-500">#f9fafb</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg" />
                  <div className="flex-1">
                    <div className="text-slate-900">Text</div>
                    <div className="text-slate-500">#111827</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark theme example */}
            <div className="bg-slate-900 rounded-3xl p-8">
              <div className="mb-6">
                <h4 className="text-white mb-2">Dark Theme</h4>
                <p className="text-slate-400">Modern and sleek</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg" />
                  <div className="flex-1">
                    <div className="text-white">Primary</div>
                    <div className="text-slate-400">#a855f7</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg border-2 border-slate-700" />
                  <div className="flex-1">
                    <div className="text-white">Background</div>
                    <div className="text-slate-400">#1e293b</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg" />
                  <div className="flex-1">
                    <div className="text-white">Text</div>
                    <div className="text-slate-400">#ffffff</div>
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

        {/* Tools */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🛠️ Recommended Tools</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">🎨</div>
              <div className="text-white mb-1">Coolors.co</div>
              <p className="text-white/60">Generate color palettes</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">🔍</div>
              <div className="text-white mb-1">WebAIM Contrast</div>
              <p className="text-white/60">Check accessibility</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">🌈</div>
              <div className="text-white mb-1">Adobe Color</div>
              <p className="text-white/60">Color wheel & harmony</p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
