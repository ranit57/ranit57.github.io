# Ranit — Portfolio

This is a lightweight, responsive static portfolio site. It embeds the included resume PDF and includes sections for projects, skills, and contact.

Quick start (local):

```powershell
# from the project folder
# 1. Open `index.html` in a browser (double-click) or run a simple static server
python -m http.server 5000
# open http://localhost:5000
```

Deploying:
- Vercel: from the project folder run `vercel` (install Vercel CLI) or connect the Git repo in Vercel dashboard; the root is a static site.
- Netlify: drag-and-drop the folder in Netlify or connect the repo. No build command is required — publish directory is the repository root.

Notes:
- Resume PDF `Ranit_ML_Eng_2025.pdf` is already present and referenced from `index.html`.
- Update contact email in `index.html` before sharing.
