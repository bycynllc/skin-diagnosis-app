import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Heart } from 'lucide-react';
import DiagnosisFlow from './components/DiagnosisFlow';
import Shop from './components/Shop';
import Education from './components/Education';
import EmailCapture from './components/EmailCapture';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-serif text-neutral-900">
                bycyn<span className="text-amber-600">llc</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('diagnosis')}
                className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
              >
                Diagnose
              </button>
              <button
                onClick={() => scrollToSection('shop')}
                className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
              >
                Learn
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('diagnosis')}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all shadow-sm"
              >
                Free Analysis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neutral-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-100 animate-fade-in">
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('diagnosis')}
                className="block w-full text-left py-2 text-neutral-600 hover:text-neutral-900"
              >
                Diagnose
              </button>
              <button
                onClick={() => scrollToSection('shop')}
                className="block w-full text-left py-2 text-neutral-600 hover:text-neutral-900"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="block w-full text-left py-2 text-neutral-600 hover:text-neutral-900"
              >
                Learn
              </button>
              <button
                onClick={() => scrollToSection('diagnosis')}
                className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg"
              >
                Free Analysis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-8 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-amber-200 text-sm font-medium text-amber-700 mb-6">
            <Heart className="w-4 h-4" />
            <span>Evidence-Based Skin Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-tight mb-6">
            Stop guessing what your skin needs.
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Know for sure.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Our diagnostic engine identifies your unique skin pattern in under 60 seconds
            and creates a personalized blueprint for lasting results.
          </p>
        </div>
      </section>

      {/* Main Diagnosis Flow */}
      <div id="diagnosis">
        <DiagnosisFlow />
      </div>

      {/* Shop Section */}
      <Shop />

      {/* Education Section */}
      <Education />

      {/* Email Capture */}
      <EmailCapture />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-serif">
                  bycyn<span className="text-amber-400">llc</span>
                </span>
              </div>
              <p className="text-stone-400 mb-6 max-w-md">
                Evidence-based skin intelligence for real results. We help you understand
                your skin so you can finally give it what it actually needs.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">IG</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">TT</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">YT</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-medium text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('diagnosis')} className="text-stone-400 hover:text-white transition-colors">
                    Skin Diagnosis
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('shop')} className="text-stone-400 hover:text-white transition-colors">
                    Products
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('education')} className="text-stone-400 hover:text-white transition-colors">
                    Education
                  </button>
                </li>
                <li>
                  <a href="#" className="text-stone-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-stone-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-400 hover:text-white transition-colors">
                    Affiliate Disclosure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm">
              &copy; {new Date().getFullYear()} bycynllc. All rights reserved.
            </p>
            <p className="text-stone-500 text-sm">
              Not medical advice. Consult a dermatologist for medical concerns.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;