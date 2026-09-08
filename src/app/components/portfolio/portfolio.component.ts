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
  readonly categories: ProjectCategory[] = [
    'All',
    'Dashboard',
    'E-Commerce',
    'AI',
    'Angular',
  ];

  readonly selectedCategory = signal<ProjectCategory>('All');

  readonly projects: PortfolioProject[] = [
    {
      title: 'Qurb | قُرب',
      description:
        'A modern Arabic Islamic web application with Quran reading, prayer times, azkar, hadith collections, favorites, local caching, and a fully responsive RTL user experience.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: [
        'Angular 22',
        'TypeScript',
        'SCSS',
        'Signals',
        'RxJS',
        'REST APIs',
        'RTL UI',
        'Vercel',
      ],
      image: '/images/projects/qurb.png',
      github: 'https://github.com/MahmoudMo99/qurb',
      live: 'https://qurb-islamic.vercel.app/',
    },
    {
      title: 'RetailOps Admin Dashboard',
      description:
        'A production-style e-commerce operations dashboard with authentication, RBAC, data tables, analytics, RTL support, themes, and responsive admin layouts.',
      categories: ['Dashboard', 'Angular'],
      primaryCategory: 'Dashboard',
      skills: [
        'Angular',
        'TypeScript',
        'RxJS',
        'PrimeNG',
        'Chart.js',
        'REST APIs',
      ],
      image: '/images/projects/retail-ops.png',
      github: 'https://github.com/MahmoudMo99/retail-ops',
      live: 'https://retail-ops-sigma.vercel.app/',
    },
    {
      title: 'Touché de Gateau E-Commerce Demo',
      description:
        'An Arabic RTL e-commerce frontend demo for a Saudi cake shop, including homepage, product catalog, product details, cart, and checkout flow.',
      categories: ['E-Commerce', 'Angular'],
      primaryCategory: 'E-Commerce',
      skills: [
        'Angular',
        'TypeScript',
        'Custom SCSS',
        'RTL UI',
        'Responsive Design',
      ],
      image: '/images/projects/touche-de-gateau.png',
      github: 'https://github.com/MahmoudMo99/touche-de-gateau-demo',
      live: 'https://touche-de-gateau-demo.vercel.app/',
    },
    {
      title: 'Nova AI Learning Assistant',
      description:
        'A full-stack AI learning assistant with real-time streaming responses, Markdown rendering, persistent conversations, and a responsive Angular interface.',
      categories: ['AI', 'Angular'],
      primaryCategory: 'AI',
      skills: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Gemini API'],
      image: '/images/projects/nova-ai.png',
      github: 'https://github.com/MahmoudMo99/nova-ai',
    },
    {
      title: 'Personal Portfolio',
      description:
        'My personal portfolio showcasing my projects, skills, work experience, client feedback, and frontend background.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: ['Angular', 'TypeScript', 'SASS', 'Bootstrap'],
      image: '/images/projects/portfolio.png',
      github: 'https://github.com/MahmoudMo99/portfolio',
      live: 'https://mahmoud-mohamed-portfolio.vercel.app/',
    },
    {
      title: 'University Campus Housing Management',
      description:
        'A web application for managing student housing workflows, room selection, availability tracking, violations, reporting, and admin settings.',
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
