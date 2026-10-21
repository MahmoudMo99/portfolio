import { ChangeDetectionStrategy, Component } from '@angular/core';

interface PortfolioProject {
  title: string;
  description: string;
  primaryCategory: string;
  skills: readonly string[];
  image: string;
  github?: string;
  live?: string;
  video?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  readonly projects: readonly PortfolioProject[] = [
    {
      title: 'Qurb | قُرب',
      description:
        'An Arabic-first RTL Angular application for Quran reading, prayer times, azkar, hadith, favorites, daily Wird tracking, and resilient local caching.',
      primaryCategory: 'Angular',
      skills: [
        'Angular 22',
        'TypeScript',
        'Signals',
        'RxJS',
        'REST APIs',
        'SCSS',
        'RTL',
        'Local Caching',
      ],
      image: '/images/projects/qurb.png',
      github: 'https://github.com/MahmoudMo99/qurb',
      live: 'https://qurb-islamic.vercel.app/',
    },
    {
      title: 'RetailOps Admin Dashboard',
      description:
        'An Angular e-commerce operations dashboard with authentication, permission-based RBAC, data management workflows, analytics, localization, and responsive RTL support.',
      primaryCategory: 'Dashboard',
      skills: [
        'Angular 22',
        'TypeScript',
        'RxJS',
        'PrimeNG',
        'REST APIs',
        'RBAC',
        'Chart.js',
        'i18n & RTL',
      ],
      image: '/images/projects/retail-ops.png',
      github: 'https://github.com/MahmoudMo99/retail-ops',
      live: 'https://retail-ops-sigma.vercel.app/',
    },
    {
      title: 'Touché de Gateau | Arabic RTL E-Commerce Frontend',
      description:
        'A responsive Arabic RTL e-commerce frontend with product discovery, filtering, cart and checkout workflows, feature-based architecture, and Signals-driven state management.',
      primaryCategory: 'E-Commerce',
      skills: [
        'Angular 20',
        'TypeScript',
        'Signals',
        'Reactive Forms',
        'SCSS',
        'Angular Router',
        'RTL',
        'Local Storage',
      ],
      image: '/images/projects/touche-de-gateau.png',
      github: 'https://github.com/MahmoudMo99/touche-de-gateau-demo',
      live: 'https://touche-de-gateau-demo.vercel.app/',
    },
    {
      title: 'Nova AI Learning Assistant',
      description:
        'A full-stack AI learning assistant with real-time Gemini response streaming, multi-turn conversations, Markdown rendering, persistent chat history, and a responsive Angular frontend.',
      primaryCategory: 'AI',
      skills: [
        'Angular',
        'TypeScript',
        'Node.js',
        'Express.js',
        'Gemini API',
        'Streaming',
        'REST APIs',
        'Markdown',
      ],
      image: '/images/projects/nova-ai.png',
      github: 'https://github.com/MahmoudMo99/nova-ai',
    },
    {
      title: 'Personal Portfolio',
      description:
        'A responsive Angular portfolio designed to present selected projects, professional experience, technical skills, and client feedback.',
      primaryCategory: 'Angular',
      skills: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap', 'Responsive UI'],
      image: '/images/projects/portfolio.png',
      github: 'https://github.com/MahmoudMo99/portfolio',
      live: 'https://mahmoud-mohamed-portfolio.vercel.app/',
    },
    {
      title: 'University Campus Housing Management',
      description:
        'A web application for managing student housing workflows, room selection, availability, violations, reporting, and administrative settings.',
      primaryCategory: 'Angular',
      skills: ['Angular', '.NET', 'SQL Server', 'REST APIs'],
      image: '/images/projects/madina.jpg',
      live: 'http://193.227.49.104/madina/login',
      video:
        'https://drive.google.com/file/d/1MvZCvKK9nqqJO3jpELBa6q4r7aUjEGPk/view?usp=sharing',
    },
  ];
}
