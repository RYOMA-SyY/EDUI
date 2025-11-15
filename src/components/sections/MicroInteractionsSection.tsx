import { motion, AnimatePresence } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { Heart, Star, ThumbsUp, Share2, Loader, Check, Bell } from 'lucide-react';
import { useState } from 'react';

export function MicroInteractionsSection() {
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const codeExample = `/* Button Hover Scale */
.button-scale {
  transition: transform 0.2s ease;
}

.button-scale:hover {
  transform: scale(1.05);
}

/* Button Lift */
.button-lift {
  transition: transform 0.3s, box-shadow 0.3s;
}

.button-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Ripple Effect */
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.ripple-effect {
  position: relative;
  overflow: hidden;
}

.ripple-effect::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 50%;
  transform: scale(0);
  opacity: 0;
}

.ripple-effect:active::before {
  animation: ripple 0.6s ease-out;
}

/* Icon Spin */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spin-on-hover:hover {
  animation: spin 0.5s ease;
}`;

  const handleLoadingDemo = () => {
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 2000);
  };

  return (
    <SectionLayout
      id="micro"
      title="Micro-interactions & Animations"
      description="Small animations that bring your UI to life. These subtle touches make interfaces feel responsive, polished, and delightful to use."
    >
      <div className="space-y-12">
        {/* Key Properties */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Key Principles</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Fast feedback</strong>
                <p className="text-white/60">150ms for instant response feel</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Natural timing</strong>
                <p className="text-white/60">250-400ms for most interactions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Purposeful motion</strong>
                <p className="text-white/60">Every animation should have meaning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Performance first</strong>
                <p className="text-white/60">Only animate transform & opacity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Interactions */}
        <div>
          <h3 className="text-2xl text-white mb-6">🎯 Button Interactions</h3>
          
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Scale on hover */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-purple-500 text-white rounded-xl mb-2"
                >
                  Scale Effect
                </motion.button>
                <p className="text-slate-600">Scales on hover</p>
              </div>

              {/* Lift on hover */}
              <div className="text-center">
                <motion.button
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                  className="w-full px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg mb-2"
                >
                  Lift Effect
                </motion.button>
                <p className="text-slate-600">Lifts upward</p>
              </div>

              {/* Ripple effect */}
              <div className="text-center">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full px-6 py-3 bg-pink-500 text-white rounded-xl overflow-hidden mb-2"
                >
                  <motion.span
                    initial={{ scale: 0, opacity: 0.5 }}
                    whileTap={{ scale: 4, opacity: 0 }}
                    className="absolute inset-0 bg-white rounded-full"
                  />
                  <span className="relative z-10">Ripple Effect</span>
                </motion.button>
                <p className="text-slate-600">Click for ripple</p>
              </div>

              {/* Gradient shift */}
              <div className="text-center">
                <motion.button
                  whileHover={{ backgroundPosition: 'right center' }}
                  className="w-full px-6 py-3 text-white rounded-xl mb-2"
                  style={{
                    background: 'linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)',
                    backgroundSize: '200% auto',
                    transition: 'background-position 0.5s'
                  }}
                >
                  Gradient Shift
                </motion.button>
                <p className="text-slate-600">Animated gradient</p>
              </div>
            </div>
          </div>
        </div>

        {/* Icon Animations */}
        <div>
          <h3 className="text-2xl text-white mb-6">💫 Icon Animations</h3>
          
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {/* Like button */}
              <div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLiked(!liked)}
                  className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-3"
                >
                  <motion.div
                    animate={liked ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart
                      size={28}
                      className={liked ? 'text-red-500 fill-red-500' : 'text-slate-400'}
                    />
                  </motion.div>
                </motion.button>
                <p className="text-slate-600">Heart Animation</p>
              </div>

              {/* Star button */}
              <div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setStarred(!starred)}
                  className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-3"
                >
                  <motion.div
                    animate={starred ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Star
                      size={28}
                      className={starred ? 'text-yellow-500 fill-yellow-500' : 'text-slate-400'}
                    />
                  </motion.div>
                </motion.button>
                <p className="text-slate-600">Star Rotation</p>
              </div>

              {/* Thumbs up */}
              <div>
                <motion.button
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-3"
                >
                  <ThumbsUp size={28} className="text-blue-500" />
                </motion.button>
                <p className="text-slate-600">Bounce on Hover</p>
              </div>

              {/* Share */}
              <div>
                <motion.button
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-3"
                >
                  <Share2 size={28} className="text-purple-500" />
                </motion.button>
                <p className="text-slate-600">Rotate on Hover</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Focus States */}
        <div>
          <h3 className="text-2xl text-white mb-6">✏️ Input Focus States</h3>
          
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12">
            <div className="max-w-md mx-auto space-y-4">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                />
              </motion.div>

              <p className="text-center text-slate-600 mt-6">
                Click on inputs to see the focus animation
              </p>
            </div>
          </div>
        </div>

        {/* Loading Animations */}
        <div>
          <h3 className="text-2xl text-white mb-6">⏳ Loading States</h3>
          
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12">
            <div className="max-w-md mx-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLoadingDemo}
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl disabled:opacity-50 transition-all relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Loader size={20} />
                      </motion.div>
                      <span>Processing...</span>
                    </motion.div>
                  ) : success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Check size={20} />
                      <span>Success!</span>
                    </motion.div>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Submit Form
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p className="text-center text-slate-600 mt-4">
                Click to see loading and success states
              </p>
            </div>
          </div>
        </div>

        {/* Notification Badge */}
        <div>
          <h3 className="text-2xl text-white mb-6">🔔 Badge Animations</h3>
          
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12">
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setNotificationCount(prev => prev > 0 ? prev - 1 : 0)}
                  className="relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <Bell size={28} className="text-slate-700" />
                  <AnimatePresence>
                    {notificationCount > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
                      >
                        {notificationCount}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
                <p className="text-slate-600 mt-3">Click to dismiss</p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Example</h3>
          <CodeBlock code={codeExample} />
        </div>

        {/* Timing Guidelines */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">⏱️ Timing Guidelines</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl text-green-400 mb-2">150ms</div>
              <div className="text-white mb-2">Fast</div>
              <p className="text-white/60">Button feedback, instant responses</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl text-blue-400 mb-2">250ms</div>
              <div className="text-white mb-2">Standard</div>
              <p className="text-white/60">Most hover effects, tooltips</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl text-purple-400 mb-2">400ms</div>
              <div className="text-white mb-2">Slow</div>
              <p className="text-white/60">Drawer open, modal appear</p>
            </div>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
          <h3 className="text-2xl text-amber-400 mb-6">⚡ Performance Tips</h3>
          <div className="space-y-3 text-white/80">
            <div className="flex items-start gap-3">
              <div className="text-xl">✓</div>
              <div>
                <strong className="text-white">Only animate transform and opacity</strong>
                <p className="text-white/60">These properties don't trigger layout recalculation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-xl">✓</div>
              <div>
                <strong className="text-white">Use will-change sparingly</strong>
                <p className="text-white/60">Only for elements that will definitely animate</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-xl">✓</div>
              <div>
                <strong className="text-white">Avoid animating expensive properties</strong>
                <p className="text-white/60">Don't animate width, height, or position</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
