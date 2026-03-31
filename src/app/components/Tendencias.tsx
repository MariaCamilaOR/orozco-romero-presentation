import { TrendingUp, Lock, Brain } from 'lucide-react';

export function Tendencias() {
  const trends = [
    {
      icon: TrendingUp,
      title: 'Ciberseguridad Analítica y Automatizada',
      description: 'Demanda creciente de ingenieros con conocimiento profundo en sistemas operativos, protocolos TCP/IP y habilidades de automatización mediante Python y Bash para respuesta rápida ante incidentes.',
      sources: 'VT Security y Kasiu Tech videos',
    },
    {
      icon: Lock,
      title: 'Seguridad por Diseño (SecDevOps) y Modelo Zero Trust',
      description: 'Integración de escaneo de vulnerabilidades en el código antes de su paso a producción y verificación continua de identidad en cada punto de acceso, eliminando la confianza implícita en redes corporativas.',
      sources: 'Digital Economy Cluster analysis y Ciberseguridad.com artículos',
    },
    {
      icon: Brain,
      title: 'Inteligencia Artificial Dual (Ofensiva y Defensiva)',
      description: 'Uso de IA/ML para detección de anomalías de red en tiempo real y para automatizar campañas de phishing sofisticadas, creando un panorama donde tanto atacantes como defensores emplean machine learning.',
      sources: 'Global technology trend summaries on YouTube',
    },
  ];

  return (
    <section id="tendencias" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C6D8FF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            TENDENCIAS
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="space-y-8">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl" style={{ backgroundColor: '#4A7C59' }}>
                    <trend.icon className="w-10 h-10" style={{ color: '#EBEFBF' }} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-4" style={{ color: '#000121' }}>
                    {trend.title}
                  </h3>
                  <p className="text-lg mb-4 leading-relaxed" style={{ color: '#000121' }}>
                    {trend.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#386FA4' }}>Fuentes:</span>
                    <span className="italic" style={{ color: '#386FA4' }}>
                      {trend.sources}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
