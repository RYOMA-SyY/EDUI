import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Maximize2 } from 'lucide-react';

export function SpacingSection() {
  const codeExample = `/* 8px Base Unit System */
:root {
  --space-1: 0.25rem;  /* 4px  */
  --space-2: 0.5rem;   /* 8px  */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
}

/* Usage Examples */
.card {
  padding: var(--space-6);    /* 24px */
  margin-bottom: var(--space-8); /* 32px */
}

.button {
  padding: var(--space-3) var(--space-6); /* 12px 24px */
  gap: var(--space-2);                   /* 8px */
}

/* Responsive Breakpoints */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }`;

  const spacingScale = [
    { size: 4, name: '1', use: 'Tiny gaps, icon spacing' },
    { size: 8, name: '2', use: 'Tight spacing, list items' },
    { size: 12, name: '3', use: 'Button padding, form fields' },
    { size: 16, name: '4', use: 'Small cards, compact layouts' },
    { size: 24, name: '6', use: 'Standard card padding' },
    { size: 32, name: '8', use: 'Section spacing, large cards' },
    { size: 48, name: '12', use: 'Component separation' },
    { size: 64, name: '16', use: 'Large section gaps' },
  ];

  return (
    <SectionLayout
      id="spacing"
      title="Spacing & Layout Systems"
      description="Master the 8px base unit system to create consistent, harmonious layouts. Proper spacing is the invisible foundation of great design."
    >
      <div className="space-y-12">
        {/* Spacing Scale Visual */}
        <div>
          <h3 className="text-2xl text-white mb-6">📏 The 8px Scale</h3>
          
          <div className="bg-white rounded-3xl p-12">
            <div className="space-y-6">
              {spacingScale.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-24 text-slate-500">
                    <div className="font-mono">{item.size}px</div>
                    <div className="text-slate-400">space-{item.name}</div>
                  </div>
                  
                  <div
                    className="bg-purple-500 h-12 rounded transition-all"
                    style={{ width: `${item.size}px` }}
                  />
                  
                  <div className="flex-1 text-slate-600">
                    {item.use}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-blue-900">
                💡 <strong>The 8px System:</strong> All spacing values are multiples of 4 or 8. 
                This creates visual rhythm and makes it easy to build consistent layouts.
              </p>
            </div>
          </div>
        </div>

        {/* When to Use Each */}
        <div>
          <h3 className="text-2xl text-white mb-6">🎯 Spacing Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-slate-900 mb-6">Tight Spacing (4-12px)</h4>
              <div className="space-y-4">
                <div className="bg-slate-100 rounded-lg p-3">
                  <div className="flex items-center gap-1">
                    <Maximize2 size={16} className="text-slate-600" />
                    <span className="text-slate-700">Icon + Text</span>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-3">
                  <div className="space-y-2">
                    <div className="text-slate-700">List Item 1</div>
                    <div className="text-slate-700">List Item 2</div>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg">
                  <button className="px-4 py-2 text-slate-700">Button Text</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-slate-900 mb-6">Medium Spacing (16-32px)</h4>
              <div className="space-y-6">
                <div className="bg-slate-100 rounded-lg p-6">
                  <h5 className="text-slate-900 mb-3">Card Title</h5>
                  <p className="text-slate-600">Card content with comfortable padding</p>
                </div>
                <div className="bg-slate-100 rounded-lg p-6">
                  <div className="text-slate-700">Form Section</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-slate-900 mb-6">Large Spacing (48-64px)</h4>
              <div className="space-y-12">
                <div className="bg-slate-100 rounded-lg p-6">
                  <div className="text-slate-700">Section 1</div>
                </div>
                <div className="bg-slate-100 rounded-lg p-6">
                  <div className="text-slate-700">Section 2</div>
                </div>
              </div>
              <p className="text-slate-500 mt-6">Major section separation</p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-slate-900 mb-6">Extra Large (80-96px)</h4>
              <div className="space-y-20">
                <div className="bg-slate-100 rounded-lg p-6">
                  <div className="text-slate-700">Hero Section</div>
                </div>
                <div className="bg-slate-100 rounded-lg p-6">
                  <div className="text-slate-700">Next Section</div>
                </div>
              </div>
              <p className="text-slate-500 mt-6">Page-level spacing</p>
            </div>
          </div>
        </div>

        {/* Layout Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">🎨 Layout Examples</h3>
          
          <div className="space-y-6">
            {/* Grid Layout */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-4">CSS Grid Layout</h4>
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center">
                    Item {item}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 mt-4">24px gaps between grid items</p>
            </div>

            {/* Flexbox Layout */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-4">Flexbox Layout</h4>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white text-center">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 mt-4">16px gaps with flexbox</p>
            </div>
          </div>
        </div>

        {/* Container Padding */}
        <div>
          <h3 className="text-2xl text-white mb-6">📦 Container Padding</h3>
          
          <div className="bg-white rounded-3xl p-1">
            <div className="border-4 border-purple-500 rounded-2xl p-6">
              <div className="border-4 border-blue-500 rounded-2xl p-6">
                <div className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl p-8 text-white text-center">
                  <p className="mb-2">Content Area</p>
                  <p className="text-white/80">Inner: 32px (space-8)</p>
                  <p className="text-white/80">Middle: 24px (space-6)</p>
                  <p className="text-white/80">Outer: 24px (space-6)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Breakpoints */}
        <div>
          <h3 className="text-2xl text-white mb-6">📱 Responsive Breakpoints</h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { name: 'sm', size: '640px', device: '📱' },
                { name: 'md', size: '768px', device: '📱' },
                { name: 'lg', size: '1024px', device: '💻' },
                { name: 'xl', size: '1280px', device: '🖥️' },
                { name: '2xl', size: '1536px', device: '🖥️' },
              ].map((bp) => (
                <div key={bp.name} className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{bp.device}</div>
                  <div className="text-white">{bp.name}</div>
                  <div className="text-white/60">{bp.size}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white/10 rounded-xl p-6">
              <h4 className="text-white mb-3">Mobile-First Approach</h4>
              <p className="text-white/70 mb-3">
                Start with mobile styles, then add breakpoints for larger screens:
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-white/90">
                <div>/* Mobile first - no breakpoint */</div>
                <div className="text-purple-400">.container {'{ padding: 1rem; }'}</div>
                <div className="mt-2">/* Tablet and up */</div>
                <div className="text-blue-400">@media (min-width: 768px) {'{'}</div>
                <div className="text-blue-400 ml-4">.container {'{ padding: 2rem; }'}</div>
                <div className="text-blue-400">{'}'}</div>
              </div>
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
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Use consistent scale</strong>
                  <p className="text-white/60">Stick to 4px or 8px base units</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Group related content</strong>
                  <p className="text-white/60">Less spacing = more relationship</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Breathing room</strong>
                  <p className="text-white/60">Don't be afraid of white space</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Responsive spacing</strong>
                  <p className="text-white/60">Reduce spacing on mobile</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Visual hierarchy</strong>
                  <p className="text-white/60">More space = more importance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Container max-width</strong>
                  <p className="text-white/60">Limit line length for readability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
