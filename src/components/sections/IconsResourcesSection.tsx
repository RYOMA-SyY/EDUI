import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Heart, Star, Home, Settings, User, Mail, Search, Bell, Download, Upload } from 'lucide-react';

export function IconsResourcesSection() {
  const codeExample = `/* Icon Implementation Rules */
.icon {
  width: 24px;
  height: 24px;
  stroke-width: 2;
}

/* Standard Sizes */
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }

/* Icon with Text */
.icon-text {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Icon Button */
.icon-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s;
}

.icon-button:hover {
  background: rgba(0, 0, 0, 0.05);
}`;

  const iconLibraries = [
    { name: 'Lucide Icons', description: 'Modern, clean, consistent', url: 'https://lucide.dev' },
    { name: 'Heroicons', description: "Tailwind's official icon set", url: 'https://heroicons.com' },
    { name: 'Phosphor Icons', description: 'Flexible, customizable', url: 'https://phosphoricons.com' },
    { name: 'Material Icons', description: "Google's comprehensive set", url: 'https://fonts.google.com/icons' },
    { name: 'Remix Icon', description: 'Open source, extensive', url: 'https://remixicon.com' },
    { name: 'Font Awesome', description: 'Classic, widely supported', url: 'https://fontawesome.com' },
  ];

  return (
    <SectionLayout
      id="icons"
      title="Icons & Resources"
      description="Choose the right icon library for your project. Learn icon implementation best practices and discover the best resources."
    >
      <div className="space-y-12">
        {/* Key Principles */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Icon Best Practices</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Consistent Style</strong>
                <p className="text-white/60">Use one icon library per project</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Standard Sizes</strong>
                <p className="text-white/60">16px, 20px, 24px, 32px</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Stroke Width</strong>
                <p className="text-white/60">Consistent stroke (1.5px or 2px)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Accessibility</strong>
                <p className="text-white/60">Always include ARIA labels</p>
              </div>
            </div>
          </div>
        </div>

        {/* Icon Sizes */}
        <div>
          <h3 className="text-2xl text-white mb-6">📏 Icon Sizes</h3>
          
          <div className="bg-white rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <Home size={16} className="text-slate-700 mx-auto mb-2" />
                <span className="text-xs text-slate-600">16px</span>
              </div>
              <div className="text-center">
                <Home size={20} className="text-slate-700 mx-auto mb-2" />
                <span className="text-xs text-slate-600">20px</span>
              </div>
              <div className="text-center">
                <Home size={24} className="text-slate-700 mx-auto mb-2" />
                <span className="text-xs text-slate-600">24px</span>
              </div>
              <div className="text-center">
                <Home size={32} className="text-slate-700 mx-auto mb-2" />
                <span className="text-xs text-slate-600">32px</span>
              </div>
              <div className="text-center">
                <Home size={40} className="text-slate-700 mx-auto mb-2" />
                <span className="text-xs text-slate-600">40px</span>
              </div>
            </div>
          </div>
        </div>

        {/* Icon Usage Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Icon Usage Examples</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Icon with Text */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-6 font-semibold">Icon with Text</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Home className="text-slate-600" size={20} />
                  <span className="text-slate-700">Home</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="text-slate-600" size={20} />
                  <span className="text-slate-700">Profile</span>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="text-slate-600" size={20} />
                  <span className="text-slate-700">Settings</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-slate-600" size={20} />
                  <span className="text-slate-700">Messages</span>
                </div>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-6 font-semibold">Icon Buttons</h4>
              <div className="flex flex-wrap gap-3">
                <button className="w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  <Search className="text-slate-700" size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                  <Bell className="text-blue-700" size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
                  <Download className="text-green-700" size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors">
                  <Upload className="text-purple-700" size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Icon Library Recommendations */}
          <div className="bg-white rounded-3xl p-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Recommended Icon Libraries</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {iconLibraries.map((library, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer"
                >
                  <div className="font-semibold text-slate-900 mb-1">{library.name}</div>
                  <div className="text-sm text-slate-600">{library.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Icon Categories */}
        <div>
          <h3 className="text-2xl text-white mb-6">🎨 Icon Categories</h3>
          
          <div className="bg-white rounded-3xl p-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              {[
                { icon: Home, label: 'Home' },
                { icon: User, label: 'User' },
                { icon: Settings, label: 'Settings' },
                { icon: Mail, label: 'Mail' },
                { icon: Search, label: 'Search' },
                { icon: Bell, label: 'Bell' },
                { icon: Heart, label: 'Heart' },
                { icon: Star, label: 'Star' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <item.icon className="text-slate-700" size={24} />
                  </div>
                  <span className="text-xs text-slate-600">{item.label}</span>
                </div>
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

