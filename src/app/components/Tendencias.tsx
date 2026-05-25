import { Layers, Brain, Cpu } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [Layers, Brain, Cpu];

export function Tendencias() {
  const { t } = useLanguage();
  const trends = t.tendencias.items;

  return (
    <section
      id="tendencias"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#C6D8FF' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            {t.tendencias.title}
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="space-y-8">
          {trends.map((trend, index) => {
            const Icon = icons[index] ?? Layers;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#4A7C59' }}>
                      <Icon className="w-10 h-10" style={{ color: '#EBEFBF' }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-4" style={{ color: '#000121' }}>
                      {trend.title}
                    </h3>
                    <p className="text-lg mb-4 leading-relaxed" style={{ color: '#000121' }}>
                      {trend.description}
                    </p>
                    <div className="flex items-start gap-2 flex-wrap">
                      <span style={{ color: '#386FA4' }}>{t.tendencias.sourcesLabel}</span>
                      <span className="italic" style={{ color: '#386FA4' }}>
                        {trend.sources}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
