import { Code2, Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const sections: { id: string; label: string }[] = [
    { id: 'quien-eres', label: t.header.nav.quienEres },
    { id: 'proyectos', label: t.header.nav.proyectos },
    { id: 'fuentes', label: t.header.nav.fuentes },
    { id: 'tendencias', label: t.header.nav.tendencias },
    { id: 'oportunidades', label: t.header.nav.oportunidades },
    { id: 'plan', label: t.header.nav.plan },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000121' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#4A7C59' }}>
                <Code2 className="w-6 h-6" style={{ color: '#EBEFBF' }} />
              </div>
              <h3 className="text-xl" style={{ color: '#EBEFBF' }}>
                María Camila Orozco
              </h3>
            </div>
            <p style={{ color: '#C6D8FF' }}>{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#EBEFBF' }}>
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(section.id);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="transition-colors hover:opacity-80 text-left"
                    style={{ color: '#C6D8FF' }}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#EBEFBF' }}>
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:orozcoromero24@gmail.com"
                  className="flex items-center gap-3 transition-colors hover:opacity-80"
                  style={{ color: '#C6D8FF' }}
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="break-all">orozcoromero24@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MariaCamilaOR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:opacity-80"
                  style={{ color: '#C6D8FF' }}
                >
                  <Github className="w-5 h-5 flex-shrink-0" />
                  <span>github.com/MariaCamilaOR</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mariacor04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:opacity-80"
                  style={{ color: '#C6D8FF' }}
                >
                  <Linkedin className="w-5 h-5 flex-shrink-0" />
                  <span>linkedin.com/in/mariacor04</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: '#386FA4' }}>
          <p style={{ color: '#C6D8FF' }}>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
