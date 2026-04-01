import { Target, Briefcase, Trophy } from 'lucide-react';

export function Plan() {
  return (
    <section id="plan" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C6D8FF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            PLAN A 5 AÑOS
          </h2>
          <p className="text-xl mb-6" style={{ color: '#386FA4' }}>
            Proyección 2031
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
                  Cargo/Rol
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#000121' }}>
                  Certified Cybersecurity Engineer o Specialist dentro de un Blue Team multinacional, con posibilidad de trabajo remoto o posición de liderazgo técnico en Colombia.
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
                  Experiencias
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Defensa de infraestructuras críticas
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Análisis forense digital
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Respuesta automatizada a incidentes
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Auditoría de sistemas de información
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Integración SecDevOps
                    </span>
                  </div>
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
                  Metas Alcanzadas
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#386FA4' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Título de Ingeniería informática 
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#386FA4' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Especialización en Ciberseguridad (Universidad Autónoma de Occidente)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#386FA4' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Certificaciones CISM/CISSP
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#386FA4' }}></span>
                    <span className="text-lg" style={{ color: '#000121' }}>
                      Dominio del inglés nivel C1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
