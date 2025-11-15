import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Check, X, AlertCircle, Info, Search, User } from 'lucide-react';
import { useState } from 'react';

export function ComponentPatternsSection() {
  const [activeTab, setActiveTab] = useState('buttons');

  const codeExample = `/* Button Variants */
.btn-primary {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
}

.btn-ghost {
  background: transparent;
  color: #64748b;
  border: none;
  padding: 0.75rem 1.5rem;
}

.btn-ghost:hover {
  background: #f1f5f9;
}

/* Card Component */
.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}`;

  return (
    <SectionLayout
      id="components"
      title="Essential Component Patterns"
      description="A comprehensive library of commonly used UI components with multiple states and variations. Copy, customize, and use in your projects."
    >
      <div className="space-y-12">
        {/* Component Tabs */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'buttons', label: 'Buttons' },
              { id: 'cards', label: 'Cards' },
              { id: 'forms', label: 'Forms' },
              { id: 'alerts', label: 'Alerts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons Section */}
        {activeTab === 'buttons' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-6">🔘 Button Variants</h3>
              
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Primary */}
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all mb-3"
                    >
                      Primary
                    </motion.button>
                    <p className="text-slate-600">Main actions</p>
                  </div>

                  {/* Secondary */}
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-50 transition-all mb-3"
                    >
                      Secondary
                    </motion.button>
                    <p className="text-slate-600">Secondary actions</p>
                  </div>

                  {/* Ghost */}
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-transparent text-slate-700 rounded-xl hover:bg-slate-200 transition-all mb-3"
                    >
                      Ghost
                    </motion.button>
                    <p className="text-slate-600">Subtle actions</p>
                  </div>

                  {/* Danger */}
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all mb-3"
                    >
                      Danger
                    </motion.button>
                    <p className="text-slate-600">Destructive actions</p>
                  </div>
                </div>

                {/* Button States */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl mb-3">
                      Normal
                    </button>
                    <p className="text-slate-600">Default state</p>
                  </div>

                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl opacity-50 cursor-not-allowed mb-3" disabled>
                      Disabled
                    </button>
                    <p className="text-slate-600">Disabled state</p>
                  </div>

                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl mb-3 flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Loading
                    </button>
                    <p className="text-slate-600">Loading state</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cards Section */}
        {activeTab === 'cards' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-6">🎴 Card Variants</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Standard Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <h4 className="text-slate-900 mb-3">Standard Card</h4>
                  <p className="text-slate-600 mb-4">
                    Basic card with padding, rounded corners, and subtle shadow.
                  </p>
                  <button className="text-blue-500 hover:text-blue-600">
                    Learn more →
                  </button>
                </motion.div>

                {/* Image Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div className="p-6">
                    <h4 className="text-slate-900 mb-2">Image Card</h4>
                    <p className="text-slate-600">Card with featured image</p>
                  </div>
                </motion.div>

                {/* Statistic Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-2">12.5K</div>
                  <h4 className="text-white/90 mb-2">Total Users</h4>
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="text-green-300">↑ 12%</div>
                    <span>vs last month</span>
                  </div>
                </motion.div>

                {/* Glass Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600" />
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white">
                    <h4 className="mb-3">Glass Card</h4>
                    <p className="text-white/80">
                      Glassmorphic card with backdrop blur effect.
                    </p>
                  </div>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-purple-500"
                >
                  <div className="text-center">
                    <h4 className="text-slate-900 mb-2">Pro Plan</h4>
                    <div className="text-4xl text-slate-900 mb-4">$29</div>
                    <ul className="space-y-2 mb-6 text-left">
                      <li className="flex items-center gap-2 text-slate-600">
                        <Check size={18} className="text-green-500" />
                        Unlimited projects
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <Check size={18} className="text-green-500" />
                        Priority support
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <Check size={18} className="text-green-500" />
                        Advanced analytics
                      </li>
                    </ul>
                    <button className="w-full py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
                      Get Started
                    </button>
                  </div>
                </motion.div>

                {/* Notification Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Info className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 mb-2">New Update Available</h4>
                      <p className="text-slate-600">
                        Version 2.0 is ready to install.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}

        {/* Forms Section */}
        {activeTab === 'forms' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-6">📝 Form Components</h3>
              
              <div className="bg-white rounded-3xl p-12 max-w-2xl mx-auto">
                <h4 className="text-2xl text-slate-900 mb-8">Contact Form</h4>
                
                <div className="space-y-6">
                  {/* Text Input */}
                  <div>
                    <label className="block text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                    />
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="block text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Error State */}
                  <div>
                    <label className="block text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Invalid format"
                      className="w-full px-4 py-3 bg-red-50 border-2 border-red-500 rounded-xl outline-none"
                    />
                    <p className="text-red-500 mt-2 flex items-center gap-2">
                      <X size={16} />
                      Please enter a valid phone number
                    </p>
                  </div>

                  {/* Success State */}
                  <div>
                    <label className="block text-slate-700 mb-2">Username</label>
                    <input
                      type="text"
                      value="johndoe"
                      readOnly
                      className="w-full px-4 py-3 bg-green-50 border-2 border-green-500 rounded-xl outline-none"
                    />
                    <p className="text-green-500 mt-2 flex items-center gap-2">
                      <Check size={16} />
                      Username is available
                    </p>
                  </div>

                  {/* Search Input */}
                  <div>
                    <label className="block text-slate-700 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-xl transition-all">
                    Submit Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Alerts Section */}
        {activeTab === 'alerts' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-6">⚠️ Alert Components</h3>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                {/* Success Alert */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-green-900 mb-2">Success!</h4>
                    <p className="text-green-700">
                      Your changes have been saved successfully. You can now proceed to the next step.
                    </p>
                  </div>
                  <button className="text-green-500 hover:text-green-600">
                    <X size={20} />
                  </button>
                </motion.div>

                {/* Warning Alert */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-amber-900 mb-2">Warning</h4>
                    <p className="text-amber-700">
                      Please review your information before submitting. Some fields may need attention.
                    </p>
                  </div>
                  <button className="text-amber-500 hover:text-amber-600">
                    <X size={20} />
                  </button>
                </motion.div>

                {/* Error Alert */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-red-900 mb-2">Error</h4>
                    <p className="text-red-700">
                      There was an error processing your request. Please try again later.
                    </p>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <X size={20} />
                  </button>
                </motion.div>

                {/* Info Alert */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Info className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-blue-900 mb-2">Information</h4>
                    <p className="text-blue-700">
                      New features are now available! Check out our latest updates to improve your workflow.
                    </p>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600">
                    <X size={20} />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        )}

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Example</h3>
          <CodeBlock code={codeExample} />
        </div>

        {/* Best Practices */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">✅ Component Best Practices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Consistent styling</strong>
                  <p className="text-white/60">Use same border-radius, shadows across all components</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Clear states</strong>
                  <p className="text-white/60">Show hover, focus, active, disabled states</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Accessibility</strong>
                  <p className="text-white/60">Proper labels, keyboard navigation, ARIA attributes</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Responsive design</strong>
                  <p className="text-white/60">Components work on all screen sizes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Reusability</strong>
                  <p className="text-white/60">Build components that can be reused</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Loading states</strong>
                  <p className="text-white/60">Show feedback during async operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
