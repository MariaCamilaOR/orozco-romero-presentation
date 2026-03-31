import { Mail, Linkedin, Github } from 'lucide-react';
import profileImg from '../images/cv.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img
              src={profileImg}
              alt="María Camila Orozco Romero"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
              style={{ border: '4px solid #C6D8FF' }}
            />
          </div>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ color: '#000121' }}>
            María Camila Orozco Romero
          </h1>
          <p className="text-2xl md:text-3xl mb-8" style={{ color: '#386FA4' }}>
            Cybersecurity Specialist & Informatics Engineer
          </p>
          <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: '#000121' }}>
            Estudiante de último semestre de Ingeniería Informática con orientación Blue Team, 
            especializada en defensa de infraestructuras críticas y análisis de ciberseguridad.
          </p>
          <button
            onClick={() => scrollToSection('quien-eres')}
            className="px-8 py-4 rounded-lg transition-transform hover:scale-105 shadow-lg text-lg"
            style={{ backgroundColor: '#4A7C59', color: '#EBEFBF' }}
          >
            Explorar Mi Perfil
          </button>
        </div>
      </div>
    </section>
  );
}
