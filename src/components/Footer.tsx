import { ExternalLink, Heart } from 'lucide-react';
// @ts-ignore - .ico file import
import logoIcon from '../images/image Q.ico';

export function Footer() {
  const resources = [
    {
      category: 'Color Tools',
      links: [
        { name: 'Coolors', url: '#' },
        { name: 'Adobe Color', url: '#' },
        { name: 'WebAIM Contrast', url: '#' },
      ]
    },
    {
      category: 'Typography',
      links: [
        { name: 'Google Fonts', url: '#' },
        { name: 'Font Share', url: '#' },
        { name: 'Type Scale', url: '#' },
      ]
    },
    {
      category: 'Icons',
      links: [
        { name: 'Lucide Icons', url: '#' },
        { name: 'Heroicons', url: '#' },
        { name: 'Font Awesome', url: '#' },
      ]
    },
    {
      category: 'Component Libraries',
      links: [
        { name: 'Shadcn/ui', url: '#' },
        { name: 'Headless UI', url: '#' },
        { name: 'Radix UI', url: '#' },
      ]
    },
    {
      category: 'Learning',
      links: [
        { name: 'MDN Web Docs', url: '#' },
        { name: 'CSS-Tricks', url: '#' },
        { name: 'Web.dev', url: '#' },
      ]
    },
  ];

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {resources.map((section, index) => (
            <div key={index}>
              <h3 className="text-white mb-4">{section.category}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <img 
                src={logoIcon} 
                alt="Modern Design Guide Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-white">Modern Design Guide</span>
            </div>

            {/* Copyright */}
            <div className="text-white/60 text-center">
              <p className="flex items-center gap-2 justify-center">
                Made with <Heart size={16} className="text-red-500 fill-red-500" /> for designers and developers
              </p>
              <p className="mt-2">© 2025 Modern Design Guide. Educational resource.</p>
            </div>

            {/* Social Links (placeholder) */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/RYOMA-SyY" className="text-white/60 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://riyoma.pages.dev/" className="text-white/60 hover:text-white transition-colors">
                ME
              </a>
              
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className="text-white mb-3">📚 About This Guide</h4>
            <p className="text-white/70 mb-4">
              This educational resource is designed to help web designers and developers master modern design 
              techniques. All examples are interactive and can be customized for your projects.
            </p>
            <p className="text-white/50">
              <strong>Disclaimer:</strong> This is a learning resource. Always test designs for accessibility 
              and usability in your specific context. Links to external tools and resources are for educational 
              purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
