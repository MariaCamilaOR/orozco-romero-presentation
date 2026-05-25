import { Mail, Linkedin, Github } from 'lucide-react';
import profileImg from '../images/cv.png';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img
              src={profileImg}
              alt={t.hero.title}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
              style={{ border: '4px solid #C6D8FF' }}
            />
          </div>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ color: '#000121' }}>
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl mb-8" style={{ color: '#386FA4' }}>
            {t.hero.subtitle}
          </p>
          <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: '#000121' }}>
            {t.hero.description}
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:orozcoromero24@gmail.com"
              className="flex items-center gap-2 px-5 py-3 rounded-lg transition-transform hover:scale-105 shadow-md"
              style={{ backgroundColor: '#C6D8FF', color: '#000121' }}
            >
              <Mail className="w-5 h-5" />
              <span>orozcoromero24@gmail.com</span>
            </a>
            <a
              href="https://github.com/MariaCamilaOR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg transition-transform hover:scale-105 shadow-md"
              style={{ backgroundColor: '#C6D8FF', color: '#000121' }}
            >
              <Github className="w-5 h-5" />
              <span>MariaCamilaOR</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mariacor04/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg transition-transform hover:scale-105 shadow-md"
              style={{ backgroundColor: '#C6D8FF', color: '#000121' }}
            >
              <Linkedin className="w-5 h-5" />
              <span>mariacor04</span>
            </a>
          </div>

          <button
            onClick={() => scrollToSection('quien-eres')}
            className="px-8 py-4 rounded-lg transition-transform hover:scale-105 shadow-lg text-lg"
            style={{ backgroundColor: '#4A7C59', color: '#EBEFBF' }}
          >
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
