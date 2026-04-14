# Adhokshaja Nagarhalli — Portfolio

Premium Next.js portfolio with Three.js, Framer Motion, GSAP, and Tailwind CSS.

## Tech Stack
- **Frontend:** React 18, Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion + GSAP
- **3D:** Three.js (particle field + wireframe icosahedra)
- **Backend:** Next.js API Routes (Node.js / Express-style)
- **Database:** MongoDB (optional, plug-in ready)

## Features
- Cinematic loading screen with animated name reveal
- Three.js 3D particle background with mouse parallax
- Custom magnetic cursor with ring trail
- Scroll progress bar
- 3D tilt card in hero section
- Typewriter role animation
- Framer Motion scroll-reveal animations throughout
- Interactive project cards with modal
- Animated contact form with backend API
- Sticky blur navbar with active section tracking
- Mobile-responsive with hamburger menu

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## Customize Your Content
All portfolio data is in one file:
```
src/data/portfolio.js
```
Edit your name, experience, projects, publications, skills there.

## Contact Form Backend

### Option A — MongoDB (Recommended)
1. Create free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Copy connection string
3. Create `.env.local` from `.env.local.example`
4. Add `MONGODB_URI=your-connection-string`
5. Uncomment MongoDB block in `src/app/api/contact/route.js`

### Option B — Gmail Email Notifications
1. Enable 2FA on your Google account
2. Generate App Password: Google Account → Security → App Passwords
3. Add to `.env.local`:
   ```
   GMAIL_USER=your@gmail.com
   GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
   ```
4. Uncomment Nodemailer block in `src/app/api/contact/route.js`

## Deploy to Firebase Hosting

Firebase Hosting doesn't support Next.js server features (API routes).
**Use Vercel instead** — it's purpose-built for Next.js and free:

```bash
npm install -g vercel
vercel
```

Done. Your site goes live at `your-project.vercel.app`

## Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Add environment variables from `.env.local`
4. Deploy — automatic HTTPS + custom domain support
