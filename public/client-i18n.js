(function () {
  const dataEl = document.getElementById('pushlab-i18n-data');
  if (!dataEl || !dataEl.textContent) return;

  let bundle;
  try {
    bundle = JSON.parse(dataEl.textContent);
  } catch {
    return;
  }

  const localeLabel = {
    en: 'English',
    es: 'Espanol',
    'pt-br': 'Portugues (BR)',
    de: 'Deutsch',
    fr: 'Francais',
  };

  function get(obj, path) {
    const parts = String(path).split('.');
    let cur = obj;
    for (const p of parts) {
      if (cur == null) return undefined;
      cur = cur[p];
    }
    return cur;
  }

  function applyLocale(locale) {
    const copy = bundle[locale];
    if (!copy) return;

    document.documentElement.lang = locale;

    if (copy.meta) {
      if (copy.meta.title) document.title = copy.meta.title;
      const md = document.querySelector('meta[name="description"]');
      if (md && copy.meta.description) md.setAttribute('content', copy.meta.description);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.meta.title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.meta.description);
    }

    const origin = window.location.origin;
    const base = `${origin}/${locale}/`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', base);

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const path = node.getAttribute('data-i18n');
      if (!path) return;
      const v = get(copy, path);
      if (v == null) return;
      if (node.tagName === 'IMG') node.setAttribute('alt', String(v));
      else node.textContent = String(v);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
      const path = node.getAttribute('data-i18n-html');
      if (!path) return;
      const v = get(copy, path);
      if (v != null) node.innerHTML = String(v);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
      const path = node.getAttribute('data-i18n-aria-label');
      if (!path) return;
      const v = get(copy, path);
      if (v != null) node.setAttribute('aria-label', String(v));
    });

    document.querySelectorAll('.language-summary').forEach((el) => {
      el.textContent = localeLabel[locale] ?? locale;
    });

    document.querySelectorAll('[data-switch-locale]').forEach((el) => {
      const l = el.getAttribute('data-switch-locale');
      el.classList.toggle('is-active', l === locale);
    });

    document.querySelectorAll('[data-locale-section]').forEach((el) => {
      const sec = el.getAttribute('data-locale-section');
      if (sec) el.setAttribute('href', `/${locale}/#${sec}`);
    });

    const logo = document.querySelector('a.logo[data-locale-home]');
    if (logo) logo.setAttribute('href', `/${locale}/`);

    const toggle = document.getElementById('nav-toggle');
    if (toggle && copy.nav) {
      toggle.setAttribute('data-open-label', copy.nav.openMenu);
      toggle.setAttribute('data-close-label', copy.nav.closeMenu);
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-label', open ? copy.nav.closeMenu : copy.nav.openMenu);
    }

    document.querySelectorAll('details.language-dropdown').forEach((d) => {
      d.open = false;
    });

    if (window.history && window.history.pushState) {
      window.history.pushState({ pushlabLocale: locale }, '', `/${locale}/`);
    }
  }

  document.addEventListener(
    'click',
    (e) => {
      const trigger = e.target.closest('[data-switch-locale]');
      if (!trigger) return;
      e.preventDefault();
      const locale = trigger.getAttribute('data-switch-locale');
      if (!locale || !bundle[locale]) return;
      applyLocale(locale);
    },
    true
  );

  window.addEventListener('popstate', () => {
    const m = window.location.pathname.match(/^\/(en|es|pt-br|de|fr)\/?$/);
    if (m) applyLocale(m[1]);
  });
})();
