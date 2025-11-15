import { motion, AnimatePresence } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { X, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useState } from 'react';

export function ModalsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<'standard' | 'confirmation' | 'fullscreen'>('standard');

  const codeExample = `/* Modal Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

.modal-container {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`;

  return (
    <SectionLayout
      id="modals"
      title="Modals & Dialogs"
      description="Create effective modal dialogs for confirmations, forms, and important information. Master overlay patterns, animations, and accessibility."
    >
      <div className="space-y-12">
        {/* Key Principles */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Modal Design Principles</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Clear Purpose</strong>
                <p className="text-white/60">One task per modal</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Easy Dismissal</strong>
                <p className="text-white/60">Close button and ESC key</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Focus Management</strong>
                <p className="text-white/60">Trap focus inside modal</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Smooth Animations</strong>
                <p className="text-white/60">Fade in/out transitions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Modal Examples</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setModalType('standard');
                setIsOpen(true);
              }}
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all"
            >
              Standard Modal
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setModalType('confirmation');
                setIsOpen(true);
              }}
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all"
            >
              Confirmation Dialog
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setModalType('fullscreen');
                setIsOpen(true);
              }}
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all"
            >
              Fullscreen Modal
            </motion.button>
          </div>

          {/* Modal Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`bg-white rounded-2xl shadow-2xl ${
                    modalType === 'fullscreen' 
                      ? 'w-full h-full max-w-none max-h-none rounded-none' 
                      : 'max-w-md w-full max-h-[90vh] overflow-y-auto'
                  }`}
                >
                  {modalType === 'standard' && (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-900">Standard Modal</h3>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <p className="text-slate-600 mb-6">
                        This is a standard modal dialog. Use it for forms, information display, or any content that needs user attention.
                      </p>
                      <div className="flex gap-3 justify-end">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  )}

                  {modalType === 'confirmation' && (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <AlertCircle className="text-red-600" size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">Confirm Action</h3>
                        </div>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <p className="text-slate-600 mb-6">
                        Are you sure you want to delete this item? This action cannot be undone.
                      </p>
                      <div className="flex gap-3 justify-end">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}

                  {modalType === 'fullscreen' && (
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between p-6 border-b border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900">Fullscreen Modal</h3>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <div className="flex-1 p-6 overflow-y-auto">
                        <p className="text-slate-600 mb-4">
                          Fullscreen modals are useful for complex forms, detailed views, or content that needs maximum space.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="h-32 bg-slate-100 rounded-lg"></div>
                          <div className="h-32 bg-slate-100 rounded-lg"></div>
                          <div className="h-32 bg-slate-100 rounded-lg"></div>
                          <div className="h-32 bg-slate-100 rounded-lg"></div>
                        </div>
                      </div>
                      <div className="p-6 border-t border-slate-200 flex justify-end gap-3">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Alert Variants */}
        <div>
          <h3 className="text-2xl text-white mb-6">📢 Alert Variants</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Info className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-1">Information</h4>
                  <p className="text-slate-600 text-sm">This is an informational message for the user.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-1">Success</h4>
                  <p className="text-slate-600 text-sm">Your action was completed successfully.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-amber-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-1">Warning</h4>
                  <p className="text-slate-600 text-sm">Please review this before proceeding.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-red-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-1">Error</h4>
                  <p className="text-slate-600 text-sm">Something went wrong. Please try again.</p>
                </div>
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

