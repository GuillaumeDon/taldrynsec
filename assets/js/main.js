// ============================================
// TALDRYNSEC — Main Scripts
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { links.classList.remove('open'); toggle.textContent = '☰'; });
    });
  }

  // --- Active nav link ---
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace('../', '');
    if (path.endsWith(href) || (href === 'index.html' && (path.endsWith('/') || path.endsWith('index.html')))) {
      a.classList.add('active');
    }
  });

  // --- Quiz reveal on click ---
  document.querySelectorAll('.quiz-item .a').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('hidden'));
  });

  // --- Scroll fade-in for fiche sections ---
  const ficheObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fiche-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    ficheObserver.observe(el);
  });

  // --- Notes filter system ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card[data-source][data-topic]');

  if (filterBtns.length > 0 && cards.length > 0) {
    let activeSource = 'all';
    let activeTopic = 'all';

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterType = btn.dataset.filterType;
        const filterValue = btn.dataset.filter;

        // Toggle active state within same group
        document.querySelectorAll(`.filter-btn[data-filter-type="${filterType}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (filterType === 'source') activeSource = filterValue;
        if (filterType === 'topic') activeTopic = filterValue;

        // Filter cards
        cards.forEach(card => {
          const matchSource = activeSource === 'all' || card.dataset.source === activeSource;
          const matchTopic = activeTopic === 'all' || card.dataset.topic === activeTopic;
          card.style.display = (matchSource && matchTopic) ? '' : 'none';
        });
      });
    });
  }

});
