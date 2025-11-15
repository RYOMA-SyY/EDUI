import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { ExternalLink, Palette, Type, Image, Code, Sparkles } from 'lucide-react';

export function ToolsResourcesSection() {
  const codeExample = `/* Resource Categories */
.tool-category {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.tool-card {
  padding: 20px;
  border-radius: 12px;
  background: white;
  border: 1px solid #e0e0e0;
  transition: all 0.2s;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}`;

  const toolCategories = [
    {
      name: 'Color Tools',
      icon: Palette,
      tools: [
        { name: 'Coolors', description: 'Palette generator', url: 'https://coolors.co' },
        { name: 'Adobe Color', description: 'Color wheel', url: 'https://color.adobe.com' },
        { name: 'WebAIM', description: 'Contrast checker', url: 'https://webaim.org/resources/contrastchecker' },
        { name: 'ColorBox', description: 'Color scale builder', url: 'https://www.colorbox.io' },
      ]
    },
    {
      name: 'Typography',
      icon: Type,
      tools: [
        { name: 'Google Fonts', description: 'Free web fonts', url: 'https://fonts.google.com' },
        { name: 'Font Pair', description: 'Font combinations', url: 'https://www.fontpair.co' },
        { name: 'Type Scale', description: 'Typography calculator', url: 'https://type-scale.com' },
        { name: 'Fontjoy', description: 'AI font pairing', url: 'https://fontjoy.com' },
      ]
    },
    {
      name: 'Gradients & Backgrounds',
      icon: Image,
      tools: [
        { name: 'Meshgrad', description: 'Mesh gradient generator', url: 'https://meshgrad.com' },
        { name: 'Haikei', description: 'SVG shape generator', url: 'https://haikei.app' },
        { name: 'UIGradients', description: 'Gradient collection', url: 'https://uigradients.com' },
        { name: 'Hero Patterns', description: 'SVG patterns', url: 'https://heropatterns.com' },
      ]
    },
    {
      name: 'Code & Generators',
      icon: Code,
      tools: [
        { name: 'Glassmorphism.com', description: 'Glass effect generator', url: 'https://glassmorphism.com' },
        { name: 'Box-shadow.dev', description: 'Shadow generator', url: 'https://box-shadow.dev' },
        { name: 'CSS Grid Generator', description: 'Grid builder', url: 'https://cssgrid-generator.netlify.app' },
        { name: 'Clippy', description: 'Clip-path maker', url: 'https://bennettfeely.com/clippy' },
      ]
    },
    {
      name: 'Component Libraries',
      icon: Sparkles,
      tools: [
        { name: 'ShadCN UI', description: 'Copy-paste components', url: 'https://ui.shadcn.com' },
        { name: 'Chakra UI', description: 'Accessible components', url: 'https://chakra-ui.com' },
        { name: 'Radix UI', description: 'Unstyled primitives', url: 'https://www.radix-ui.com' },
        { name: 'Headless UI', description: 'Tailwind components', url: 'https://headlessui.com' },
      ]
    },
  ];

  return (
    <SectionLayout
      id="tools"
      title="Tools & Resources"
      description="Discover the best tools and resources for modern web design. From color palettes to component libraries, everything you need in one place."
    >
      <div className="space-y-12">
        {/* Key Principles */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Resource Categories</h3>
          <p className="text-white/70">
            This section provides a comprehensive list of tools and resources organized by category. 
            Each tool has been carefully selected for its quality and usefulness in modern web development.
          </p>
        </div>

        {/* Tool Categories */}
        <div>
          <h3 className="text-2xl text-white mb-6">🛠️ Essential Tools</h3>
          
          <div className="space-y-8">
            {toolCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <category.icon className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{category.name}</h4>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.a
                      key={toolIndex}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/50 transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-semibold text-slate-900">{tool.name}</h5>
                            <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <p className="text-sm text-slate-600">{tool.description}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference */}
        <div>
          <h3 className="text-2xl text-white mb-6">📋 Quick Reference</h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-3">Starting a Project</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>1. Choose palette → Coolors</li>
                  <li>2. Select fonts → Google Fonts</li>
                  <li>3. Pick icons → Lucide</li>
                  <li>4. Choose framework → Tailwind</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Design Phase</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>1. Check contrast → WebAIM</li>
                  <li>2. Generate gradients → Meshgrad</li>
                  <li>3. Create patterns → Haikei</li>
                  <li>4. Build components → ShadCN</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Development</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>1. Generate shadows → Box-shadow.dev</li>
                  <li>2. Create grids → CSS Grid Generator</li>
                  <li>3. Test accessibility → WAVE</li>
                  <li>4. Optimize → PurgeCSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Inspiration Platforms */}
        <div>
          <h3 className="text-2xl text-white mb-6">🎨 Design Inspiration</h3>
          
          <div className="bg-white rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Dribbble', description: 'Designer showcase', url: 'https://dribbble.com' },
                { name: 'Behance', description: 'Creative portfolios', url: 'https://behance.net' },
                { name: 'Awwwards', description: 'Award-winning sites', url: 'https://awwwards.com' },
                { name: 'Mobbin', description: 'Mobile UI patterns', url: 'https://mobbin.com' },
                { name: 'UI Design Daily', description: 'Daily components', url: 'https://uidesigndaily.com' },
                { name: 'Godly', description: 'Curated web design', url: 'https://godly.website' },
              ].map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="p-4 border border-slate-200 rounded-lg hover:border-purple-500 hover:bg-purple-50/50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">{platform.name}</h5>
                      <p className="text-sm text-slate-600">{platform.description}</p>
                    </div>
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Examples</h3>
          <CodeBlock code={codeExample} language="css" />
        </div>
      </div>
    </SectionLayout>
  );
}

