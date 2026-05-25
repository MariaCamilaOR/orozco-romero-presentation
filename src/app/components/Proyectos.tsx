import { Cpu, Brain, GitBranch, ExternalLink, Youtube, Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [Cpu, Brain, GitBranch];
const colors = ['#4A7C59', '#386FA4', '#4A7C59'];

export function Proyectos() {
  const { t } = useLanguage();
  const projects = t.proyectos.items;

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ color: '#000121' }}>
            {t.proyectos.title}
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#4A7C59' }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = icons[index] ?? Cpu;
            const color = colors[index] ?? '#4A7C59';
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 flex flex-col"
                style={{ borderColor: '#C6D8FF' }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full" style={{ backgroundColor: color }}>
                    <Icon className="w-8 h-8" style={{ color: '#EBEFBF' }} />
                  </div>
                </div>
                <h3 className="text-xl text-center mb-2" style={{ color: '#000121' }}>
                  {project.title}
                </h3>
                <p className="text-center mb-4" style={{ color: '#386FA4' }}>
                  {project.subtitle}
                </p>
                <p className="text-center leading-relaxed mb-6 flex-1" style={{ color: '#000121' }}>
                  {project.description}
                </p>
                <div className="space-y-3">
                  {project.links.map((link, i) => {
                    const LinkIcon =
                      link.type === 'youtube' ? Youtube : link.type === 'github' ? Github : ExternalLink;
                    return (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-transform hover:scale-105 shadow-sm"
                        style={{ backgroundColor: '#C6D8FF', color: '#000121' }}
                      >
                        <LinkIcon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{link.label}</span>
                        <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-70" />
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
