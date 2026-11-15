# Sai Charan — Personal Portfolio

Production-grade creative developer portfolio featuring Three.js 3D character experiences, interactive physics simulation (Rapier), GSAP ScrollTrigger animations, smooth scrolling via Lenis, and personalized project showcases.

## 🚀 Live Demo & Portfolio
- **Developer**: Sai Charan (Godavarthi Sai Charan)
- **Role**: AI/ML Engineer & Full-Stack Developer
- **Email**: [saicharangodavarthi7@gmail.com](mailto:saicharangodavarthi7@gmail.com)
- **LinkedIn**: [linkedin.com/in/godavarthi-sai-charan](https://linkedin.com/in/godavarthi-sai-charan)
- **GitHub**: [github.com/Saicharan-077](https://github.com/Saicharan-077)
- **LeetCode**: [leetcode.com/Saicharan-077](https://leetcode.com/Saicharan-077/)

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18, TypeScript, Vite
- **3D & WebGL**: Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier` (Physics Engine), `@react-three/postprocessing`, Draco 3D Loader
- **Animations & Motion**: GSAP (GreenSock), ScrollTrigger, Lenis Smooth Scrolling, Custom DOM Text Splitter
- **Components & UI**: React Fast Marquee, React Icons, CSS custom properties, custom magnetic cursor
- **Assets**: Embedded Draco 3D character model, HDR environment lighting, authentic project demonstrations, and verified resume

---

## 📂 Project Structure

```
Portfolio-Website/
├── public/
│   ├── draco/              # Draco 3D geometry decoders (Wasm & JS)
│   ├── images/             # Tech textures, profile photos & demo recordings
│   │   ├── fire-smoke-demo.webp
│   │   ├── profile.jpg
│   │   └── ...
│   ├── models/             # 3D character models and HDR environment map
│   └── resume.pdf          # Sai Charan's official resume
├── src/
│   ├── components/
│   │   ├── Character/      # Three.js 3D character scene, bone IK & lighting
│   │   ├── styles/         # Scoped component stylesheets
│   │   ├── utils/          # Smooth scrolling (Lenis), SplitText, GSAP timelines
│   │   ├── About.tsx       # Bio & engineering philosophy
│   │   ├── Career.tsx      # Timeline of internships & roles
│   │   ├── Contact.tsx     # Contact details & social links
│   │   ├── Cursor.tsx      # Custom animated spotlight cursor
│   │   ├── Landing.tsx     # Dynamic hero section with 3D character view
│   │   ├── Loading.tsx     # Interactive loading counter & marquee
│   │   ├── MainContainer.tsx
│   │   ├── Navbar.tsx      # Smooth-scrolling navigation header
│   │   ├── SocialIcons.tsx # Floating social dock & resume download
│   │   ├── TechStack.tsx   # Rapier-powered 3D physics spheres
│   │   ├── WhatIDo.tsx     # Interactive folded cards (AI & Full-Stack)
│   │   ├── Work.tsx        # Horizontal scroll projects showcase
│   │   └── WorkImage.tsx   # Project media with hover interactions
│   ├── context/            # React loading context
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

---

## ⚡ Getting Started Locally

### 1. Prerequisites
- Node.js (v18+ or v20+)
- npm

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) to preview the production build.

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Install the Vercel CLI: `npm i -g vercel` or link via GitHub to [vercel.com](https://vercel.com).
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

### Deploy to Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.

---

## 📄 License & Attribution
- Design inspired by Moncy Yohannan's open reference architecture under the Personal Portfolio License.
- Personalized with original content, verified achievements, and projects belonging to Sai Charan.
- Restricted trial-only plugins replaced with compliant open-source alternatives (Lenis & custom DOM Splitter).
