import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Menu, X, Home, User, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';

export function NavigationSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const codeExample = `/* Standard Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 32px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.navbar-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.navbar-link:hover {
  color: #4a90e2;
}

/* Sticky Navigation */
.navbar-sticky {
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Transparent Navbar (Hero Overlay) */
.navbar-transparent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  color: white;
}

.navbar-transparent.scrolled {
  background: white;
  color: #333;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}`;

  return (
    <SectionLayout
      id="navigation"
      title="Navigation Bars"
      description="Design intuitive navigation systems that help users move through your application. Master sticky navs, mobile menus, and responsive patterns."
    >
      <div className="space-y-12">
        {/* Key Principles */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Navigation Principles</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Clear Hierarchy</strong>
                <p className="text-white/60">Most important items first</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Consistent Placement</strong>
                <p className="text-white/60">Same location across pages</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Mobile-Friendly</strong>
                <p className="text-white/60">Hamburger menu for mobile</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Active States</strong>
                <p className="text-white/60">Show current page clearly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Navigation Examples</h3>
          
          {/* Standard Navbar */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Standard Navbar</h4>
            <nav className="flex items-center justify-between h-16 px-6 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
                <span className="font-bold text-slate-900">Brand</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Home</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Services</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Sign In
                </button>
              </div>
              <button className="md:hidden text-slate-700">
                <Menu size={24} />
              </button>
            </nav>
          </div>

          {/* Sticky Navbar */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Sticky Navigation</h4>
            <div className="h-64 overflow-y-auto border border-slate-200 rounded-xl">
              <nav className="sticky top-0 flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
                  <span className="font-bold text-slate-900">Sticky Nav</span>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="text-slate-700 hover:text-purple-600 font-medium">Home</a>
                  <a href="#" className="text-slate-700 hover:text-purple-600 font-medium">Products</a>
                  <a href="#" className="text-slate-700 hover:text-purple-600 font-medium">About</a>
                </div>
              </nav>
              <div className="p-6 space-y-4">
                <p className="text-slate-600">Scroll down to see the sticky navbar in action...</p>
                <div className="h-32 bg-slate-100 rounded-lg"></div>
                <div className="h-32 bg-slate-100 rounded-lg"></div>
                <div className="h-32 bg-slate-100 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Glassmorphic Navbar */}
          <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-8 mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h4 className="text-white mb-6 font-semibold">Glassmorphic Navbar</h4>
              <nav className="flex items-center justify-between h-16 px-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg" />
                  <span className="font-bold text-white">Glass UI</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <a href="#" className="text-white/90 hover:text-white font-medium">Home</a>
                  <a href="#" className="text-white/90 hover:text-white font-medium">Features</a>
                  <a href="#" className="text-white/90 hover:text-white font-medium">Pricing</a>
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="bg-white rounded-3xl p-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Mobile Navigation</h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <nav className="flex items-center justify-between h-16 px-4 bg-white border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg" />
                  <span className="font-bold text-slate-900">Mobile</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-slate-700"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </nav>
              
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white border-b border-slate-200"
                >
                  <div className="flex flex-col p-4 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <Home size={20} className="text-slate-600" />
                      <span className="text-slate-700 font-medium">Home</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <User size={20} className="text-slate-600" />
                      <span className="text-slate-700 font-medium">Profile</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <Settings size={20} className="text-slate-600" />
                      <span className="text-slate-700 font-medium">Settings</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-red-600">
                      <LogOut size={20} />
                      <span className="font-medium">Logout</span>
                    </a>
                  </div>
                </motion.div>
              )}
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

