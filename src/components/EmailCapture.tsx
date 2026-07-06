import { useState } from 'react';
import { Mail, Gift, CheckCircle2, Sparkles } from 'lucide-react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-serif text-neutral-900 mb-2">You're In!</h3>
          <p className="text-neutral-600">
            Check your inbox for your personalized skin assessment and exclusive member benefits.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col md:flex-row gap-8 items-center">
            {/* Left content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-800 mb-4">
                <Gift className="w-4 h-4" />
                <span>Exclusive Access</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
                Get Your Personalized Skin Report
              </h2>

              <p className="text-neutral-600 mb-6">
                Join thousands who receive our weekly skin insights, plus get immediate access
                to your custom skin analysis with actionable recommendations.
              </p>

              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Custom routine recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Early access to new products</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Exclusive member pricing</span>
                </li>
              </ul>
            </div>

            {/* Right: Form */}
            <div className="flex-1 w-full max-w-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all shadow-lg shadow-orange-200 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Subscribe</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Get My Free Analysis</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-neutral-400 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}