import { User, Code, Shield, Terminal, Globe } from 'lucide-react';

export function QuienEres() {
  return (
    <section id="quien-eres" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            ¿QUIÉN ERES?
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="rounded-2xl p-8 md:p-12 shadow-lg" style={{ backgroundColor: '#C6D8FF' }}>
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}>
                <User className="w-6 h-6" style={{ color: '#EBEFBF' }} />
              </div>
              <div>
                <h3 className="text-2xl mb-3" style={{ color: '#000121' }}>
                  Perfil Profesional Actual
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#000121' }}>
                  Estudiante de último semestre de Ingeniería informática con experiencia en desarrollo web remoto (Frontend/Backend) para el mercado estadounidense. Mi trayectoria profesional refleja una transición estratégica desde el desarrollo web hacia la ciberseguridad, con una clara orientación hacia el Blue Team y la defensa de infraestructuras críticas.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cybersecurity & Networks */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                  <Shield className="w-5 h-5" style={{ color: '#EBEFBF' }} />
                </div>
                <h4 className="text-xl" style={{ color: '#000121' }}>
                  Ciberseguridad & Redes
                </h4>
              </div>
              <ul className="space-y-2" style={{ color: '#000121' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Hacking Ético</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Firewalls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Wireshark</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Kali Linux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Cisco Packet Tracer</span>
                </li>
              </ul>
            </div>

            {/* Software Development */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                  <Code className="w-5 h-5" style={{ color: '#EBEFBF' }} />
                </div>
                <h4 className="text-xl" style={{ color: '#000121' }}>
                  Desarrollo & Infraestructura
                </h4>
              </div>
              <ul className="space-y-2" style={{ color: '#000121' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Git/GitHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Unit Testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Node-RED</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Figma</span>
                </li>
              </ul>
            </div>

            {/* Operating Systems */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                  <Terminal className="w-5 h-5" style={{ color: '#EBEFBF' }} />
                </div>
                <h4 className="text-xl" style={{ color: '#000121' }}>
                  Sistemas Operativos
                </h4>
              </div>
              <ul className="space-y-2" style={{ color: '#000121' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Linux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>macOS Administration</span>
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#386FA4' }}>
                  <Globe className="w-5 h-5" style={{ color: '#EBEFBF' }} />
                </div>
                <h4 className="text-xl" style={{ color: '#000121' }}>
                  Idiomas
                </h4>
              </div>
              <ul className="space-y-2" style={{ color: '#000121' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Español Nativo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#4A7C59' }}></span>
                  <span>Inglés B1 con enfoque técnico</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
