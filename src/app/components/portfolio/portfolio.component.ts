import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

type ProjectCategory = 'All' | 'Dashboard' | 'E-Commerce' | 'AI' | 'Angular';

interface PortfolioProject {
  title: string;
  description: string;
  categories: Exclude<ProjectCategory, 'All'>[];
  primaryCategory: Exclude<ProjectCategory, 'All'>;
  skills: string[];
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
  readonly categories: readonly ProjectCategory[] = [
    'All',
    'Dashboard',
    'E-Commerce',
    'AI',
    'Angular',
  ];

  readonly selectedCategory = signal<ProjectCategory>('All');

  readonly projects: readonly PortfolioProject[] = [
    {
      title: 'Qurb | قُرب',
      description:
        'An RTL-first Islamic Angular application featuring Quran reading, prayer times, azkar, hadith, daily wird tracking, favorites, and resilient local caching.',
      categories: ['Angular'],
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
        'A production-style Angular e-commerce dashboard with authentication, permission-based RBAC, data management workflows, analytics, localization, and responsive RTL support.',
      categories: ['Dashboard', 'Angular'],
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
      title: 'Touché de Gateau E-Commerce Demo',
      description:
        'An Arabic RTL e-commerce experience built with Angular, featuring product discovery, Signals-based cart state, persistent shopping data, and a responsive checkout flow.',
      categories: ['E-Commerce', 'Angular'],
      primaryCategory: 'E-Commerce',
      skills: [
        'Angular',
        'TypeScript',
        'Signals',
        'Reactive Forms',
        'Custom SCSS',
        'RTL',
        'Responsive UI',
        'Local Storage',
      ],
      image: '/images/projects/touche-de-gateau.png',
      github: 'https://github.com/MahmoudMo99/touche-de-gateau-demo',
      live: 'https://touche-de-gateau-demo.vercel.app/',
    },
    {
      title: 'Nova AI Learning Assistant',
      description:
        'A full-stack AI learning assistant with real-time Gemini streaming, multi-turn conversations, persistent chat history, Markdown rendering, and a responsive Angular interface.',
      categories: ['AI', 'Angular'],
      primaryCategory: 'AI',
      skills: [
        'Angular',
        'TypeScript',
        'Node.js',
        'Express',
        'Gemini API',
        'Streaming',
        'REST API',
        'Markdown',
      ],
      image: '/images/projects/nova-ai.png',
      github: 'https://github.com/MahmoudMo99/nova-ai',
    },
    {
      title: 'Personal Portfolio',
      description:
        'A responsive Angular portfolio showcasing selected projects, technical skills, professional experience, and client feedback.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      image: '/images/projects/portfolio.png',
      github: 'https://github.com/MahmoudMo99/portfolio',
      live: 'https://mahmoud-mohamed-portfolio.vercel.app/',
    },
    {
      title: 'University Campus Housing Management',
      description:
        'A web application for managing student housing workflows, room selection, availability, violations, reporting, and administrative settings.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: ['Angular', '.NET', 'SQL Server', 'REST APIs'],
      image: '/images/projects/madina.jpg',
      live: 'http://193.227.49.104/madina/login',
      video:
        'https://drive.google.com/file/d/1MvZCvKK9nqqJO3jpELBa6q4r7aUjEGPk/view?usp=sharing',
    },
  ];

  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();

    if (category === 'All') {
      return this.projects;
    }

    return this.projects.filter((project) =>
      project.categories.includes(category),
    );
  });

  filterProjects(category: ProjectCategory): void {
    this.selectedCategory.set(category);
  }
}
