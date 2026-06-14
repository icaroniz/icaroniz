(function () {
  var LANG_KEY = 'in-lang';

  var copy = {
    en: {
      'nav-about':      'About',
      'nav-stack':      'Stack',
      'nav-experience': 'Experience',
      'nav-projects':   'Projects',
      'nav-contact':    'Contact',

      'hero-eyebrow': 'Senior Frontend Engineer · Technical Lead',
      'hero-title':   'Frontend engineering<br>with <em>leadership depth.</em>',
      'hero-body':    '13+ years building scalable web applications and leading frontend teams. Specialised in React, TypeScript, and modern frontend architecture in fast-paced, product-focused environments.',
      'hero-cta':     'View experience',

      'about-label': 'About',
      'about-title': 'Senior Frontend Engineer & Technical Lead',
      'about-body':  '<p>Over a decade building web applications and leading frontend initiatives across product-focused teams. My work spans frontend architecture, real-time applications, technical roadmapping, mentoring, code reviews, testing strategies, and close collaboration with product and design stakeholders.</p><p>I care about frontend performance, developer experience, and building software that creates real value for users — not just software that ships.</p><p>I believe in clean, maintainable code, strong team collaboration, and continuous improvement. The best engineering comes from teams that trust each other and share ownership of quality.</p>',
      'interests-label':  'Interests',
      'interest-0': 'Rock music & bass guitar',
      'interest-1': 'Drone flying',
      'interest-2': "Rubik's cubes",
      'interest-3': 'LEGO building',
      'location-label':   'Based in',
      'location-remote':  'Open to remote',

      'stack-label': 'Core Technologies',
      'stack-title': 'Tech stack',
      'stack-testing-cat': 'Testing & Practices',
      'stack-lead-cat':    'Leadership',
      'stack-lead-items':  'Mentoring · Hiring<br>Architecture · Roadmapping',

      'exp-label': 'Experience',
      'exp-title': 'Career',
      'exp-date-0': 'Jul 2024 – Present',
      'exp-earlier': 'Earlier',
      'role-0':   'Frontend Tech Lead',
      'desc-0':   '<li>Led frontend architecture and technical roadmap for an international sports betting platform across multiple markets.</li><li>Owned end-to-end technical direction: architecture decisions, code review standards, mentoring engineers, and collaborating with product and design.</li><li>Introduced and scaled TDD and automated testing practices across a legacy codebase.</li><li>Actively involved in frontend hiring — defining criteria, conducting interviews, and evaluating candidates.</li><li>Built and maintained real-time UIs using WebSockets and streaming data pipelines.</li>',
      'role-1':   'Senior Frontend Developer',
      'desc-1':   '<li>Took on expanded technical ownership of the frontend codebase while continuing product development.</li><li>Drove adoption of React + TypeScript across the team and participated in frontend architecture decisions.</li><li>Led code reviews and contributed to technical hiring.</li><li>Pushed for better engineering practices including pair programming and automated testing on legacy code.</li>',
      'role-2':   'Full-Stack Developer',
      'desc-2':   '<li>Developed and maintained a B2B platform for an international client, with a .NET backend and ReactJS frontend deployed on Azure.</li><li>Worked in a team with a strong engineering culture — frequent coding katas, TDD, and continuous integration from day one.</li>',
      'role-3':   'Frontend Developer',
      'desc-3':   '<li>Built and maintained frontend features for a multi-microservice sports betting platform integrated with third-party providers including BetGenius, iForium, and Flutterwave.</li><li>Worked in a Scrum team with regular pair programming and contributed to deployment pipeline improvements.</li>',
      'role-4':   'Frontend / Full-Stack Developer',
      'desc-4':   'Web development and technical leadership across multiple companies and product domains.',

      'proj-label': 'Projects',
      'proj-title': 'Featured work',
      'proj-0-name': 'Betting Platform Architecture',
      'proj-0-desc': 'Scalable frontend systems connected to microservices and real-time data providers for international audiences.',
      'proj-1-name': 'B2B Enterprise Application',
      'proj-1-desc': 'Full-stack system with CI/CD pipeline on Azure, built for international clients with high reliability requirements.',
      'proj-2-name': 'Internal Developer Tools',
      'proj-2-desc': 'Automation and tooling to improve developer workflows, reduce friction, and boost team productivity.',
      'proj-view-more': 'View more',

      'contact-label': 'Contact',
      'contact-title': "Let's talk",
      'contact-intro': 'Open to new opportunities, collaborations, or a good conversation about frontend architecture, team leadership, or engineering culture. Feel free to reach out.',

      'footer-blog': 'Blog · coming soon'
    },

    es: {
      'nav-about':      'Sobre mí',
      'nav-stack':      'Stack',
      'nav-experience': 'Experiencia',
      'nav-projects':   'Proyectos',
      'nav-contact':    'Contacto',

      'hero-eyebrow': 'Senior Frontend Engineer · Technical Lead',
      'hero-title':   'Ingeniería frontend<br>con <em>visión de liderazgo.</em>',
      'hero-body':    'Más de 13 años construyendo aplicaciones web escalables y liderando equipos de frontend. Especializado en React, TypeScript y arquitectura frontend moderna en entornos de producto.',
      'hero-cta':     'Ver experiencia',

      'about-label': 'Sobre mí',
      'about-title': 'Senior Frontend Engineer & Technical Lead',
      'about-body':  '<p>Más de una década construyendo aplicaciones web y liderando iniciativas de frontend en equipos centrados en producto. Mi trabajo abarca arquitectura frontend, aplicaciones en tiempo real, roadmapping técnico, mentoring, revisiones de código y colaboración estrecha con producto y diseño.</p><p>Me preocupa el rendimiento frontend, la experiencia del desarrollador y construir software que genere valor real para los usuarios — no solo software que se entrega.</p><p>Creo en código limpio y mantenible, en la colaboración de equipo y en la mejora continua. La mejor ingeniería surge de equipos que confían entre sí y comparten la responsabilidad de la calidad.</p>',
      'interests-label':  'Intereses',
      'interest-0': 'Música rock y bajo eléctrico',
      'interest-1': 'Vuelo con drones',
      'interest-2': 'Cubos de Rubik',
      'interest-3': 'LEGO',
      'location-label':   'Ubicación',
      'location-remote':  'Disponible en remoto',

      'stack-label': 'Tecnologías principales',
      'stack-title': 'Tech stack',
      'stack-testing-cat': 'Testing y prácticas',
      'stack-lead-cat':    'Liderazgo',
      'stack-lead-items':  'Mentoring · Contratación<br>Arquitectura · Roadmapping',

      'exp-label': 'Experiencia',
      'exp-title': 'Trayectoria',
      'exp-date-0': 'Jul 2024 – Actualidad',
      'exp-earlier': 'Anterior',
      'role-0':   'Frontend Tech Lead',
      'desc-0':   '<li>Liderazgo de la arquitectura frontend y el roadmap técnico de una plataforma internacional de apuestas deportivas en múltiples mercados.</li><li>Dirección técnica integral del equipo frontend: decisiones de arquitectura, estándares de revisión de código, mentoring e ingenieros, y colaboración con producto y diseño.</li><li>Introducción y escalado de prácticas de TDD y testing automatizado en una base de código legacy.</li><li>Participación activa en la contratación frontend — definiendo criterios, realizando entrevistas y evaluando candidatos.</li><li>Desarrollo y mantenimiento de interfaces en tiempo real mediante WebSockets y pipelines de datos en streaming.</li>',
      'role-1':   'Senior Frontend Developer',
      'desc-1':   '<li>Mayor responsabilidad técnica sobre el frontend compaginándola con el desarrollo de producto.</li><li>Impulso de la adopción de React + TypeScript en el equipo y participación en decisiones de arquitectura frontend.</li><li>Liderazgo de revisiones de código y contribución a la contratación técnica.</li><li>Promoción de mejores prácticas de ingeniería: pair programming y testing automatizado sobre código legacy.</li>',
      'role-2':   'Desarrollador Full-Stack',
      'desc-2':   '<li>Desarrollo y mantenimiento de una plataforma B2B para un cliente internacional, con backend en .NET y frontend en ReactJS desplegado en Azure.</li><li>Equipo con fuerte cultura de ingeniería: katas de código frecuentes, TDD e integración continua desde el primer día.</li>',
      'role-3':   'Desarrollador Frontend',
      'desc-3':   '<li>Desarrollo y mantenimiento de funcionalidades frontend para una plataforma de apuestas deportivas basada en microservicios, integrada con proveedores externos como BetGenius, iForium y Flutterwave.</li><li>Equipo Scrum con pair programming habitual y contribución a mejoras en los pipelines de despliegue.</li>',
      'role-4':   'Frontend / Full-Stack Developer',
      'desc-4':   'Desarrollo web y liderazgo técnico en distintas empresas y dominios de producto.',

      'proj-label': 'Proyectos',
      'proj-title': 'Trabajo destacado',
      'proj-0-name': 'Arquitectura de plataforma de apuestas',
      'proj-0-desc': 'Sistemas frontend escalables conectados a microservicios y proveedores de datos en tiempo real para audiencias internacionales.',
      'proj-1-name': 'Aplicación B2B Enterprise',
      'proj-1-desc': 'Sistema completo con CI/CD en Azure, para clientes internacionales con altos requisitos de fiabilidad.',
      'proj-2-name': 'Herramientas internas para desarrolladores',
      'proj-2-desc': 'Automatización y herramientas para mejorar los flujos de trabajo del equipo y reducir la fricción.',
      'proj-view-more': 'Ver más',

      'contact-label': 'Contacto',
      'contact-title': 'Hablemos',
      'contact-intro': 'Abierto a nuevas oportunidades, colaboraciones o una buena conversación sobre arquitectura frontend, liderazgo de equipos o cultura de ingeniería. No dudes en escribir.',

      'footer-blog': 'Blog · próximamente'
    }
  };

  function applyLang(lang) {
    var strings = copy[lang];
    if (!strings) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] === undefined) return;
      if (el.getAttribute('data-i18n-html') !== null) {
        el.innerHTML = strings[key];
      } else {
        el.textContent = strings[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    document.documentElement.lang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function init() {
    var saved;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
    var lang = saved || 'en';

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });

    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
