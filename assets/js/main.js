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
    tag: "Intro",
    source: "tryhackme",
    topic: "blue-team",
    date: "Apr 14, 2026"
  },
  {
    slug: "offensive-security",
    title: "Offensive Security Intro",
    desc: "Ethical hacking, GoBuster, career paths — the fundamentals of offensive security.",
    tag: "Intro",
    source: "tryhackme",
    topic: "red-team",
    date: "Apr 15, 2026"
  },
  {
    slug: "careers-in-cyber",
    title: "Careers in Cyber",
    desc: "The 7 cybersecurity roles: Security Analyst, Engineer, Incident Responder, Forensics, Malware Analyst, Pentester, Red Teamer.",
    tag: "Intro",
    source: "tryhackme",
    topic: "careers",
    date: "Apr 15, 2026"
  },
  {
    slug: "what-is-networking",
    title: "What is Networking?",
    desc: "Networks, Internet, IP & MAC addresses, IPv4 vs IPv6, spoofing, and Ping (ICMP).",
    tag: "Network Fundamentals",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 15, 2026"
  },
  {
    slug: "inside-a-computer-system",
    title: "Inside a Computer System",
    desc: "Computer components (CPU, RAM, GPU, Motherboard...) and the 5-step boot process (UEFI, POST, bootloader).",
    tag: "Computer Fundamentals",
    source: "tryhackme",
    topic: "hardware",
    date: "Apr 16, 2026"
  },
  {
    slug: "cloud-computing-fundamentals",
    title: "Cloud Computing Fundamentals",
    desc: "Cloud types (Public/Private/Hybrid), service models (IaaS/PaaS/SaaS), AWS basics, and EC2 instances.",
    tag: "Computer Fundamentals",
    source: "tryhackme",
    topic: "cloud",
    date: "Apr 16, 2026"
  },
  {
    slug: "intro-to-lan",
    title: "Intro to LAN",
    desc: "LAN topologies (Star/Bus/Ring), switches vs routers, subnetting, ARP and DHCP (DORA).",
    tag: "Network Fundamentals",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 16, 2026"
  },
  {
    slug: "computer-types",
    title: "Computer Types",
    desc: "Laptops, desktops, workstations, servers, smartphones, tablets, IoT devices, and embedded computers.",
    tag: "Computer Fundamentals",
    source: "tryhackme",
    topic: "hardware",
    date: "Apr 16, 2026"
  },
  {
    slug: "client-server-basics",
    title: "Client-Server Basics",
    desc: "The client-server model, HTTP methods, DNS, ports, protocols, and the pizza delivery analogy.",
    tag: "Computer Fundamentals",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 16, 2026"
  },
  {
    slug: "virtualisation-basics",
    title: "Virtualisation Basics",
    desc: "Hypervisors (Type 1 vs 2), virtual machines, containers, Docker, and the building analogy.",
    tag: "Computer Fundamentals",
    source: "tryhackme",
    topic: "cloud",
    date: "Apr 16, 2026"
  },
  {
    slug: "osi-model",
    title: "OSI Model",
    desc: "The 7 layers of the OSI model, encapsulation, TCP vs UDP, routing protocols (OSPF, RIP).",
    tag: "Network Fundamentals",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 16, 2026"
  },
  {
    slug: "os-introduction",
    title: "Operating Systems: Introduction",
    desc: "What an OS is, kernel vs user space, the 5 core duties, GUI vs CLI, and the OS landscape (Desktop, Server, Mobile, Embedded, Cloud).",
    tag: "Operating Systems Basics",
    source: "tryhackme",
    topic: "os",
    date: "Apr 16, 2026"
  },
  {
    slug: "packets-and-frames",
    title: "Packets & Frames",
    desc: "Packets vs frames, TCP three-way handshake (SYN/ACK), UDP, and the 6 essential ports (21, 22, 80, 443, 445, 3389).",
    tag: "Network Fundamentals",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 16, 2026"
  },
  {
    slug: "extending-your-network",
    title: "Extending Your Network",
    desc: "Port forwarding, firewalls (stateful vs stateless), VPN (PPP/PPTP/IPSec), routers, L2 vs L3 switches, VLANs.",
    tag: "Network Fundamentals",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 17, 2026"
  },
  {
    slug: "dns-in-detail",
    title: "DNS in Detail",
    desc: "Domain hierarchy (TLD, SLD, subdomains), DNS record types (A, AAAA, CNAME, MX, TXT), and the 5-step DNS request flow.",
    tag: "How The Web Works",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 17, 2026"
  },
  {
    slug: "http-in-detail",
    title: "HTTP in Detail",
    desc: "HTTP vs HTTPS, URL anatomy, HTTP methods (GET/POST/PUT/DELETE), status codes, headers, and cookies.",
    tag: "How The Web Works",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 17, 2026"
  },
  {
    slug: "how-websites-work",
    title: "How Websites Work",
    desc: "Front-end vs back-end, HTML/CSS/JS basics, Sensitive Data Exposure, HTML Injection, and input sanitisation.",
    tag: "How The Web Works",
    source: "tryhackme",
    topic: "web-security",
    date: "Apr 18, 2026"
  },
  {
    slug: "putting-it-all-together",
    title: "Putting It All Together",
    desc: "The full web request flow, load balancers, CDN, databases, WAF, virtual hosts, static vs dynamic content, backend languages.",
    tag: "How The Web Works",
    source: "tryhackme",
    topic: "networking",
    date: "Apr 18, 2026"
  },
  {
    slug: "windows-basics",
    title: "Windows Basics",
    desc: "Windows interface, account types, File Explorer, Task Manager, Windows Update, Windows Security, Defender Firewall.",
    tag: "Operating Systems Basics",
    source: "tryhackme",
    topic: "os",
    date: "Apr 18, 2026"
  },
  {
    slug: "linux-cli-basics",
    title: "Linux CLI Basics",
    desc: "Essential Linux commands: pwd, ls, cd, find, cat, whoami, uname, df. Navigation, file search, and system investigation.",
    tag: "Operating Systems Basics",
    source: "tryhackme",
    topic: "linux",
    date: "Apr 18, 2026"
  },
  {
    slug: "windows-cli-basics",
    title: "Windows CLI Basics",
    desc: "Windows Command Prompt: cd, dir, dir /a, dir /s, type, whoami, hostname, systeminfo, ipconfig + Linux vs Windows comparison.",
    tag: "Operating Systems Basics",
    source: "tryhackme",
    topic: "os",
    date: "Apr 19, 2026"
  },
  {
    slug: "operating-system-security",
    title: "Operating System Security",
    desc: "CIA triad, authentication & weak passwords, file permissions, Trojan horses, ransomware, SSH, privilege escalation.",
    tag: "Operating Systems Basics",
    source: "tryhackme",
    topic: "blue-team",
    date: "Apr 19, 2026"
  },
  {
    slug: "data-representation",
    title: "Data Representation",
    desc: "Binary, hexadecimal, octal number systems, RGB color model, 24-bit color, and base conversions.",
    tag: "Software Basics",
    source: "tryhackme",
    topic: "fundamentals",
    date: "Apr 19, 2026"
  },
  {
    slug: "data-encoding",
    title: "Data Encoding",
    desc: "Character encoding from ASCII to Unicode — UTF-8, UTF-16, UTF-32, code points, and why mojibake happens.",
    tag: "Software Basics",
    source: "tryhackme",
    topic: "fundamentals",
    date: "Apr 20, 2026"
  },
  {
    slug: "python-simple-demo",
    title: "Python: Simple Demo",
    desc: "Variables, conditional statements (if/elif/else), and while loops — building a Guess the Number game in Python.",
    tag: "Software Basics",
    source: "tryhackme",
    topic: "fundamentals",
    date: "Apr 20, 2026"
  },
  {
  slug: "javascript-simple-demo",
  title: "JavaScript: Simple Demo",
  desc: "Variables (let/const), console.log, parseInt, conditionals, while loops — the Guess the Number game in JS vs Python.",
  tag: "Software Basics",
  source: "tryhackme",
  topic: "fundamentals",
  date: "Apr 20, 2026"
},
{
  slug: "database-sql-basics",
  title: "Database SQL Basics",
  desc: "Tables, rows, columns, and SQL queries — SELECT, FROM, WHERE, ORDER BY — with a café example.",
  tag: "Software Basics",
  source: "tryhackme",
  topic: "fundamentals",
  date: "Apr 20, 2026"
},
{
  slug: "cryptography-concepts",
  title: "Cryptography Concepts",
  desc: "Plaintext, ciphertext, symmetric vs asymmetric encryption, Caesar cipher, certificates, and how HTTPS works.",
  tag: "Attacks and Defenses",
  source: "tryhackme",
  topic: "crypto",
  date: "Apr 20, 2026"
},
{
  slug: "become-a-hacker",
  title: "Become a Hacker",
  desc: "Offensive security mindset, core terminology, GoBuster directory enumeration, and Hydra dictionary attacks.",
  tag: "Attacks and Defenses",
  source: "tryhackme",
  topic: "red-team",
  date: "Apr 21, 2026"
},
{
  slug: "become-a-defender",
  title: "Become a Defender",
  desc: "Defensive security mindset, client infrastructure mapping, defence in depth, and the city analogy.",
  tag: "Attacks and Defenses",
  source: "tryhackme",
  topic: "blue-team",
  date: "Apr 21, 2026"
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
