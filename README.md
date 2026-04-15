# TaldrynSec

Personal cybersecurity notes, resume, and blog.

## Structure

```
taldrynsec/
├── index.html          ← Homepage
├── notes.html          ← Notes listing (filterable by source + topic)
├── resume.html         ← CV + Certifications
├── blog.html           ← Blog listing
├── .nojekyll           ← Required for GitHub Pages
├── assets/
│   ├── css/style.css   ← Global styles
│   └── js/main.js      ← Global scripts + filter system
├── notes/
│   └── defensive-security.html
├── blog/
│   └── why-taldrynsec.html
└── README.md
```

## Adding content

**New note:**
1. Copy `notes/defensive-security.html` as template
2. Add a card in `notes.html` with `data-source` and `data-topic` attributes
3. Sources: `ynov`, `tryhackme`, `other`
4. Topics: `blue-team`, `networking`, `linux`, `web-security`, `red-team`, `crypto`
5. `git add . && git commit -m "New note: ..." && git push`

**New blog post:**
1. Copy `blog/why-taldrynsec.html` as template
2. Add a card in `blog.html`
3. Push

## Deploy

Site is live at: https://guillaumedon.github.io/taldrynsec/
