# Mahmoud Mohamed | Developer Portfolio

A modern, bilingual personal portfolio built with **Angular and TypeScript**, presenting my work as a **Software Engineer & Angular Frontend Developer**.

The portfolio is designed as a responsive, RTL-ready, theme-aware Angular application with a strong focus on frontend architecture, usability, accessibility, maintainability, and clear presentation of real project experience.

<p align="center">
  <a href="https://mahmoud-mohamed-portfolio.vercel.app/">
    <strong>Live Portfolio</strong>
  </a>
  ·
  <a href="https://github.com/MahmoudMo99">
    GitHub
  </a>
  ·
  <a href="https://www.linkedin.com/in/mahmoud-mo-mahmoud">
    LinkedIn
  </a>
</p>

---

## Overview

This portfolio brings together my professional experience, technical skills, freelance work, training experience, education, selected projects, and verified client feedback in one focused Angular application.

It reflects the type of frontend work I focus on: structured Angular applications, dashboards and business systems, API-driven interfaces, and Arabic-first RTL experiences.

The website includes:

- English and Arabic localization with full RTL support
- Light and dark themes with persisted user preferences
- Responsive layouts across desktop, tablet, and mobile
- Professional experience and education sections
- Selected Angular and full-stack projects
- Verified freelance client reviews
- Technical stack and engineering focus areas
- Direct links to project demos and repositories
- Downloadable CV
- Accessible navigation and reduced-motion support
- SEO, Open Graph, Twitter Card, and structured metadata

---

## Featured Projects

| Project                                  | Description                                                                                                                               | Links                                                                                                              |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Qurb \| قُرب**                         | Arabic-first Islamic PWA with Madinah Mushaf Quran reading, offline support, prayer times, azkar, hadith, Wird tracking, and favorites.   | [Live](https://qurb-islamic.vercel.app/home) · [GitHub](https://github.com/MahmoudMo99/qurb)                       |
| **RetailOps Admin Dashboard**            | Angular operations dashboard with authentication, permission-based RBAC, analytics, localization, and responsive RTL support.             | [Live](https://retail-ops-sigma.vercel.app/) · [GitHub](https://github.com/MahmoudMo99/retail-ops)                 |
| **Touché de Gateau**                     | Responsive Arabic RTL e-commerce frontend with product discovery, filtering, cart, checkout, and Signals-driven state.                    | [Live](https://touche-de-gateau-demo.vercel.app/) · [GitHub](https://github.com/MahmoudMo99/touche-de-gateau-demo) |
| **Nova AI Learning Assistant**           | Full-stack AI learning assistant with Gemini streaming, multi-turn conversations, Markdown rendering, and local chat history.             | [GitHub](https://github.com/MahmoudMo99/nova-ai)                                                                   |
| **Personal Portfolio**                   | Bilingual Angular portfolio presenting projects, experience, technical skills, education, and verified client feedback.                   | [Live](https://mahmoud-mohamed-portfolio.vercel.app/) · [GitHub](https://github.com/MahmoudMo99/portfolio)         |
| **University Campus Housing Management** | Full-stack university housing system covering student workflows, room selection, availability, violations, reporting, and administration. | [Live Demo](http://193.227.49.104/madina/login)                                                                    |

---

## Tech Stack

| Category             | Technologies                                  |
| -------------------- | --------------------------------------------- |
| Framework            | Angular 19                                    |
| Language             | TypeScript                                    |
| Styling              | SCSS, CSS3, HTML5                             |
| Reactive Programming | RxJS                                          |
| Localization         | ngx-translate                                 |
| UI Architecture      | Angular Standalone Components                 |
| Icons                | Bootstrap Icons                               |
| Responsive Design    | Custom responsive layouts and RTL support     |
| Themes               | Light / Dark theme with persisted preferences |
| API Integration      | REST APIs                                     |
| Deployment           | Vercel                                        |
| Version Control      | Git, GitHub                                   |

---

## Application Structure

The portfolio follows a component-based Angular architecture with dedicated sections for:

- Header and navigation
- Hero and professional introduction
- About and education
- Work experience
- Selected projects
- Technical skills
- Frontend solution areas
- Client testimonials
- Contact CTA
- Footer
- Independent scroll-to-top utility

Shared functionality such as language switching and theme management is separated into dedicated services to keep UI components focused and maintainable.

---

## Localization & RTL

The portfolio supports both **English and Arabic** using `ngx-translate`.

Translation content is maintained through:

```text
public/i18n/en.json
public/i18n/ar.json
```

The application updates the document language and direction dynamically and provides dedicated RTL behavior and Arabic typography rather than treating Arabic as a visual afterthought.

---

## Theme System

The interface includes both light and dark themes using a shared CSS variable-based design system.

Theme preferences are persisted locally and initialized before Angular renders the application to reduce visual flashing during page load.

The design system includes reusable tokens for:

```text
Colors
Surfaces
Typography
Borders
Shadows
Spacing
Container width
Responsive section rhythm
```

---

## Accessibility & UX

The portfolio includes several accessibility and usability considerations, including keyboard focus states, semantic navigation, ARIA labels, responsive interaction patterns, reduced-motion support, readable contrast, and mobile-friendly controls.

Motion is intentionally kept subtle and used primarily for navigation feedback, section entry, and small interaction states.

---

## SEO & Social Sharing

The application includes:

- Descriptive page metadata
- Canonical URL
- Open Graph metadata
- Twitter Card metadata
- Social preview image
- Theme color metadata
- Favicon and Apple Touch icon
- `Person` structured data using Schema.org
- Search engine indexing directives

---

## Getting Started

### Prerequisites

Install **Node.js** and **npm**.

### Clone the Repository

```bash
git clone https://github.com/MahmoudMo99/portfolio.git
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm start
```

The development server will be available at:

```text
http://localhost:4200
```

### Production Build

```bash
npm run build
```

The optimized production build is generated inside:

```text
dist/mahmoud-portfolio
```

---

## Deployment

The portfolio is deployed on **Vercel**.

**Live Website:**  
https://mahmoud-mohamed-portfolio.vercel.app/

Production updates can be deployed automatically through Vercel's Git integration after changes are pushed to the connected branch.

---

## Author

**Mahmoud Mohamed**  
Software Engineer & Angular Frontend Developer

Focused on Angular product engineering, responsive and RTL interfaces, API-driven applications, dashboards, and maintainable frontend architecture.

**Portfolio:** https://mahmoud-mohamed-portfolio.vercel.app/  
**GitHub:** https://github.com/MahmoudMo99  
**LinkedIn:** https://www.linkedin.com/in/mahmoud-mo-mahmoud

---

Built with **Angular, TypeScript, RxJS, SCSS, and ngx-translate** with a focus on clean frontend engineering.
