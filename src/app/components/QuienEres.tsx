import { User, Code, GraduationCap, Award, Terminal, Globe, Briefcase } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function QuienEres() {
  const { t } = useLanguage();
  const q = t.quienEres;

  return (
    <section id="quien-eres" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            {q.title}
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="rounded-2xl p-8 md:p-12 shadow-lg" style={{ backgroundColor: '#C6D8FF' }}>
          {/* Perfil */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}>
                <User className="w-6 h-6" style={{ color: '#EBEFBF' }} />
              </div>
              <div>
                <h3 className="text-2xl mb-3" style={{ color: '#000121' }}>
                  {q.profileTitle}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#000121' }}>
                  {q.profileText}
                </p>
              </div>
            </div>
          </div>

          {/* Formación */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                <GraduationCap className="w-5 h-5" style={{ color: '#EBEFBF' }} />
              </div>
              <h4 className="text-xl" style={{ color: '#000121' }}>
                {q.formationTitle}
              </h4>
            </div>
            <div className="space-y-4" style={{ color: '#000121' }}>
              <div>
                <p className="text-lg">
                  <span className="font-semibold">{q.formationUniversity.degree}</span> · {q.formationUniversity.institution}
                </p>
                <p style={{ color: '#386FA4' }}>
                  {q.formationUniversity.place} · {q.formationUniversity.period}
                </p>
                <p className="mt-1">{q.formationUniversity.focus}</p>
              </div>
              <div className="pt-3" style={{ borderTop: '1px solid #C6D8FF' }}>
                <p className="text-lg">
                  <span className="font-semibold">{q.formationHighSchool.degree}</span> · {q.formationHighSchool.institution}
                </p>
                <p style={{ color: '#386FA4' }}>{q.formationHighSchool.date}</p>
              </div>
            </div>
          </div>

          {/* Certificación */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                <Award className="w-5 h-5" style={{ color: '#EBEFBF' }} />
              </div>
              <h4 className="text-xl" style={{ color: '#000121' }}>
                {q.certificationsTitle}
              </h4>
            </div>
            <div style={{ color: '#000121' }}>
              <p className="text-lg">
                <span className="font-semibold">{q.certification.name}</span>
              </p>
              <p style={{ color: '#386FA4' }}>{q.certification.issuer}</p>
              <p className="mt-1">{q.certification.id}</p>
              <p className="mt-2">{q.certification.focus}</p>
            </div>
          </div>

          {/* Experiencia */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                <Briefcase className="w-5 h-5" style={{ color: '#EBEFBF' }} />
              </div>
              <h4 className="text-xl" style={{ color: '#000121' }}>
                {q.experienceTitle}
              </h4>
            </div>
            <div style={{ color: '#000121' }}>
              <p className="text-lg">
                <span className="font-semibold">{q.experience.role}</span>
              </p>
              <p style={{ color: '#386FA4' }}>{q.experience.period}</p>
              <ul className="mt-3 space-y-2">
                {q.experience.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#4A7C59' }}
                    ></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Habilidades técnicas */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Lenguajes y desarrollo */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                  <Code className="w-5 h-5" style={{ color: '#EBEFBF' }} />
                </div>
                <h4 className="text-xl" style={{ color: '#000121' }}>
                  {q.devTitle}
                </h4>
              </div>
              <ul className="space-y-2" style={{ color: '#000121' }}>
                {q.devItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#4A7C59' }}
                    ></span>
                    <span>
                      <span className="font-semibold">{item.label}</span> {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sistemas operativos */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                  <Terminal className="w-5 h-5" style={{ color: '#EBEFBF' }} />
                </div>
                <h4 className="text-xl" style={{ color: '#000121' }}>
                  {q.osTitle}
                </h4>
              </div>
              <ul className="space-y-2" style={{ color: '#000121' }}>
                {q.osItems.map((os, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#4A7C59' }}
                    ></span>
                    <span>{os}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Idiomas */}
            <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                  <Globe className="w-5 h-5" style={{ color: '#EBEFBF' }} />
                </div>
                <h4 className="text-xl" style={{ color: '#000121' }}>
                  {q.languagesTitle}
                </h4>
              </div>
              <ul className="space-y-2" style={{ color: '#000121' }}>
                {q.languagesItems.map((lang, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#4A7C59' }}
                    ></span>
                    <span>
                      <span className="font-semibold">{lang.label}</span> {lang.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
