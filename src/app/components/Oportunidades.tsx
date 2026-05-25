import { Award, Languages, Globe2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [Award, Languages, Globe2];
const colors = ['#4A7C59', '#386FA4', '#4A7C59'];

export function Oportunidades() {
  const { t } = useLanguage();
  const opportunities = t.oportunidades.items;

  return (
    <section id="oportunidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            {t.oportunidades.title}
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => {
            const Icon = icons[index] ?? Award;
            const color = colors[index] ?? '#4A7C59';
            return (
              <div
                key={index}
                className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: color }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                    <Icon className="w-10 h-10" style={{ color: '#EBEFBF' }} />
                  </div>
                </div>
                <h3 className="text-2xl text-center mb-6" style={{ color: '#EBEFBF' }}>
                  {opportunity.title}
                </h3>
                <p className="text-center leading-relaxed" style={{ color: '#FFFFFF' }}>
                  {opportunity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
