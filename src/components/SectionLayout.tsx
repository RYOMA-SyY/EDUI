import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionLayoutProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function SectionLayout({ id, title, description, children }: SectionLayoutProps) {
  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-white mb-6">{title}</h2>
            <p className="text-white/70 max-w-3xl mx-auto">{description}</p>
          </div>

          {children}
        </motion.div>
      </div>
    </section>
  );
}
