import { Award, Languages, Globe2 } from 'lucide-react';

export function Oportunidades() {
  const opportunities = [
    {
      icon: Award,
      title: 'Certificación Específica',
      description: 'Completar la certificación Cisco Ethical Hacking, seguida de credenciales CISM (Certified Information Security Manager) y CISSP (Certified Information Systems Security Professional) para gobernanza de seguridad a nivel corporativo y liderazgo estratégico en gestión de riesgos.',
      color: '#4A7C59',
    },
    {
      icon: Languages,
      title: 'Idiomas y Lenguajes',
      description: 'Avanzar de nivel B1 a C1 en inglés, desarrollando competencia avanzada en investigación forense, threat intelligence y liderazgo de respuesta a incidentes. Este nivel permitirá participación efectiva en equipos internacionales y acceso a documentación técnica de vanguardia.',
      color: '#386FA4',
    },
    {
      icon: Globe2,
      title: 'Posiciones Regionales e Internacionales',
      description: 'Oportunidades regionales en organizaciones como Carvajal (pentesting continuo, auditorías de sistemas); posiciones internacionales remotas en SOC/Blue Team en América del Norte o Europa, aprovechando la creciente demanda de profesionales hispanohablantes con conocimiento técnico sólido.',
      color: '#4A7C59',
    },
  ];

  return (
    <section id="oportunidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            OPORTUNIDADES
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ backgroundColor: opportunity.color }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                  <opportunity.icon className="w-10 h-10" style={{ color: '#EBEFBF' }} />
                </div>
              </div>
              <h3 className="text-2xl text-center mb-6" style={{ color: '#EBEFBF' }}>
                {opportunity.title}
              </h3>
              <p className="text-center leading-relaxed" style={{ color: '#FFFFFF' }}>
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
