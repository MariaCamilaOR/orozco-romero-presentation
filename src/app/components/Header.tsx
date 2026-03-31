import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'quien-eres', label: '¿Quién eres?' },
    { id: 'fuentes', label: 'Fuentes' },
    { id: 'tendencias', label: 'Tendencias' },
    { id: 'oportunidades', label: 'Oportunidades' },
    { id: 'plan', label: 'Plan 5 Años' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm" style={{ borderBottom: '2px solid #C6D8FF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#4A7C59' }}>
              <Shield className="w-6 h-6" style={{ color: '#EBEFBF' }} />
            </div>
            <div>
              <h1 className="text-lg" style={{ color: '#000121' }}>María Camila Orozco Romero</h1>
              <p className="text-sm" style={{ color: '#386FA4' }}>Cybersecurity Specialist</p>
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
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#000121' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
