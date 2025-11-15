import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { X } from 'lucide-react';

export function BadgesTagsSection() {
  const codeExample = `/* Badge Component */
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
}

/* Color variants */
.badge-primary { 
  background: #e3f2fd; 
  color: #1976d2; 
}

.badge-success { 
  background: #e8f5e9; 
  color: #388e3c; 
}

.badge-warning { 
  background: #fff3e0; 
  color: #f57c00; 
}

.badge-danger { 
  background: #ffebee; 
  color: #d32f2f; 
}

/* Tag with Remove Button */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #e0e0e0;
  border-radius: 16px;
  font-size: 0.875rem;
}`;

  return (
    <SectionLayout
      id="badges"
      title="Badges & Tags"
      description="Use badges and tags to display status, categories, and labels. Create visual indicators that enhance information hierarchy."
    >
      <div className="space-y-12">
        {/* Key Principles */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Badge & Tag Principles</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Semantic Colors</strong>
                <p className="text-white/60">Use colors that convey meaning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Consistent Sizing</strong>
                <p className="text-white/60">Standard badge sizes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Clear Labels</strong>
                <p className="text-white/60">Short, descriptive text</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Removable Tags</strong>
                <p className="text-white/60">Allow removal when needed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Badge & Tag Examples</h3>
          
          {/* Badge Variants */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Badge Variants</h4>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Primary
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Success
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                Warning
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                Error
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                Info
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                Neutral
              </span>
            </div>
          </div>

          {/* Status Badges */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Status Badges</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  Active
                </span>
                <span className="text-slate-600">User account is active</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                  Inactive
                </span>
                <span className="text-slate-600">User account is inactive</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                  Pending
                </span>
                <span className="text-slate-600">Awaiting approval</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Verified
                </span>
                <span className="text-slate-600">Account verified</span>
              </div>
            </div>
          </div>

          {/* Tags with Remove */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Removable Tags</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                >
                  {tag}
                  <button className="hover:bg-slate-200 rounded-full p-0.5 transition-colors">
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Badge Sizes */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Badge Sizes</h4>
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                Small
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Medium
              </span>
              <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-base font-semibold">
                Large
              </span>
            </div>
          </div>

          {/* Notification Badges */}
          <div className="bg-white rounded-3xl p-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Notification Badges</h4>
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
              </div>
              <div className="relative">
                <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  12
                </span>
              </div>
              <div className="relative">
                <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
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

