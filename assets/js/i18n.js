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
      'hero-body':    '10+ years building scalable web applications and leading frontend teams. Specialised in React, TypeScript, and modern frontend architecture in fast-paced, product-focused environments.',
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
      'role-0':   'Technical Lead / Senior Frontend Engineer',
      'desc-0':   '<li>Led frontend technical decisions and contributed to architecture planning and technical roadmaps.</li><li>Developed and maintained React + TypeScript applications for international sports betting products.</li><li>Designed and implemented real-time user interfaces using WebSockets and streaming data feeds.</li><li>Mentored junior developers and supported career growth across the engineering team.</li><li>Participated in hiring, technical interviews, and candidate evaluations.</li><li>Performed code reviews and promoted engineering best practices, including TDD and automated testing.</li><li>Collaborated with product, design, and business stakeholders to assess technical feasibility and define implementation strategies.</li><li>Supported production troubleshooting and operational investigations across container-based systems.</li>',
      'role-1':   'Full-Stack Developer',
      'desc-1':   'B2B applications for international clients using React and .NET, deployed on Azure. Agile development and engineering best practices.',
      'role-2':   'Frontend Developer',
      'desc-2':   '<li>Participated in frontend technical decisions and contributed to architecture planning.</li><li>Developed and maintained React + TypeScript applications for international sports betting products.</li><li>Designed and implemented real-time user interfaces using WebSockets and streaming data feeds.</li><li>Participated in hiring and technical interviews.</li><li>Performed code reviews and promoted engineering best practices, including TDD and automated testing.</li><li>Supported production troubleshooting and operational investigations across container-based systems.</li>',
      'role-3':   'Frontend / Full-Stack Developer',
      'desc-3':   'Web development and technical leadership across multiple companies and product domains.',
      'exp-earlier': 'Earlier',

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
      'hero-body':    'Más de 10 años construyendo aplicaciones web escalables y liderando equipos de frontend. Especializado en React, TypeScript y arquitectura frontend moderna en entornos de producto.',
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
      'role-0':   'Technical Lead / Senior Frontend Engineer',
      'desc-0':   '<li>Liderazgo de decisiones técnicas frontend y contribución a la planificación de arquitectura y roadmaps técnicos.</li><li>Desarrollo y mantenimiento de aplicaciones React + TypeScript para productos internacionales de apuestas deportivas.</li><li>Diseño e implementación de interfaces en tiempo real con WebSockets y feeds de datos en streaming.</li><li>Mentoring a desarrolladores junior y apoyo al crecimiento profesional del equipo de ingeniería.</li><li>Participación en procesos de selección, entrevistas técnicas y evaluación de candidatos.</li><li>Revisiones de código y promoción de buenas prácticas de ingeniería, incluyendo TDD y testing automatizado.</li><li>Colaboración con producto, diseño y negocio para evaluar viabilidad técnica y definir estrategias de implementación.</li><li>Soporte en resolución de incidencias en producción e investigaciones operativas en sistemas basados en contenedores.</li>',
      'role-1':   'Full-Stack Developer',
      'desc-1':   'Aplicaciones B2B para clientes internacionales con React y .NET desplegadas en Azure. Desarrollo ágil y buenas prácticas de ingeniería.',
      'role-2':   'Frontend Developer',
      'desc-2':   '<li>Participación en decisiones técnicas frontend y contribución a la planificación de arquitectura.</li><li>Desarrollo y mantenimiento de aplicaciones React + TypeScript para productos internacionales de apuestas deportivas.</li><li>Diseño e implementación de interfaces en tiempo real con WebSockets y feeds de datos en streaming.</li><li>Participación en procesos de selección y entrevistas técnicas.</li><li>Revisiones de código y promoción de buenas prácticas de ingeniería, incluyendo TDD y testing automatizado.</li><li>Soporte en resolución de incidencias en producción e investigaciones operativas en sistemas basados en contenedores.</li>',
      'role-3':   'Frontend / Full-Stack Developer',
      'desc-3':   'Desarrollo web y liderazgo técnico en distintas empresas y dominios de producto.',
      'exp-earlier': 'Anterior',

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
