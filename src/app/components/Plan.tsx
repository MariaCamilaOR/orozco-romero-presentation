import { Target, Briefcase, Trophy } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Plan() {
  const { t } = useLanguage();
  const p = t.plan;

  return (
    <section id="plan" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C6D8FF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            {p.title}
          </h2>
          <p className="text-xl mb-6" style={{ color: '#386FA4' }}>
            {p.projection}
          </p>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="space-y-8">
          {/* Cargo/Rol */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}>
                <Target className="w-8 h-8" style={{ color: '#EBEFBF' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-4" style={{ color: '#000121' }}>
                  {p.roleTitle}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#000121' }}>
                  {p.roleText}
                </p>
              </div>
            </div>
          </div>

          {/* Experiencias */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl flex-shrink-0" style={{ backgroundColor: '#386FA4' }}>
                <Briefcase className="w-8 h-8" style={{ color: '#EBEFBF' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-4" style={{ color: '#000121' }}>
                  {p.experiencesTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {p.experiences.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: '#4A7C59' }}
                      ></span>
                      <span className="text-lg" style={{ color: '#000121' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Metas Alcanzadas */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}>
                <Trophy className="w-8 h-8" style={{ color: '#EBEFBF' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-4" style={{ color: '#000121' }}>
                  {p.goalsTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {p.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: '#386FA4' }}
                      ></span>
                      <span className="text-lg" style={{ color: '#000121' }}>
                        {goal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
