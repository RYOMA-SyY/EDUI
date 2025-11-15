import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'glassmorphism', label: 'Glassmorphism' },
  { id: 'neumorphism', label: 'Neumorphism' },
  { id: 'bento', label: 'Bento Grid' },
  { id: 'gradient', label: 'Gradients' },
  { id: 'floating', label: 'Depth' },
  { id: 'micro', label: 'Animations' },
  { id: 'color', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'components', label: 'Components' },
  { id: 'forms', label: 'Forms' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'modals', label: 'Modals' },
  { id: 'tables', label: 'Tables' },
  { id: 'lists', label: 'Lists & Grids' },
  { id: 'badges', label: 'Badges' },
  { id: 'icons', label: 'Icons' },
  { id: 'tools', label: 'Tools' },
];

export function Navigation({ activeSection, sidebarOpen, setSidebarOpen }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : -280,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="hidden lg:flex fixed left-0 top-0 bottom-0 z-50 w-64 p-4"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl w-full shadow-2xl flex flex-col overflow-hidden">
          {/* Logo/Brand */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Modern Design</div>
                  <div className="text-white/60 text-xs">Guide</div>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Hide sidebar"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto scrollbar-hide py-4">
            <div className="flex flex-col gap-1 px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2.5 rounded-lg transition-all text-left text-sm ${
                    activeSection === item.id
                      ? 'bg-white/20 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </motion.aside>

      {/* Floating Toggle Button (when sidebar is hidden) */}
      {!sidebarOpen && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={() => setSidebarOpen(true)}
          className="hidden lg:flex fixed left-4 top-4 z-50 text-white p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/20 transition-colors shadow-2xl"
          aria-label="Show sidebar"
        >
          <ChevronRight size={24} />
        </motion.button>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 text-white p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-64 p-4 lg:hidden"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl w-full h-full shadow-2xl flex flex-col overflow-hidden">
                {/* Logo/Brand */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Sparkles className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Modern Design</div>
                        <div className="text-white/60 text-xs">Guide</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto scrollbar-hide py-4">
                  <div className="flex flex-col gap-1 px-3">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`px-4 py-2.5 rounded-lg transition-all text-left text-sm ${
                          activeSection === item.id
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
