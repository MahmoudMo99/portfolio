import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  items: readonly string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly skillCategories: readonly SkillCategory[] = [
    {
      title: 'Frontend Foundations',
      icon: 'bi-code-slash',
      description:
        'Core technologies for responsive, maintainable, and accessible web interfaces.',
      items: [
        'HTML5',
        'CSS3',
        'SCSS',
        'JavaScript ES6+',
        'TypeScript',
        'Bootstrap 5',
        'Responsive Web Design',
        'RTL UI',
      ],
    },
    {
      title: 'Angular Ecosystem',
      icon: 'bi-lightning-charge',
      description:
        'Modern Angular patterns and application architecture used across my projects.',
      items: [
        'Angular',
        'Standalone Components',
        'Signals',
        'RxJS',
        'Services',
        'Routing',
        'Reactive Forms',
        'Guards',
        'Interceptors',
        'Lazy Loading',
        'REST API Integration',
      ],
    },
    {
      title: 'UI & Frontend Libraries',
      icon: 'bi-window-sidebar',
      description:
        'Libraries and tools for component-driven UI, visualization, localization, and content.',
      items: [
        'PrimeNG',
        'Chart.js',
        'ngx-translate',
        'Lucide Angular',
        'ngx-markdown',
      ],
    },
    {
      title: 'Backend, APIs & Data',
      icon: 'bi-server',
      description:
        'Backend technologies and data services used in full-stack and API-driven projects.',
      items: [
        'Node.js',
        'Express.js',
        'REST APIs',
        '.NET API Integration',
        'Gemini API',
        'MongoDB',
        'Microsoft SQL Server',
      ],
    },
    {
      title: 'Testing & Developer Tools',
      icon: 'bi-tools',
      description:
        'Tools used for testing, API development, version control, deployment, and collaboration.',
      items: ['Jasmine', 'Git', 'GitHub', 'Postman', 'Vercel', 'Figma'],
    },
    {
      title: 'Core Engineering Concepts',
      icon: 'bi-diagram-3',
      description:
        'Software engineering and computer science fundamentals that guide implementation decisions.',
      items: [
        'OOP',
        'Data Structures',
        'Algorithms',
        'Design Patterns',
        'SDLC',
      ],
    },
  ];
}
