import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Type } from 'lucide-react';

export function TypographySection() {
  const codeExample = `/* Type Scale */
h1 { font-size: 3.75rem; /* 60px */ line-height: 1.2; }
h2 { font-size: 3rem;    /* 48px */ line-height: 1.2; }
h3 { font-size: 2.25rem; /* 36px */ line-height: 1.3; }
h4 { font-size: 1.875rem;/* 30px */ line-height: 1.3; }
h5 { font-size: 1.5rem;  /* 24px */ line-height: 1.4; }
h6 { font-size: 1.25rem; /* 20px */ line-height: 1.4; }
p  { font-size: 1rem;    /* 16px */ line-height: 1.6; }

/* Font Pairing */
.heading {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 0;
}

/* Responsive Typography */
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
}`;

  const fontPairings = [
    {
      name: 'Modern Sans',
      heading: { family: 'Inter', sample: 'The Quick Brown Fox' },
      body: { family: 'Inter', sample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    },
    {
      name: 'Classic Serif',
      heading: { family: 'Georgia, serif', sample: 'The Quick Brown Fox' },
      body: { family: 'system-ui', sample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    },
    {
      name: 'Tech Mono',
      heading: { family: 'system-ui', sample: 'The Quick Brown Fox' },
      body: { family: '"Courier New", monospace', sample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    },
  ];

  return (
    <SectionLayout
      id="typography"
      title="Typography & Type Scale"
      description="Create beautiful, readable text hierarchies that guide users through your content. Typography is the foundation of great design."
    >
      <div className="space-y-12">
        {/* Type Scale Visual */}
        <div>
          <h3 className="text-2xl text-white mb-6">📏 Type Scale</h3>
          
          <div className="bg-white rounded-3xl p-12">
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-200">
                <div className="text-slate-500 mb-2">Heading 1 - 60px</div>
                <h1 className="text-slate-900">The Quick Brown Fox</h1>
              </div>
              <div className="pb-4 border-b border-slate-200">
                <div className="text-slate-500 mb-2">Heading 2 - 48px</div>
                <h2 className="text-slate-900">The Quick Brown Fox</h2>
              </div>
              <div className="pb-4 border-b border-slate-200">
                <div className="text-slate-500 mb-2">Heading 3 - 36px</div>
                <h3 className="text-slate-900">The Quick Brown Fox</h3>
              </div>
              <div className="pb-4 border-b border-slate-200">
                <div className="text-slate-500 mb-2">Heading 4 - 30px</div>
                <h4 className="text-slate-900">The Quick Brown Fox</h4>
              </div>
              <div className="pb-4 border-b border-slate-200">
                <div className="text-slate-500 mb-2">Heading 5 - 24px</div>
                <h5 className="text-slate-900">The Quick Brown Fox</h5>
              </div>
              <div className="pb-4 border-b border-slate-200">
                <div className="text-slate-500 mb-2">Heading 6 - 20px</div>
                <h6 className="text-slate-900">The Quick Brown Fox</h6>
              </div>
              <div>
                <div className="text-slate-500 mb-2">Body - 16px</div>
                <p className="text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Font Pairings */}
        <div>
          <h3 className="text-2xl text-white mb-6">✍️ Font Pairing Examples</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {fontPairings.map((pairing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Type size={20} className="text-slate-400" />
                    <span className="text-slate-500">{pairing.name}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-slate-400 mb-2">Heading</div>
                    <div
                      className="text-2xl text-slate-900"
                      style={{ fontFamily: pairing.heading.family }}
                    >
                      {pairing.heading.sample}
                    </div>
                    <div className="text-slate-400 mt-1">{pairing.heading.family}</div>
                  </div>

                  <div>
                    <div className="text-slate-400 mb-2">Body</div>
                    <div
                      className="text-slate-700"
                      style={{ fontFamily: pairing.body.family }}
                    >
                      {pairing.body.sample}
                    </div>
                    <div className="text-slate-400 mt-1">{pairing.body.family}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Line Height Rules */}
        <div>
          <h3 className="text-2xl text-white mb-6">📐 Line Height Guidelines</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-slate-900 mb-4">Tight (1.2)</div>
              <h3 className="text-slate-900 mb-4" style={{ lineHeight: 1.2 }}>
                Large Display Headings
              </h3>
              <p className="text-slate-600">Use for large headings where text rarely wraps</p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-slate-900 mb-4">Normal (1.5)</div>
              <p className="text-slate-700 mb-4" style={{ lineHeight: 1.5 }}>
                This is perfect for shorter paragraphs and UI text that needs balance.
              </p>
              <p className="text-slate-600">Default for most UI elements</p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-slate-900 mb-4">Relaxed (1.75)</div>
              <p className="text-slate-700 mb-4" style={{ lineHeight: 1.75 }}>
                Longer articles and documentation benefit from generous line spacing for improved readability.
              </p>
              <p className="text-slate-600">Best for long-form content</p>
            </div>
          </div>
        </div>

        {/* Responsive Typography */}
        <div>
          <h3 className="text-2xl text-white mb-6">📱 Responsive Typography</h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white mb-4">Mobile First Approach</h4>
                <div className="bg-white/10 rounded-xl p-4 space-y-3">
                  <div className="text-white/70">
                    <span className="text-purple-400">Base:</span> 16px (1rem)
                  </div>
                  <div className="text-white/70">
                    <span className="text-purple-400">H1:</span> 2.5rem (40px)
                  </div>
                  <div className="text-white/70">
                    <span className="text-purple-400">H2:</span> 2rem (32px)
                  </div>
                  <div className="text-white/70">
                    <span className="text-purple-400">H3:</span> 1.75rem (28px)
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white mb-4">Desktop Scale Up</h4>
                <div className="bg-white/10 rounded-xl p-4 space-y-3">
                  <div className="text-white/70">
                    <span className="text-blue-400">Base:</span> 16px (same)
                  </div>
                  <div className="text-white/70">
                    <span className="text-blue-400">H1:</span> 3.75rem (60px)
                  </div>
                  <div className="text-white/70">
                    <span className="text-blue-400">H2:</span> 3rem (48px)
                  </div>
                  <div className="text-white/70">
                    <span className="text-blue-400">H3:</span> 2.25rem (36px)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Font Weight Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">💪 Font Weights</h3>
          
          <div className="bg-white rounded-3xl p-12">
            <div className="space-y-4">
              {[
                { weight: 300, name: 'Light', use: 'Large headings, elegant feel' },
                { weight: 400, name: 'Regular', use: 'Body text, most content' },
                { weight: 500, name: 'Medium', use: 'Subheadings, emphasis' },
                { weight: 600, name: 'Semibold', use: 'Headings, important labels' },
                { weight: 700, name: 'Bold', use: 'Major headings, strong emphasis' },
              ].map((item) => (
                <div key={item.weight} className="flex items-center gap-6 pb-4 border-b border-slate-200 last:border-0">
                  <div className="w-32 text-slate-500">{item.weight} - {item.name}</div>
                  <div className="flex-1 text-slate-900 text-2xl" style={{ fontWeight: item.weight }}>
                    The Quick Brown Fox
                  </div>
                  <div className="text-slate-400 hidden md:block">{item.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Example</h3>
          <CodeBlock code={codeExample} />
        </div>

        {/* Best Practices */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">✅ Best Practices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-green-400">✓</div>
                <div>
                  <strong className="text-white">Use rem units</strong>
                  <p className="text-white/60">Respects user font size preferences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400">✓</div>
                <div>
                  <strong className="text-white">Minimum 16px body text</strong>
                  <p className="text-white/60">Ensures readability on all devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400">✓</div>
                <div>
                  <strong className="text-white">Limit font families</strong>
                  <p className="text-white/60">2-3 maximum for consistency</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-green-400">✓</div>
                <div>
                  <strong className="text-white">Adequate line length</strong>
                  <p className="text-white/60">45-75 characters per line</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400">✓</div>
                <div>
                  <strong className="text-white">Hierarchy through size</strong>
                  <p className="text-white/60">Clear visual distinction between levels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400">✓</div>
                <div>
                  <strong className="text-white">System font stack</strong>
                  <p className="text-white/60">Fast loading, native feel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔗 Font Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">🔤</div>
              <div className="text-white mb-1">Google Fonts</div>
              <p className="text-white/60">Free, high-quality fonts</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">✨</div>
              <div className="text-white mb-1">Font Share</div>
              <p className="text-white/60">Curated free fonts</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">📚</div>
              <div className="text-white mb-1">Type Scale</div>
              <p className="text-white/60">Generate type scales</p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
