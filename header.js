// header.js — общая шапка сайта «Альба-Маре»
// Править шапку нужно только здесь; на страницах достаточно <header id="site-header"></header>

(function () {
  const header = document.getElementById('site-header');
  if (!header) return;

  const shipSvg = `
    <div class="deco-ship" aria-hidden="true">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 68 Q50 82 85 68 L78 78 Q50 88 22 78 Z" fill="#8a5a2b"/>
        <path d="M15 68 Q50 82 85 68 L84 71 Q50 84 16 71 Z" fill="#c29a5b"/>
        <rect x="48" y="20" width="3" height="50" fill="#6b4423" rx="1.5"/>
        <path d="M51 24 Q78 40 72 62 L51 62 Z" fill="#f5f0e6"/>
        <path d="M51 24 Q70 40 66 58 L51 58 Z" fill="#e8dfc8"/>
        <path d="M49 18 L36 23 L49 28 Z" fill="#d4af37"/>
        <path d="M8 76 Q18 72 28 76 T48 76 T68 76 T88 76" fill="none" stroke="#2a7f8f" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
        <path d="M14 82 Q24 78 34 82 T54 82 T74 82" fill="none" stroke="#2a7f8f" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      </svg>
    </div>`;

  const sunSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4a017" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4" fill="#d4a017" stroke="none"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;

  const moonSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#2a7f8f"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;

  header.innerHTML = `
    <a href="index.html" class="logo">${shipSvg}Альба-Маре</a>
    <div class="nav-right">
      <nav id="main-nav">
        <a href="reader.html">Читалка</a>
        <a href="universe.html">Вселенная</a>
        <a href="index.html#reviews">Отзывы</a>
        <a href="index.html#author">Автор</a>
        <a href="index.html#support" class="support-link">Поддержать проект</a>
      </nav>
      <button class="theme-toggle" id="theme-btn" onclick="toggleTheme()"
              role="switch" aria-checked="false" aria-label="Переключить тему" title="Переключить тему">
        <span class="theme-track">
          <span class="theme-icon theme-sun">${sunSvg}</span>
          <span class="theme-icon theme-moon">${moonSvg}</span>
          <span class="theme-knob"></span>
        </span>
      </button>
    </div>`;

  document.documentElement.lang = 'ru';

  window.toggleTheme = function () {
    const isDark = document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('theme-btn');
    if (btn) btn.setAttribute('aria-checked', isDark ? 'true' : 'false');
    localStorage.setItem('alba-mare-theme', isDark ? 'dark' : 'light');
  };

  if (localStorage.getItem('alba-mare-theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('theme-btn');
    if (btn) btn.setAttribute('aria-checked', 'true');
  }
})();
