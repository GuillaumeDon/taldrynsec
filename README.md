# TaldrynSec

Personal cybersecurity revision sheets and blog.

## Project Structure

```
taldrynsec/
├── index.html                  ← Homepage
├── fiches.html                 ← Sheets listing
├── blog.html                   ← Blog listing
├── about.html                  ← About / CV
├── assets/
│   ├── css/
│   │   └── style.css           ← Global styles
│   └── js/
│       └── main.js             ← Global scripts
├── fiches/
│   └── defensive-security.html ← First revision sheet
├── blog/
│   └── why-taldrynsec.html     ← First blog post
└── README.md
```

## Deploy to GitHub Pages

### 1. Create the GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Repo name: `taldrynsec` (or `yourusername.github.io` for a main site)
3. Keep it **public**
4. Do NOT check "Add a README" (we already have one)
5. Click **Create repository**

### 2. Push from VS Code

Open a terminal in VS Code (`Ctrl+``) and run:

```bash
# Navigate to the project folder
cd path/to/taldrynsec

# Initialize git
git init

# Stage all files
git add .

# First commit
git commit -m "Initial commit - TaldrynSec"

# Connect to GitHub (replace YOURPSEUDO)
git remote add origin https://github.com/YOURPSEUDO/taldrynsec.git

# Push
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repo **Settings** on GitHub
2. Sidebar → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** / folder **/ (root)**
5. Click **Save**

Wait 1-2 minutes. Your site will be live at:
**`https://YOURPSEUDO.github.io/taldrynsec/`**

### 4. Adding content

**New revision sheet:**
1. Copy `fiches/defensive-security.html` as a template
2. Edit the content
3. Add a card in `fiches.html`
4. Add a card in `index.html` (latest sheets section)
5. `git add . && git commit -m "New sheet: ..." && git push`

**New blog post:**
1. Copy `blog/why-taldrynsec.html` as a template
2. Add a card in `blog.html`
3. Push

## Customize

- **about.html** → Replace placeholders (YOURPSEUDO, your@email.com, journey, skills)
- **assets/css/style.css** → Edit colors in `:root` to change the theme
- Update GitHub/THM/LinkedIn links in the About sidebar
