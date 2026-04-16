// ============================================
// TALDRYNSEC — Central Engine
// ============================================
// HOW TO ADD A NEW NOTE:
//   1. Create the HTML file in notes/
//   2. Add an entry to NOTES below
//   3. git add, commit, push — done!
//
// HOW TO ADD A NEW BLOG POST:
//   1. Create the HTML file in blog/
//   2. Add an entry to BLOG_POSTS below
//   3. git add, commit, push — done!
// ============================================

const NOTES = [
  {
    slug: "defensive-security",
    title: "Defensive Security Intro",
    desc: "SOC, Threat Intelligence, DFIR, Malware Analysis — the fundamentals of defensive security.",
    tag: "TryHackMe — Intro",
    source: "tryhackme",
    topic: "blue-team",
    date: "Apr 14, 2026"
  },
  {
    slug: "offensive-security",
    title: "Offensive Security Intro",
    desc: "Ethical hacking, GoBuster, career paths — the fundamentals of offensive security.",
    tag: "TryHackMe — Intro",
    source: "tryhackme",
    topic: "red-team",
    date: "Apr 15, 2026"
  },
  {
    slug: "careers-in-cyber",
    title: "Careers in Cyber",
    desc: "The 7 cybersecurity roles: Security Analyst, Engineer, Incident Responder, Forensics, Malware Analyst, Pentester, Red Teamer.",
    tag: "TryHackMe — Intro",
    source: "tryhackme",
    topic: "careers",
    date: "Apr 15, 2026"
  },
  {
    slug: "what-is-networking",
    title: "What is Networking?",
    desc: "Networks, Internet, IP & MAC addresses, IPv4 vs IPv6, spoofing, and Ping (ICMP).",
    tag: "TryHackMe — Network Fundamentals",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 15, 2026"
  },
  {
    slug: "inside-a-computer-system",
    title: "Inside a Computer System",
    desc: "Computer components (CPU, RAM, GPU, Motherboard...) and the 5-step boot process (UEFI, POST, bootloader).",
    tag: "TryHackMe — Computer Fundamentals",
    source: "tryhackme",
    topic: "hardware",
    date: "Apr 16, 2026"
  },
  {
    slug: "cloud-computing-fundamentals",
    title: "Cloud Computing Fundamentals",
    desc: "Cloud types (Public/Private/Hybrid), service models (IaaS/PaaS/SaaS), AWS basics, and EC2 instances.",
    tag: "TryHackMe — Computer Fundamentals",
    source: "tryhackme",
    topic: "cloud",
    date: "Apr 16, 2026"
  },
  {
    slug: "intro-to-lan",
    title: "Intro to LAN",
    desc: "LAN topologies (Star/Bus/Ring), switches vs routers, subnetting, ARP and DHCP (DORA).",
    tag: "TryHackMe — Network Fundamentals",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 16, 2026"
  },
  // {
  //   slug: "filename-without-html",
  //   title: "Title",
  //   desc: "Short description.",
  //   tag: "Source — Module",
  //   source: "ynov|tryhackme|other",
  //   topic: "blue-team|red-team|networking|linux|web-security|crypto",
  //   date: "Mon DD, YYYY"
  // },
];

const BLOG_POSTS = [
  {
    slug: "why-taldrynsec",
    title: "Why I Created TaldrynSec",
    desc: "The story behind this site, my journey and what you'll find here.",
    tag: "Personal",
    date: "Apr 14, 2026"
  }
  // {
  //   slug: "filename-without-html",
  //   title: "Title",
  //   desc: "Short description.",
  //   tag: "Category",
  //   date: "Mon DD, YYYY"
  // },
];

// ============================================
// PATH HELPERS
// ============================================
function isSubPage() {
  const p = window.location.pathname;
  return p.includes('/notes/') || p.includes('/blog/');
}
function P() { return isSubPage() ? '../' : ''; }

// ============================================
// NAV (injected everywhere)
// ============================================
function buildNav() {
  const el = document.querySelector('.nav');
  if (!el) return;
  const p = P();
  el.innerHTML = `<div class="nav-inner">
    <a href="${p}index.html" class="nav-logo">Taldryn<span>Sec</span></a>
    <button class="nav-toggle" aria-label="Menu">\u2630</button>
    <ul class="nav-links">
      <li><a href="${p}index.html">Home</a></li>
      <li><a href="${p}notes.html">Notes</a></li>
      <li><a href="${p}resume.html">Resume</a></li>
      <li><a href="${p}blog.html">Blog</a></li>
    </ul>
  </div>`;

  // mobile toggle
  const btn = el.querySelector('.nav-toggle');
  const links = el.querySelector('.nav-links');
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    btn.textContent = links.classList.contains('open') ? '\u2715' : '\u2630';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); btn.textContent = '\u2630';
  }));

  // active link
  const path = window.location.pathname;
  links.querySelectorAll('a').forEach(a => {
    const page = a.getAttribute('href').split('/').pop();
    if (path.endsWith(page) || (page === 'index.html' && (path.endsWith('/') || path.endsWith('index.html')))) {
      a.classList.add('active');
    }
  });
}

