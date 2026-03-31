import { Shield, Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000121' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#4A7C59' }}>
                <Shield className="w-6 h-6" style={{ color: '#EBEFBF' }} />
              </div>
              <h3 className="text-xl" style={{ color: '#EBEFBF' }}>
                María Camila Orozco
              </h3>
            </div>
            <p style={{ color: '#C6D8FF' }}>
              Cybersecurity Specialist enfocada en Blue Team y defensa de infraestructuras críticas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#EBEFBF' }}>
              Navegación Rápida
            </h4>
            <ul className="space-y-2">
              {['quien-eres', 'fuentes', 'tendencias', 'oportunidades', 'plan'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(section);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#C6D8FF' }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#EBEFBF' }}>
              Contacto
            </h4>
            <p className="mb-4" style={{ color: '#C6D8FF' }}>
              Interesada en oportunidades de ciberseguridad, colaboraciones profesionales y posiciones de Blue Team.
            </p>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: '#386FA4' }}>
          <p style={{ color: '#C6D8FF' }}>
            © 2026 María Camila Orozco Romero. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
