(() => {
  const nav = document.querySelector('.site-header__nav');

  if (!nav) {
    return;
  }

  const navLinks = Array.from(nav.querySelectorAll('.site-header__nav-link'));
  const homeLink = nav.querySelector('.site-header__nav-link[data-nav-home]');
  const sectionLinks = Array.from(nav.querySelectorAll('.site-header__nav-link[data-section]'));

  const sectionTargets = sectionLinks
    .map((link) => {
      const sectionId = link.dataset.section;
      const section = sectionId ? document.getElementById(sectionId) : null;

      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!homeLink || sectionTargets.length === 0) {
    return;
  }

  const setCurrentLink = (nextCurrentLink) => {
    navLinks.forEach((link) => {
      link.classList.remove('site-header__nav-link--current');
      link.removeAttribute('aria-current');
    });

    nextCurrentLink.classList.add('site-header__nav-link--current');
    nextCurrentLink.setAttribute('aria-current', 'page');
  };

  const getSectionLinkByHash = (hash) => {
    const sectionId = hash.replace('#', '');

    return sectionTargets.find((item) => item.section.id === sectionId)?.link || null;
  };

  const setActiveFromScrollPosition = () => {
    const markerOffset = window.innerHeight * 0.3;
    const markerPosition = window.scrollY + markerOffset;
    const firstSectionTop = sectionTargets[0].section.offsetTop;

    if (markerPosition < firstSectionTop) {
      setCurrentLink(homeLink);
      return;
    }

    let activeLink = sectionTargets[sectionTargets.length - 1].link;

    sectionTargets.forEach((item) => {
      if (markerPosition >= item.section.offsetTop) {
        activeLink = item.link;
      }
    });

    setCurrentLink(activeLink);
  };

  const initializeCurrentLink = () => {
    const hashLink = getSectionLinkByHash(window.location.hash);

    if (hashLink) {
      setCurrentLink(hashLink);
      return;
    }

    setActiveFromScrollPosition();
  };

  initializeCurrentLink();

  window.addEventListener('scroll', setActiveFromScrollPosition, { passive: true });
  window.addEventListener('resize', setActiveFromScrollPosition);

  nav.addEventListener('click', (event) => {
    const clickedLink = event.target.closest('.site-header__nav-link');

    if (!clickedLink) {
      return;
    }

    const hashLink = getSectionLinkByHash(new URL(clickedLink.href, window.location.origin).hash);

    if (hashLink) {
      setCurrentLink(hashLink);
      return;
    }

    setCurrentLink(homeLink);
  });
})();

