# How to Deploy Your Quantum Entanglement Website to Vercel

## Overview
You now have a complete, multi-page React application using React Router. Unlike single-page sites, this requires a specific configuration for Vercel to handle client-side routing correctly.

---

## Part 1: Prepare Your Project Locally

### Step 1: Create the React App Structure
You have all the files needed. Organize them like this:
```
quantum-bio-site/
├── package.json
├── public/
│   ├── index.html
│   └── favicon.ico (optional)
├── src/
│   ├── index.js
│   ├── index.css
│   ├── App.jsx
│   ├── App.css
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── pages/
│       ├── Home.jsx
│       ├── Home.css
│       ├── Demo.jsx
│       ├── Demo.css
│       ├── Theory.jsx
│       ├── Theory.css
│       ├── Applications.jsx
│       ├── Applications.css
│       ├── About.jsx
│       └── About.css
```

### Step 2: Create public/index.html
Create this file in your `public/` folder:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0a0e27" />
    <meta
      name="description"
      content="Quantum Entanglement Biology: Gene Editing Through Quantum Mechanics"
    />
    <title>Quantum Entanglement Biology</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### Step 3: Create vercel.json (IMPORTANT)
This file tells Vercel how to handle client-side routing. Create `vercel.json` in your project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**This is CRITICAL** - it ensures all routes are served by your React app, not static files.

### Step 4: Test Locally
Run these commands:
```bash
npm install
npm start
```

Visit `http://localhost:3000` and test all pages. Make sure navigation works smoothly between:
- `/` (Home)
- `/demo` (Demo)
- `/theory` (Theory)
- `/applications` (Applications)
- `/about` (About)

---

## Part 2: Deploy to Vercel

### Step 1: Sign Up for Vercel
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub" (easiest option)
4. Authorize Vercel to access your GitHub account

### Step 2: Connect Your GitHub Repository
1. From Vercel dashboard, click "New Project"
2. Select your GitHub repository (you may need to push your code to GitHub first)
3. Click "Import"

### Step 3: Configure Build Settings
In the "Configure Project" screen:
- **Framework Preset**: Select "Create React App"
- **Build Command**: `npm run build` (should be auto-filled)
- **Output Directory**: `build` (should be auto-filled)
- **Environment Variables**: Leave empty for now (unless you need any)
- Click "Deploy"

### Step 4: Vercel Deploys Automatically
Vercel will:
1. Clone your repository
2. Run `npm install`
3. Run `npm run build`
4. Deploy the `build` folder to Vercel's CDN
5. Give you a live URL (e.g., `https://quantum-entanglement-bio.vercel.app`)

---

## Part 3: Why Multi-Page React Works Differently Than Single-Page HTML

### Single-Page HTML (What You May Have Done Before)
```
your-site/
├── index.html
├── demo.html
├── theory.html
└── style.css
```
- Vercel serves files directly from disk
- `/demo` looks for `demo.html` file
- No client-side routing needed

### Multi-Page React (Your New App)
```
your-site/
├── src/
│   ├── App.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Demo.jsx
│       ├── Theory.jsx
│       ...
└── package.json
```
- **All routes** go to `/index.html` (the compiled React app)
- React Router intercepts the URL and decides which page to show
- The `vercel.json` file tells Vercel: "Send everything to index.html"

**Without vercel.json**: Visiting `/demo` would return a 404 error because Vercel would look for a `demo.html` file that doesn't exist.

**With vercel.json**: Visiting `/demo` sends you to `index.html`, React loads, React Router sees the URL is `/demo`, and loads the Demo page component.

---

## Part 4: File-by-File Deployment Checklist

### Must Have:
- ✅ `package.json` - Defines dependencies
- ✅ `vercel.json` - Handles client-side routing (CRITICAL)
- ✅ `public/index.html` - HTML entry point
- ✅ `src/index.js` - React entry point
- ✅ `src/App.jsx` - Main app with React Router
- ✅ All page components (Home.jsx, Demo.jsx, etc.)
- ✅ All CSS files

### Optional But Recommended:
- `.gitignore` - Tells Git which files to ignore
- `public/favicon.ico` - Website icon
- `.env` - Environment variables (if needed)

