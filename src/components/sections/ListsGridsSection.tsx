import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { User, Mail, Calendar, ArrowRight } from 'lucide-react';

export function ListsGridsSection() {
  const codeExample = `/* Vertical List */
.list {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 16px;
}

.list-item:hover {
  background: #f8f9fa;
}

/* Grid Layout */
.grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Media List (Image + Text) */
.media-list-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  transition: background 0.2s;
}

.media-list-item:hover {
  background: #f8f9fa;
}`;

  const listItems = [
    { name: 'John Doe', email: 'john@example.com', date: '2024-01-15' },
    { name: 'Jane Smith', email: 'jane@example.com', date: '2024-01-14' },
    { name: 'Bob Johnson', email: 'bob@example.com', date: '2024-01-13' },
  ];

  return (
    <SectionLayout
      id="lists"
      title="Lists & Grids"
      description="Organize content with lists and grid layouts. Master vertical lists, media lists, and responsive grid systems."
    >
      <div className="space-y-12">
        {/* Key Principles */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Layout Principles</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Consistent Spacing</strong>
                <p className="text-white/60">Equal gaps between items</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Visual Hierarchy</strong>
                <p className="text-white/60">Clear content structure</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Responsive Design</strong>
                <p className="text-white/60">Adapts to screen size</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Hover States</strong>
                <p className="text-white/60">Interactive feedback</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ List & Grid Examples</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Vertical List */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-6 font-semibold">Vertical List</h4>
              <ul className="space-y-0">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 px-4 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {item.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">{item.name}</div>
                      <div className="text-sm text-slate-600">{item.email}</div>
                    </div>
                    <ArrowRight className="text-slate-400" size={20} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Media List */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-6 font-semibold">Media List</h4>
              <ul className="space-y-2">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 truncate">{item.name}</div>
                      <div className="text-sm text-slate-600 truncate">{item.email}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 flex-shrink-0">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Responsive Grid</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white cursor-pointer"
                >
                  <div className="text-3xl font-bold mb-2">Card {item}</div>
                  <p className="text-white/80 text-sm">
                    This is a grid card that adapts to different screen sizes.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Icon List */}
          <div className="bg-white rounded-3xl p-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Icon List</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Profile Settings</div>
                  <div className="text-sm text-slate-600">Manage your account information</div>
                </div>
                <ArrowRight className="text-slate-400" size={20} />
              </li>
              <li className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Email Preferences</div>
                  <div className="text-sm text-slate-600">Control notification settings</div>
                </div>
                <ArrowRight className="text-slate-400" size={20} />
              </li>
              <li className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="text-purple-600" size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Calendar Sync</div>
                  <div className="text-sm text-slate-600">Connect your calendar</div>
                </div>
                <ArrowRight className="text-slate-400" size={20} />
              </li>
            </ul>
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

