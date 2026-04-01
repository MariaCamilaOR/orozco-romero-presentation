import { Youtube, Search, Facebook } from 'lucide-react';

export function Fuentes() {
  const sources = [
    {
      icon: Youtube,
      title: 'YouTube',
      subtitle: 'Contenido Técnico Especializado',
      description: 'Aprendizaje diario a través de canales expertos como Kasiu Tech y VT Security, enfocados en ciberseguridad práctica, análisis de vulnerabilidades y técnicas de defensa actualizadas.',
      color: '#4A7C59',
    },
    {
      icon: Search,
      title: 'Google Search / suscripciones y Artículos Especializados',
      subtitle: '',
      description: 'Investigación y documentación desde fuentes como Ciberseguridad.com, Avanzatec, bases de datos CVE (Common Vulnerabilities and Exposures) y estándares de auditoría para mantenerse actualizada en amenazas emergentes y mejores prácticas.',
      color: '#386FA4',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      subtitle: 'Comunidades Profesionales',
      description: 'Monitoreo selectivo de grupos de tecnología y ciberseguridad colombianos y latinoamericanos para mantenerse conectada con el ecosistema regional, oportunidades laborales y tendencias del mercado local.',
      color: '#4A7C59',
    },
  ];

  return (
    <section id="fuentes" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            FUENTES DE INFORMACIÓN
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sources.map((source, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2"
              style={{ borderColor: '#C6D8FF' }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: source.color }}>
                  <source.icon className="w-8 h-8" style={{ color: '#EBEFBF' }} />
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
          ))}
        </div>
      </div>
    </section>
  );
}