### Files You DON'T Need:
- `node_modules/` - Generated locally, Vercel installs fresh
- `build/` - Generated during deploy, Vercel creates it

---

## Part 5: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `quantum-bio.com`)
4. Follow DNS configuration instructions from your domain registrar
5. Vercel will provide DNS records to add

---

## Part 6: Making Updates

After initial deployment, every time you push to GitHub:
1. Vercel automatically detects the push
2. Rebuilds your project
3. Deploys the new version
4. Your site updates within 1-2 minutes

No manual deployment needed!

```bash
# To push changes:
git add .
git commit -m "Update description"
git push origin main
```

---

## Part 7: Debugging Multi-Page Routing Issues

### If `/demo` returns 404:
1. Check that `vercel.json` exists in project root
2. Verify the content of `vercel.json` matches above
3. Redeploy: Wait for build to complete, then hard refresh browser (Ctrl+Shift+R)

### If pages show blank or styling is broken:
1. Check browser console (F12) for JavaScript errors
2. Ensure all CSS files are imported in components
3. Verify React Router is properly configured in App.jsx

### If navigation links don't work:
1. Ensure you're using `<Link>` from `react-router-dom`, not regular `<a>` tags
2. Check that routes in App.jsx match your page filenames

---

## Part 8: Key Differences Summary

| Aspect | Single-Page HTML | Multi-Page React |
|--------|------------------|------------------|
| **File Structure** | Multiple .html files | Single app.jsx with routing |
| **Routing** | Server-side (file lookup) | Client-side (React Router) |
| **Build Step** | None needed | `npm run build` required |
| **vercel.json** | Not needed | REQUIRED |
| **Performance** | Slightly faster (static files) | Slightly slower (JS loads) |
| **Interactivity** | Limited | Full React capabilities |
| **Code Reuse** | Repetitive | DRY (shared components) |

---

## Part 9: Environment Variables (If Needed)

If you need environment variables (API keys, etc.):

1. Create `.env.local` locally:
```
REACT_APP_API_KEY=your_key_here
```

2. In Vercel dashboard:
   - Settings → Environment Variables
   - Add variable name and value
   - Select which environments (Production/Preview/Development)

3. Access in your code:
```javascript
const apiKey = process.env.REACT_APP_API_KEY;
```

---

## Part 10: Common Issues & Fixes

### "Cannot find module" errors
```bash
npm install
npm start
```

### CSS not loading on deployed site
- Ensure CSS imports are correct: `import './Demo.css'`
- Check that CSS file names match exactly (case-sensitive)

### Navigation broken on deployed site
- Verify `vercel.json` is in project root
- Redeploy project (push to GitHub)

### Page shows old content
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear browser cache
- Wait 30 seconds for CDN to update

---

## Your Deployment Checklist

- [ ] Project folder structure created locally
- [ ] `vercel.json` created in root with correct content
- [ ] `public/index.html` created
- [ ] All components and CSS files in place
- [ ] `npm install` runs without errors
- [ ] `npm start` shows working site locally
- [ ] All 5 pages work locally (/, /demo, /theory, /applications, /about)
- [ ] Code pushed to GitHub
- [ ] GitHub repository connected to Vercel
- [ ] Build completes successfully on Vercel
- [ ] Live URL works and all pages function
- [ ] Custom domain added (optional)

---

## Example URLs After Deployment

If your Vercel project is `quantum-entanglement-bio.vercel.app`:

- Home: `https://quantum-entanglement-bio.vercel.app/`
- Demo: `https://quantum-entanglement-bio.vercel.app/demo`
- Theory: `https://quantum-entanglement-bio.vercel.app/theory`
- Applications: `https://quantum-entanglement-bio.vercel.app/applications`
- About: `https://quantum-entanglement-bio.vercel.app/about`

---

## Support & Next Steps

1. **If deployment fails**: Check Vercel build logs (Dashboard → Project → Deployments)
2. **If pages don't load**: Verify `vercel.json` and browser console errors
3. **If you want analytics**: Vercel includes free analytics
4. **If you want to scale**: Vercel automatically handles traffic

Your site is now live and will update automatically every time you push to GitHub!

Good luck with your quantum entanglement website! 🚀⟨ψ⟩
