import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface PortfolioProject {
  titleKey: string;
  descriptionKey: string;
  categoryKey: string;
  skills: readonly string[];
  image: string;
  github?: string;
  live?: string;
  video?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  readonly projects: readonly PortfolioProject[] = [
    {
      titleKey: 'portfolio.projects.qurb.title',
      descriptionKey: 'portfolio.projects.qurb.description',
      categoryKey: 'portfolio.projects.qurb.category',
      skills: [
        'Angular 22',
        'TypeScript',
        'PWA',
        'Signals',
        'RxJS',
        'RTL',
        'Service Worker',
        'Offline Support',
      ],
      image: '/images/projects/qurb.png',
      github: 'https://github.com/MahmoudMo99/qurb',
      live: 'https://qurb-islamic.vercel.app/home',
    },
    {
      titleKey: 'portfolio.projects.retailOps.title',
      descriptionKey: 'portfolio.projects.retailOps.description',
      categoryKey: 'portfolio.projects.retailOps.category',
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
      titleKey: 'portfolio.projects.touche.title',
      descriptionKey: 'portfolio.projects.touche.description',
      categoryKey: 'portfolio.projects.touche.category',
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
      titleKey: 'portfolio.projects.nova.title',
      descriptionKey: 'portfolio.projects.nova.description',
      categoryKey: 'portfolio.projects.nova.category',
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
      titleKey: 'portfolio.projects.portfolio.title',
      descriptionKey: 'portfolio.projects.portfolio.description',
      categoryKey: 'portfolio.projects.portfolio.category',
      skills: ['Angular', 'TypeScript', 'SCSS', 'Responsive UI'],
      image: '/images/projects/portfolio.png',
      github: 'https://github.com/MahmoudMo99/portfolio',
      live: 'https://mahmoud-mohamed-portfolio.vercel.app/',
    },
    {
      titleKey: 'portfolio.projects.housing.title',
      descriptionKey: 'portfolio.projects.housing.description',
      categoryKey: 'portfolio.projects.housing.category',
      skills: ['Angular', '.NET', 'SQL Server', 'REST APIs'],
      image: '/images/projects/madina.jpg',
      live: 'http://193.227.49.104/madina/login',
      video:
        'https://drive.google.com/file/d/1MvZCvKK9nqqJO3jpELBa6q4r7aUjEGPk/view?usp=sharing',
    },
  ];
}