// ============================================
// FOOTER (injected everywhere)
// ============================================
function buildFooter() {
  const el = document.querySelector('.site-footer');
  if (!el) return;
  el.innerHTML = `<p>TaldrynSec &copy; ${new Date().getFullYear()} — Built with &#9749; and curiosity</p>`;
}

// ============================================
// CARD GENERATORS
// ============================================
function sourceLabel(s) {
  const map = { tryhackme: 'TryHackMe', ynov: 'Ynov', other: 'Other' };
  return map[s] || s;
}
function topicLabel(t) {
  return t.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function noteCardHTML(n) {
  const p = P();
  return `<a href="${p}notes/${n.slug}.html" class="card" style="text-decoration:none" data-source="${n.source}" data-topic="${n.topic}">
    <div class="card-tag">${n.tag}</div>
    <h3>${n.title}</h3>
    <p>${n.desc}</p>
    <div class="card-tags">
      <span class="tag tag-source">${sourceLabel(n.source)}</span>
      <span class="tag tag-topic">${topicLabel(n.topic)}</span>
    </div>
    <div class="card-meta">
      <span class="date">${n.date}</span>
      <span class="arrow">&rarr;</span>
    </div>
  </a>`;
}

function blogCardHTML(b) {
  const p = P();
  return `<a href="${p}blog/${b.slug}.html" class="card" style="text-decoration:none">
    <div class="card-tag">${b.tag}</div>
    <h3>${b.title}</h3>
    <p>${b.desc}</p>
    <div class="card-meta">
      <span class="date">${b.date}</span>
      <span class="arrow">&rarr;</span>
    </div>
  </a>`;
}

// ============================================
// POPULATE GRIDS
// ============================================
function populateAll() {
  const reversed = [...NOTES].reverse();
  const blogReversed = [...BLOG_POSTS].reverse();

  // notes.html — full list
  const ng = document.getElementById('notes-grid');
  if (ng) ng.innerHTML = reversed.map(noteCardHTML).join('');

  // blog.html — full list
  const bg = document.getElementById('blog-grid');
  if (bg) bg.innerHTML = blogReversed.map(blogCardHTML).join('');

  // index.html — latest 3 notes
  const hng = document.getElementById('home-notes-grid');
  if (hng) hng.innerHTML = reversed.slice(0, 3).map(noteCardHTML).join('');

  // index.html — latest 2 posts
  const hbg = document.getElementById('home-blog-grid');
  if (hbg) hbg.innerHTML = blogReversed.slice(0, 2).map(blogCardHTML).join('');

  // index.html — counters
  const sn = document.getElementById('stat-notes');
  const sp = document.getElementById('stat-posts');
  if (sn) sn.textContent = NOTES.length;
  if (sp) sp.textContent = BLOG_POSTS.length;
}

// ============================================
// FILTERS (notes.html)
// ============================================
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;

  let src = 'all', top = 'all';

  btns.forEach(btn => btn.addEventListener('click', () => {
    const type = btn.dataset.filterType;
    const val = btn.dataset.filter;

    // update active state
    document.querySelectorAll(`.filter-btn[data-filter-type="${type}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (type === 'source') src = val;
    if (type === 'topic') top = val;

    // filter cards
    document.querySelectorAll('#notes-grid .card').forEach(card => {
      const mSrc = src === 'all' || card.dataset.source === src;
      const mTop = top === 'all' || card.dataset.topic === top;
      card.style.display = (mSrc && mTop) ? '' : 'none';
    });
  }));
}

// ============================================
// QUIZ REVEAL
// ============================================
function initQuiz() {
  document.querySelectorAll('.quiz-item .a').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('hidden'));
  });
}

// ============================================
// SCROLL FADE FOR FICHE SECTIONS
// ============================================
function initScrollFade() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fiche-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    obs.observe(el);
  });
}

// ============================================
// BOOT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  populateAll();
  initFilters();
  initQuiz();
  initScrollFade();
});
