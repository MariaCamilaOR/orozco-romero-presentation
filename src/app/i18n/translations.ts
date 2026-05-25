export type Language = 'es' | 'en';

export type Translation = {
  header: {
    brand: string;
    role: string;
    nav: {
      quienEres: string;
      proyectos: string;
      fuentes: string;
      tendencias: string;
      oportunidades: string;
      plan: string;
    };
    toggle: {
      label: string;
      ariaSwitchToEs: string;
      ariaSwitchToEn: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  quienEres: {
    title: string;
    profileTitle: string;
    profileText: string;
    formationTitle: string;
    formationUniversity: {
      degree: string;
      institution: string;
      place: string;
      period: string;
      focus: string;
    };
    formationHighSchool: {
      degree: string;
      institution: string;
      date: string;
    };
    certificationsTitle: string;
    certification: {
      name: string;
      issuer: string;
      id: string;
      focus: string;
    };
    experienceTitle: string;
    experience: {
      role: string;
      period: string;
      bullets: string[];
    };
    devTitle: string;
    devItems: { label: string; value: string }[];
    osTitle: string;
    osItems: string[];
    languagesTitle: string;
    languagesItems: { label: string; value: string }[];
  };
  proyectos: {
    title: string;
    linksLabel: {
      youtube: string;
      github: string;
    };
    items: {
      title: string;
      subtitle: string;
      description: string;
      links: { label: string; url: string; type: 'youtube' | 'github' }[];
    }[];
  };
  fuentes: {
    title: string;
    items: {
      title: string;
      subtitle: string;
      description: string;
    }[];
  };
  tendencias: {
    title: string;
    sourcesLabel: string;
    items: {
      title: string;
      description: string;
      sources: string;
    }[];
  };
  oportunidades: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  plan: {
    title: string;
    projection: string;
    roleTitle: string;
    roleText: string;
    experiencesTitle: string;
    experiences: string[];
    goalsTitle: string;
    goals: string[];
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    rights: string;
  };
};

export const translations: Record<Language, Translation> = {
  es: {
    header: {
      brand: 'María Camila Orozco Romero',
      role: 'Desarrolladora Web · Ing. Informática',
      nav: {
        quienEres: '¿Quién eres?',
        proyectos: 'Proyectos',
        fuentes: 'Fuentes',
        tendencias: 'Tendencias',
        oportunidades: 'Oportunidades',
        plan: 'Plan 5 Años',
      },
      toggle: {
        label: 'EN',
        ariaSwitchToEs: 'Cambiar a español',
        ariaSwitchToEn: 'Switch to English',
      },
    },
    hero: {
      title: 'María Camila Orozco Romero',
      subtitle: 'Desarrolladora Web Frontend & Estudiante de Ingeniería Informática',
      description:
        'Experiencia práctica en desarrollo Frontend y Backend para el mercado estadounidense. Apasionada por la ciberseguridad, la inteligencia artificial y el Internet de las Cosas (IoT), con conocimientos en auditoría de sistemas y gestión de proyectos TI.',
      cta: 'Explorar Mi Perfil',
    },
    quienEres: {
      title: '¿QUIÉN ERES?',
      profileTitle: 'Perfil Profesional',
      profileText:
        'Estudiante de Ingeniería Informática con experiencia práctica en desarrollo web, abarcando Frontend y Backend con un enfoque principal en Frontend, para el mercado estadounidense. Apasionada por la ciberseguridad, la inteligencia artificial y el Internet de las Cosas (IoT). Cuento con conocimientos en auditoría de sistemas y gestión de proyectos TI. Me considero una persona dedicada, con capacidad de adaptación y facilidad para la comunicación efectiva en entornos de trabajo remotos o presenciales. Mi objetivo es integrarme a un equipo experimentado donde pueda aportar valor mientras continúo fortaleciendo mis habilidades técnicas.',
      formationTitle: 'Formación Académica',
      formationUniversity: {
        degree: 'Ingeniería Informática',
        institution: 'Universidad Autónoma de Occidente',
        place: 'Cali, Colombia',
        period: '2022 – Marzo 2026 (Fecha de grado estimada)',
        focus: 'Enfoque académico: Ciberseguridad, Inteligencia Artificial (Fundamentos), IoT y Redes.',
      },
      formationHighSchool: {
        degree: 'Bachiller Técnico con especialidad en Dibujo Técnico',
        institution: 'ITI San Juan Bosco',
        date: 'Fecha de grado: Junio 2 de 2022',
      },
      certificationsTitle: 'Certificaciones',
      certification: {
        name: 'HCIA-AI V4.0 Course (Artificial Intelligence)',
        issuer: 'Huawei ICT Academy & MinTIC (Avanza TEC) · Mayo 2026',
        id: 'ID de Certificación: ICT20260517005170',
        focus:
          'Enfoque: Machine Learning, Deep Learning y Foundation Models. Curso y evaluación desarrollados completamente en inglés.',
      },
      experienceTitle: 'Experiencia Profesional',
      experience: {
        role: 'Desarrolladora Web · Empresa estadounidense (Trabajo remoto desde Cali)',
        period: 'Periodos: Junio 2024, Julio 2024 y Junio 2025',
        bullets: [
          'Desarrollé e implementé funcionalidades tanto en Frontend como en Backend siguiendo los flujos de trabajo de la compañía.',
          'Integré interfaces de usuario responsivas siguiendo estrictamente las guías de diseño en Figma, asegurando consistencia visual y usabilidad.',
          'Mantuve comunicación fluida y efectiva con el equipo remoto mediante reportes diarios de avance y videollamadas semanales, garantizando la alineación con los objetivos del proyecto.',
        ],
      },
      devTitle: 'Desarrollo de Software',
      devItems: [
        { label: 'Lenguajes:', value: 'Python, JavaScript, C/C++ (Arduino)' },
        { label: 'Frontend & Backend:', value: 'React, MySQL' },
        { label: 'Herramientas:', value: 'Git, GitHub, Figma, ClickUp' },
      ],
      osTitle: 'Sistemas Operativos',
      osItems: ['Linux', 'Windows'],
      languagesTitle: 'Idiomas',
      languagesItems: [
        { label: 'Español:', value: 'Nativo' },
        { label: 'Inglés:', value: 'Nivel B1' },
      ],
    },
    proyectos: {
      title: 'PROYECTOS',
      linksLabel: { youtube: 'Ver en YouTube', github: 'Ver en GitHub' },
      items: [
        {
          title: 'Proyecto personal de IoT',
          subtitle: 'Internet de las Cosas · Arduino / C++',
          description:
            'Exploración práctica del Internet de las Cosas: desde la primera prueba inicial hasta la evidencia y explicación final del proyecto, integrando hardware y comunicación de dispositivos.',
          links: [
            {
              label: 'Primera prueba (YouTube)',
              url: 'https://www.youtube.com/watch?v=6vm-uY6uU2c',
              type: 'youtube',
            },
            {
              label: 'Evidencia y explicación (YouTube)',
              url: 'https://www.youtube.com/watch?v=h1BHv7a4omU',
              type: 'youtube',
            },
          ],
        },
        {
          title: 'Identificador de Imágenes (IA)',
          subtitle: 'Fundamentos de Inteligencia Artificial · Python',
          description:
            'Miniproyecto enfocado en el procesamiento e identificación de imágenes aplicando los fundamentos de la inteligencia artificial vistos en el curso.',
          links: [
            {
              label: 'Repositorio en GitHub',
              url: 'https://github.com/MariaCamilaOR/Fundamentos-IA-miniproject3',
              type: 'github',
            },
          ],
        },
        {
          title: 'Estructura de Datos y Algoritmos',
          subtitle: 'Actividades académicas · EDyA2',
          description:
            'Colección de actividades y tareas desarrolladas en el curso de Estructura de Datos y Algoritmos, evidenciando la práctica con estructuras, algoritmos y resolución de problemas.',
          links: [
            {
              label: 'Repositorio en GitHub (rama Homeworks)',
              url: 'https://github.com/MariaCamilaOR/EDyA2_Homeworks/tree/Homeworks',
              type: 'github',
            },
          ],
        },
      ],
    },
    fuentes: {
      title: 'FUENTES DE INFORMACIÓN',
      items: [
        {
          title: 'YouTube',
          subtitle: 'Tutoriales y contenido técnico',
          description:
            'Aprendizaje continuo sobre desarrollo Frontend con React, fundamentos de Inteligencia Artificial, proyectos de IoT con Arduino y temas de ciberseguridad a través de canales especializados.',
        },
        {
          title: 'Documentación oficial y artículos',
          subtitle: 'React, MDN, GitHub Docs, Huawei ICT Academy',
          description:
            'Consulta diaria de documentación oficial (React, JavaScript, Python), guías de la Huawei ICT Academy en el marco de la certificación HCIA-AI y artículos especializados en IA y ciberseguridad para mantenerme actualizada.',
        },
        {
          title: 'Comunidades y redes profesionales',
          subtitle: 'LinkedIn, GitHub y grupos universitarios',
          description:
            'Participación en comunidades técnicas en LinkedIn y GitHub, además del intercambio con compañeros y docentes de la Universidad Autónoma de Occidente, lo que me permite estar conectada con oportunidades y tendencias del sector.',
        },
      ],
    },
    tendencias: {
      title: 'TENDENCIAS',
      sourcesLabel: 'Fuentes:',
      items: [
        {
          title: 'Desarrollo Web Moderno (React y experiencia de usuario)',
          description:
            'Crecimiento sostenido en la demanda de desarrolladores Frontend con dominio de React, diseño responsivo y trabajo cercano con herramientas como Figma. Las empresas, especialmente del mercado estadounidense, valoran perfiles capaces de implementar interfaces accesibles y consistentes en equipos remotos.',
          sources: 'Documentación oficial de React, comunidades de desarrollo en LinkedIn y GitHub',
        },
        {
          title: 'Inteligencia Artificial aplicada (Machine Learning y Foundation Models)',
          description:
            'Adopción acelerada de modelos de IA, Deep Learning y Foundation Models en productos cotidianos. Crece la importancia de comprender los fundamentos de ML para integrar IA de forma responsable en aplicaciones web, automatización y análisis de datos.',
          sources: 'Curso HCIA-AI V4.0 (Huawei ICT Academy & MinTIC), contenido especializado en YouTube',
        },
        {
          title: 'Internet de las Cosas (IoT) y sistemas conectados',
          description:
            'Expansión de soluciones IoT en hogares, industria y ciudades inteligentes, con énfasis en dispositivos basados en Arduino y microcontroladores. Esto exige perfiles que combinen programación en C/C++, comunicación entre dispositivos y conciencia de ciberseguridad desde el diseño.',
          sources: 'Proyectos académicos, tutoriales técnicos en YouTube y documentación de Arduino',
        },
      ],
    },
    oportunidades: {
      title: 'OPORTUNIDADES',
      items: [
        {
          title: 'Crecimiento técnico y certificaciones',
          description:
            'Profundizar en el ecosistema Frontend (React avanzado, TypeScript, testing) y complementarlo con nuevas certificaciones en Inteligencia Artificial, IoT y ciberseguridad, partiendo de la base ya obtenida con la certificación HCIA-AI V4.0 de Huawei.',
        },
        {
          title: 'Fortalecer el inglés técnico',
          description:
            'Avanzar del nivel B1 actual hacia un B2/C1, aprovechando la experiencia con clientes estadounidenses y el curso HCIA-AI desarrollado completamente en inglés. Esto abrirá la puerta a posiciones remotas internacionales y a documentación técnica de vanguardia.',
        },
        {
          title: 'Oportunidades laborales y proyectos',
          description:
            'Integrarme a un equipo experimentado donde pueda aportar valor en desarrollo web, mientras exploro proyectos que combinen mis intereses en IA, IoT y ciberseguridad. Tanto en empresas locales en Cali/Colombia como en posiciones remotas para el mercado estadounidense o europeo.',
        },
      ],
    },
    plan: {
      title: 'PLAN A 5 AÑOS',
      projection: 'Proyección 2031',
      roleTitle: 'Cargo/Rol',
      roleText:
        'Desarrolladora Web Senior con enfoque en Frontend (React) y experiencia Full-Stack, integrando soluciones con inteligencia artificial e IoT en proyectos internacionales, dentro de un equipo remoto consolidado o con posibilidad de liderazgo técnico en Colombia.',
      experiencesTitle: 'Experiencias',
      experiences: [
        'Desarrollo web Frontend y Backend en equipos internacionales',
        'Implementación de modelos de IA en aplicaciones web',
        'Proyectos de IoT y sistemas conectados',
        'Auditoría de sistemas y gestión de proyectos TI',
        'Buenas prácticas de ciberseguridad aplicadas al desarrollo',
        'Trabajo remoto efectivo con clientes en el exterior',
      ],
      goalsTitle: 'Metas Alcanzadas',
      goals: [
        'Título de Ingeniería Informática (Universidad Autónoma de Occidente)',
        'Certificación HCIA-AI V4.0 (Huawei ICT Academy & MinTIC)',
        'Nuevas certificaciones en IA, IoT o ciberseguridad',
        'Inglés a nivel B2/C1',
        'Portafolio sólido de proyectos en GitHub',
        'Participación estable en proyectos internacionales',
      ],
    },
    footer: {
      description:
        'Desarrolladora Web Frontend & Estudiante de Ingeniería Informática. Apasionada por la ciberseguridad, la IA y el IoT.',
      quickLinks: 'Navegación Rápida',
      contact: 'Contacto',
      rights: '© 2026 María Camila Orozco Romero. Todos los derechos reservados.',
    },
  },

  en: {
    header: {
      brand: 'María Camila Orozco Romero',
      role: 'Web Developer · Informatics Engineering',
      nav: {
        quienEres: 'About Me',
        proyectos: 'Projects',
        fuentes: 'Sources',
        tendencias: 'Trends',
        oportunidades: 'Opportunities',
        plan: '5-Year Plan',
      },
      toggle: {
        label: 'ES',
        ariaSwitchToEs: 'Cambiar a español',
        ariaSwitchToEn: 'Switch to English',
      },
    },
    hero: {
      title: 'María Camila Orozco Romero',
      subtitle: 'Frontend Web Developer & Informatics Engineering Student',
      description:
        'Hands-on experience in Frontend and Backend development for the U.S. market. Passionate about cybersecurity, artificial intelligence and the Internet of Things (IoT), with knowledge in systems auditing and IT project management.',
      cta: 'Explore My Profile',
    },
    quienEres: {
      title: 'ABOUT ME',
      profileTitle: 'Professional Profile',
      profileText:
        'Informatics Engineering student with hands-on experience in web development, covering both Frontend and Backend with a main focus on Frontend, for the U.S. market. Passionate about cybersecurity, artificial intelligence and the Internet of Things (IoT). I have knowledge in systems auditing and IT project management. I consider myself dedicated, adaptable and able to communicate effectively in both remote and on-site environments. My goal is to join an experienced team where I can add value while continuing to strengthen my technical skills.',
      formationTitle: 'Academic Background',
      formationUniversity: {
        degree: 'Informatics Engineering',
        institution: 'Universidad Autónoma de Occidente',
        place: 'Cali, Colombia',
        period: '2022 – March 2026 (Estimated graduation date)',
        focus: 'Academic focus: Cybersecurity, Artificial Intelligence (Fundamentals), IoT and Networks.',
      },
      formationHighSchool: {
        degree: 'Technical High School Diploma with specialization in Technical Drawing',
        institution: 'ITI San Juan Bosco',
        date: 'Graduation date: June 2, 2022',
      },
      certificationsTitle: 'Certifications',
      certification: {
        name: 'HCIA-AI V4.0 Course (Artificial Intelligence)',
        issuer: 'Huawei ICT Academy & MinTIC (Avanza TEC) · May 2026',
        id: 'Certification ID: ICT20260517005170',
        focus:
          'Focus: Machine Learning, Deep Learning and Foundation Models. Course and evaluation delivered entirely in English.',
      },
      experienceTitle: 'Professional Experience',
      experience: {
        role: 'Web Developer · U.S. company (Remote work from Cali)',
        period: 'Periods: June 2024, July 2024 and June 2025',
        bullets: [
          'Developed and implemented features on both Frontend and Backend following the company workflows.',
          'Integrated responsive user interfaces strictly following Figma design guidelines, ensuring visual consistency and usability.',
          'Maintained fluid and effective communication with the remote team through daily progress reports and weekly video calls, ensuring alignment with project goals.',
        ],
      },
      devTitle: 'Software Development',
      devItems: [
        { label: 'Languages:', value: 'Python, JavaScript, C/C++ (Arduino)' },
        { label: 'Frontend & Backend:', value: 'React, MySQL' },
        { label: 'Tools:', value: 'Git, GitHub, Figma, ClickUp' },
      ],
      osTitle: 'Operating Systems',
      osItems: ['Linux', 'Windows'],
      languagesTitle: 'Languages',
      languagesItems: [
        { label: 'Spanish:', value: 'Native' },
        { label: 'English:', value: 'B1 Level' },
      ],
    },
    proyectos: {
      title: 'PROJECTS',
      linksLabel: { youtube: 'Watch on YouTube', github: 'View on GitHub' },
      items: [
        {
          title: 'Personal IoT Project',
          subtitle: 'Internet of Things · Arduino / C++',
          description:
            'Hands-on exploration of the Internet of Things: from the initial proof of concept to the final demo and explanation of the project, integrating hardware and device communication.',
          links: [
            {
              label: 'First test (YouTube)',
              url: 'https://www.youtube.com/watch?v=6vm-uY6uU2c',
              type: 'youtube',
            },
            {
              label: 'Demo and explanation (YouTube)',
              url: 'https://www.youtube.com/watch?v=h1BHv7a4omU',
              type: 'youtube',
            },
          ],
        },
        {
          title: 'Image Identifier (AI)',
          subtitle: 'AI Fundamentals · Python',
          description:
            'Mini-project focused on image processing and identification by applying the AI fundamentals studied in the course.',
          links: [
            {
              label: 'GitHub Repository',
              url: 'https://github.com/MariaCamilaOR/Fundamentos-IA-miniproject3',
              type: 'github',
            },
          ],
        },
        {
          title: 'Data Structures and Algorithms',
          subtitle: 'Coursework · EDyA2',
          description:
            'Collection of activities and assignments developed during the Data Structures and Algorithms course, showcasing practice with structures, algorithms and problem solving.',
          links: [
            {
              label: 'GitHub Repository (Homeworks branch)',
              url: 'https://github.com/MariaCamilaOR/EDyA2_Homeworks/tree/Homeworks',
              type: 'github',
            },
          ],
        },
      ],
    },
    fuentes: {
      title: 'INFORMATION SOURCES',
      items: [
        {
          title: 'YouTube',
          subtitle: 'Tutorials and technical content',
          description:
            'Continuous learning about Frontend development with React, Artificial Intelligence fundamentals, Arduino IoT projects, and cybersecurity topics through specialized channels.',
        },
        {
          title: 'Official documentation and articles',
          subtitle: 'React, MDN, GitHub Docs, Huawei ICT Academy',
          description:
            'Daily review of official documentation (React, JavaScript, Python), Huawei ICT Academy guides within the HCIA-AI certification, and specialized articles on AI and cybersecurity to stay up to date.',
        },
        {
          title: 'Communities and professional networks',
          subtitle: 'LinkedIn, GitHub and university groups',
          description:
            'Active participation in technical communities on LinkedIn and GitHub, as well as exchange with peers and professors at Universidad Autónoma de Occidente, keeping me connected with industry opportunities and trends.',
        },
      ],
    },
    tendencias: {
      title: 'TRENDS',
      sourcesLabel: 'Sources:',
      items: [
        {
          title: 'Modern Web Development (React and user experience)',
          description:
            'Sustained growth in demand for Frontend developers with strong React skills, responsive design and close work with tools like Figma. Companies, especially in the U.S. market, value profiles capable of delivering accessible and consistent interfaces in remote teams.',
          sources: 'Official React documentation, development communities on LinkedIn and GitHub',
        },
        {
          title: 'Applied Artificial Intelligence (Machine Learning and Foundation Models)',
          description:
            'Accelerated adoption of AI, Deep Learning and Foundation Model technologies in everyday products. Understanding ML fundamentals is becoming essential to responsibly integrate AI into web applications, automation and data analysis.',
          sources: 'HCIA-AI V4.0 course (Huawei ICT Academy & MinTIC), specialized YouTube content',
        },
        {
          title: 'Internet of Things (IoT) and connected systems',
          description:
            'Expansion of IoT solutions in homes, industry and smart cities, with an emphasis on devices based on Arduino and microcontrollers. This calls for profiles combining C/C++ programming, device communication, and security awareness from the design stage.',
          sources: 'Academic projects, technical tutorials on YouTube and Arduino documentation',
        },
      ],
    },
    oportunidades: {
      title: 'OPPORTUNITIES',
      items: [
        {
          title: 'Technical growth and certifications',
          description:
            'Deepen expertise in the Frontend ecosystem (advanced React, TypeScript, testing) and complement it with new certifications in Artificial Intelligence, IoT and cybersecurity, building on the foundation already obtained with the HCIA-AI V4.0 certification from Huawei.',
        },
        {
          title: 'Strengthening technical English',
          description:
            'Advance from the current B1 level toward B2/C1, leveraging experience with U.S. clients and the HCIA-AI course delivered entirely in English. This will open the door to international remote positions and cutting-edge technical documentation.',
        },
        {
          title: 'Job opportunities and projects',
          description:
            'Joining an experienced team where I can add value in web development, while exploring projects that combine my interests in AI, IoT and cybersecurity. Both at local companies in Cali/Colombia and in remote positions for the U.S. or European market.',
        },
      ],
    },
    plan: {
      title: '5-YEAR PLAN',
      projection: '2031 Projection',
      roleTitle: 'Position/Role',
      roleText:
        'Senior Web Developer with a focus on Frontend (React) and Full-Stack experience, integrating Artificial Intelligence and IoT solutions into international projects, within a consolidated remote team or with the possibility of technical leadership in Colombia.',
      experiencesTitle: 'Experiences',
      experiences: [
        'Frontend and Backend web development in international teams',
        'Implementation of AI models in web applications',
        'IoT and connected systems projects',
        'Systems auditing and IT project management',
        'Cybersecurity best practices applied to development',
        'Effective remote work with international clients',
      ],
      goalsTitle: 'Achievements',
      goals: [
        'Informatics Engineering degree (Universidad Autónoma de Occidente)',
        'HCIA-AI V4.0 Certification (Huawei ICT Academy & MinTIC)',
        'New certifications in AI, IoT or cybersecurity',
        'English at B2/C1 level',
        'Solid project portfolio on GitHub',
        'Stable participation in international projects',
      ],
    },
    footer: {
      description:
        'Frontend Web Developer & Informatics Engineering Student. Passionate about cybersecurity, AI and IoT.',
      quickLinks: 'Quick Navigation',
      contact: 'Contact',
      rights: '© 2026 María Camila Orozco Romero. All rights reserved.',
    },
  },
};
