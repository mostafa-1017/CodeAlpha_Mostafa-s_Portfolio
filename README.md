# 🌐 Personal Portfolio Website
### CodeAlpha Frontend Development Internship · Task 3

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-mostafasworld.netlify.app-00e5ff?style=for-the-badge)](https://mostafasworld.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-24292e?style=for-the-badge&logo=github)](https://github.com/mostafa-1017/CodeAlpha_Mostafa-s_Portfolio)
[![CodeAlpha](https://img.shields.io/badge/Internship-CodeAlpha-blueviolet?style=for-the-badge)](https://codealpha.tech)

</div>

---

## 📌 Project Overview

This is a fully responsive **personal portfolio website** built using pure **HTML, CSS, and Vanilla JavaScript** — no frameworks, no libraries, just clean front-end code. It was developed as **Task 3** of the **CodeAlpha Frontend Development Internship**.

The goal was to build a professional portfolio that showcases my skills, projects, achievements, and makes it easy for anyone to get in touch — all in one place.

> 📎 All personal data including the profile photo, certificates, achievements, gallery images, CV, and project details were collected and migrated from my previous portfolio at [thisismostafa.netlify.app](https://thisismostafa.netlify.app)

---

## 🔗 Links

| | |
|---|---|
| 🌐 **Live Site** | [mostafasworld.netlify.app](https://mostafasworld.netlify.app) |
| 💻 **GitHub Repo** | [github.com/mostafa-1017/CodeAlpha_Mostafa-s_Portfolio](https://github.com/mostafa-1017/CodeAlpha_Mostafa-s_Portfolio) |
| 📄 **My CV** | [Download CV](https://thisismostafa.netlify.app/cv.pdf) |

---

## 🎨 Design

The portfolio uses a **dark cyberpunk / terminal-inspired theme** with the following visual features:

- Animated **particle network** rendered on an HTML5 canvas background
- **Glitch effect** animation on the hero heading
- **Typewriter animation** that cycles through different roles
- Scroll-triggered **reveal animations** — elements fade and slide up as you scroll
- A **static gradient ring** around the profile photo
- **Floating badges** (Frontend Dev · TECH Enthusiast) near the profile photo
- Fonts: **Syne** for headings, **JetBrains Mono** for code-style text

---

## 📄 Sections

The portfolio is divided into **6 main sections**:

### 01 — Hero
The landing section with the animated name, typewriter cycling through roles, a short description, CV download button, and a "Get In Touch" button. Includes a profile photo with a glowing gradient ring and an availability badge showing the user is open to work.

### 02 — About
A personal bio describing education, focus areas, and career goal. Includes **4 stat boxes** (Projects, Internship Tasks, Certificates, Passion) and **4 info cards** covering Education, Experience, Focus Areas, and Location.

### 03 — Skills
Skills are split into **3 categories**:
- **Programming** — Python, JavaScript, HTML, CSS, Java (with animated progress bars showing percentage)
- **Technologies** — Machine Learning, OpenCV, Firebase, React.js, Git (with animated progress bars)
- **Tools** — GitHub, VS Code, Google Colab, TensorFlow, Pandas, Next.js, TypeScript, Tailwind CSS, Matplotlib, YOLO, Docker (displayed as pill tags)

The progress bars animate from 0% to their target value when scrolled into view.

### 04 — Projects
6 featured project cards, each showing:
- Project title, category badge, description, and tech stack tags
- Links to the GitHub repo and live demo (where available)
- The **entire card is clickable** and opens the GitHub repo in a new tab
- A "View on GitHub →" button slides up on hover

Projects included:
1. MonBondhu — Community Health Navigator *(Hackathon)*
2. Adaptive CCTV Footage Compression *(ML / Computer Vision)*
3. School System Management — Scolario *(Full Stack)*
4. FIFA Dataset Analysis & Prediction *(Data Science)*
5. Image Gallery — CodeAlpha Task 1 *(Frontend)*
6. Calculator — CodeAlpha Task 2 *(Frontend)*

### 05 — Gallery & Achievements
A tabbed gallery with **4 categories**:
- 🏆 Certificates — 11 images
- 🥇 Achievements — 10 images
- ⚽ Sports — 15 images
- 🌏 Travel & Nature — 12 images

Clicking any image opens a **full lightbox viewer** that supports:
- Keyboard navigation (← →)
- Touch swipe on mobile
- Click outside to close

### 06 — Contact
Two-column layout with:
- **Left side** — social links with real brand SVG logos and brand-colored hover effects for Gmail, WhatsApp, Facebook, and GitHub
- **Right side** — a contact form powered by **EmailJS**

The contact form:
- Sends an **instant notification email** to `mostafasiyam29@gmail.com` when submitted
- Automatically sends a **confirmation/reply email** back to the person who submitted
- Shows a loading state on the button while sending
- Displays a success message on completion, or an error message if something fails
- Zero backend required — runs entirely on the frontend

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-00e5ff?style=flat)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | All interactivity — no frameworks used |
| EmailJS | Contact form email delivery |
| HTML5 Canvas API | Particle network background animation |
| Google Fonts | Syne + JetBrains Mono typography |
| Netlify | Deployment and hosting |

---

## 📱 Responsive Design

The site is fully responsive and tested across all screen sizes:

| Breakpoint | Behaviour |
|---|---|
| `> 1024px` | Full desktop two-column layout |
| `≤ 1024px` | 2-column skills grid, 2-column projects |
| `≤ 900px` | Hamburger menu, hero stacks vertically |
| `≤ 640px` | Single column, full mobile optimised |
| `≤ 400px` | Extra small phone adjustments |
| Landscape mode | Special fix so nothing gets cut off sideways |

---

## 📁 File Structure

```
CodeAlpha_Mostafa-s_Portfolio/
│
├── index.html       # All sections and HTML content
├── style.css        # All styles, animations, and responsive CSS
├── script.js        # JavaScript — particles, typewriter, gallery, EmailJS
├── profile.jpg      # Profile photo
└── README.md        # Project documentation
```



No build tools or dependencies needed. Just open `index.html` in any browser.

---

## 👨‍💻 About Me

**Mostafa Main Uddin**  
Computer Science Student @ BAIUST, Bangladesh 🇧🇩  
Frontend Development Intern @ CodeAlpha

| | |
|---|---|
| 🌐 Portfolio | [mostafasworld.netlify.app](https://mostafasworld.netlify.app) |
| 💻 GitHub | [github.com/mostafa-1017](https://github.com/mostafa-1017) |
| 📧 Email | mostafasiyam29@gmail.com |

---




<div align="center">


 **Mostafa Main Uddin** · CodeAlpha Frontend Development Internship

</div>
