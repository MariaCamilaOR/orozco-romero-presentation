import { Youtube, BookOpen, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [Youtube, BookOpen, Users];
const colors = ['#4A7C59', '#386FA4', '#4A7C59'];

export function Fuentes() {
  const { t } = useLanguage();
  const sources = t.fuentes.items;

  return (
    <section id="fuentes" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            {t.fuentes.title}
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sources.map((source, index) => {
            const Icon = icons[index] ?? Youtube;
            const color = colors[index] ?? '#4A7C59';
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2"
                style={{ borderColor: '#C6D8FF' }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full" style={{ backgroundColor: color }}>
                    <Icon className="w-8 h-8" style={{ color: '#EBEFBF' }} />
                  </div>
                </div>
                <h3 className="text-xl text-center mb-2" style={{ color: '#000121' }}>
                  {source.title}
                </h3>
                {source.subtitle && (
                  <p className="text-center mb-4" style={{ color: '#386FA4' }}>
                    {source.subtitle}
                  </p>
                )}
                <p className="text-center leading-relaxed" style={{ color: '#000121' }}>
                  {source.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
