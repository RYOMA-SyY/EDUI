import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Mail, Lock, User, Search, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export function FormsSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    search: ''
  });

  const codeExample = `/* Input Field Standards */
input, select, textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d0d0d0;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: white;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

input:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
}

/* Input with Icon */
.input-group {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.input-group input {
  padding-left: 40px;
}

/* Floating Label */
.floating-label {
  position: relative;
}

.floating-label input {
  padding-top: 20px;
}

.floating-label label {
  position: absolute;
  left: 16px;
  top: 16px;
  transition: 0.2s ease;
  color: #999;
  pointer-events: none;
}

.floating-label input:focus + label,
.floating-label input:not(:placeholder-shown) + label {
  top: 4px;
  font-size: 0.75rem;
  color: #4a90e2;
}`;

  return (
    <SectionLayout
      id="forms"
      title="Forms & Input Fields"
      description="Design accessible, user-friendly forms that guide users through data entry. Master input states, validation, and best practices."
    >
      <div className="space-y-12">
        {/* Key Principles */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Form Design Principles</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Clear Labels</strong>
                <p className="text-white/60">Always label inputs clearly</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Visual Feedback</strong>
                <p className="text-white/60">Show focus, error, and success states</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Accessibility</strong>
                <p className="text-white/60">Proper ARIA labels and keyboard navigation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Validation</strong>
                <p className="text-white/60">Real-time feedback on input</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Live Examples</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Input */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-4 font-semibold">Standard Input</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-700 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 mb-2 font-medium">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input with Icon */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-4 font-semibold">Input with Icon</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-700 mb-2 font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      value={formData.search}
                      onChange={(e) => setFormData({...formData, search: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-2 font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Input States */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-4 font-semibold">Input States</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-700 mb-2 font-medium">Normal</label>
                  <input
                    type="text"
                    placeholder="Normal input"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 mb-2 font-medium">Focused</label>
                  <input
                    type="text"
                    placeholder="Focused input"
                    className="w-full px-4 py-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 mb-2 font-medium">Error</label>
                  <input
                    type="text"
                    placeholder="Error state"
                    className="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                </div>
                
                <div>
                  <label className="block text-slate-700 mb-2 font-medium">Disabled</label>
                  <input
                    type="text"
                    placeholder="Disabled input"
                    disabled
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-100 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Floating Label */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-slate-900 mb-4 font-semibold">Floating Label</h4>
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="floating-name"
                    placeholder=" "
                    className="w-full px-4 pt-6 pb-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <label
                    htmlFor="floating-name"
                    className="absolute left-4 top-2 text-sm text-slate-500 transition-all pointer-events-none"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="floating-email"
                    placeholder=" "
                    className="w-full px-4 pt-6 pb-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <label
                    htmlFor="floating-email"
                    className="absolute left-4 top-2 text-sm text-slate-500 transition-all pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Layout Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">📋 Complete Form Example</h3>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <h4 className="text-2xl text-slate-900 mb-2">Sign Up</h4>
            <p className="text-slate-600 mb-8">Create your account to get started</p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-slate-700 mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 mb-2 font-medium">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-slate-500 text-sm mt-1">Must be at least 8 characters</p>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="w-4 h-4" />
                <label htmlFor="terms" className="text-slate-700 text-sm">
                  I agree to the Terms and Conditions
                </label>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Create Account
              </motion.button>
            </form>
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

