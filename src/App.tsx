import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { GlassmorphismSection } from './components/sections/GlassmorphismSection';
import { NeumorphismSection } from './components/sections/NeumorphismSection';
import { BentoGridSection } from './components/sections/BentoGridSection';
import { GradientMeshSection } from './components/sections/GradientMeshSection';
import { FloatingElementsSection } from './components/sections/FloatingElementsSection';
import { MicroInteractionsSection } from './components/sections/MicroInteractionsSection';
import { ColorSystemsSection } from './components/sections/ColorSystemsSection';
import { TypographySection } from './components/sections/TypographySection';
import { SpacingSection } from './components/sections/SpacingSection';
import { ComponentPatternsSection } from './components/sections/ComponentPatternsSection';
import { FormsSection } from './components/sections/FormsSection';
import { NavigationSection } from './components/sections/NavigationSection';
import { ModalsSection } from './components/sections/ModalsSection';
import { TablesSection } from './components/sections/TablesSection';
import { ListsGridsSection } from './components/sections/ListsGridsSection';
import { BadgesTagsSection } from './components/sections/BadgesTagsSection';
import { IconsResourcesSection } from './components/sections/IconsResourcesSection';
import { ToolsResourcesSection } from './components/sections/ToolsResourcesSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Prevent auto-scroll on page load
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Clear any hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'glassmorphism',
        'neumorphism',
        'bento',
        'gradient',
        'floating',
        'micro',
        'color',
        'typography',
        'spacing',
        'components',
        'forms',
        'navigation',
        'modals',
        'tables',
        'lists',
        'badges',
        'icons',
        'tools'
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-blue-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <Navigation 
        activeSection={activeSection} 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <main className={`relative z-10 transition-all duration-300 ${
        sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
      }`}>
        <Hero />
        <GlassmorphismSection />
        <NeumorphismSection />
        <BentoGridSection />
        <GradientMeshSection />
        <FloatingElementsSection />
        <MicroInteractionsSection />
        <ColorSystemsSection />
        <TypographySection />
        <SpacingSection />
        <ComponentPatternsSection />
        <FormsSection />
        <NavigationSection />
        <ModalsSection />
        <TablesSection />
        <ListsGridsSection />
        <BadgesTagsSection />
        <IconsResourcesSection />
        <ToolsResourcesSection />
      </main>

      <Footer />
    </div>
  );
}
