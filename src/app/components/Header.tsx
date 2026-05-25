import { Code2, Menu, X, Languages } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'quien-eres', label: t.header.nav.quienEres },
    { id: 'proyectos', label: t.header.nav.proyectos },
    { id: 'fuentes', label: t.header.nav.fuentes },
    { id: 'tendencias', label: t.header.nav.tendencias },
    { id: 'oportunidades', label: t.header.nav.oportunidades },
    { id: 'plan', label: t.header.nav.plan },
  ];

  const ariaToggle =
    language === 'es' ? t.header.toggle.ariaSwitchToEn : t.header.toggle.ariaSwitchToEs;

  const LanguageButton = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggleLanguage}
      aria-label={ariaToggle}
      title={ariaToggle}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-transform hover:scale-105 shadow-sm ${className}`}
      style={{ backgroundColor: '#4A7C59', color: '#EBEFBF' }}
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-semibold tracking-wide">{t.header.toggle.label}</span>
    </button>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      style={{ borderBottom: '2px solid #C6D8FF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#4A7C59' }}>
              <Code2 className="w-6 h-6" style={{ color: '#EBEFBF' }} />
            </div>
            <div>
              <h1 className="text-lg" style={{ color: '#000121' }}>
                {t.header.brand}
              </h1>
              <p className="text-sm" style={{ color: '#386FA4' }}>
                {t.header.role}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors hover:opacity-80"
                style={{ color: '#000121' }}
              >
                {item.label}
              </button>
            ))}
            <LanguageButton />
          </nav>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageButton />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: '#000121' }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t" style={{ borderColor: '#C6D8FF' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 transition-colors"
                style={{ color: '#000121' }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
