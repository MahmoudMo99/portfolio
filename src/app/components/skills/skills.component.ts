import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'bi-code-slash',
      description:
        'Building responsive, maintainable, and user-friendly web interfaces.',
      items: [
        'HTML5',
        'CSS3',
        'SASS',
        'JavaScript',
        'ES6',
        'TypeScript',
        'Bootstrap 5',
        'Responsive Design',
        'RTL UI',
      ],
    },
    {
      title: 'Angular Ecosystem',
      icon: 'bi-lightning-charge',
      description:
        'Working with Angular features used in real web applications.',
      items: [
        'Angular',
        'Components',
        'Routing',
        'Guards',
        'Interceptors',
        'Reactive Forms',
        'RxJS',
        'Lazy Loading',
        'REST API Integration',
      ],
    },
    {
      title: 'UI Libraries & Visualization',
      icon: 'bi-window-sidebar',
      description:
        'Using UI libraries, charts, and localization tools to build richer frontend experiences.',
      items: ['PrimeNG', 'Chart.js', 'ngx-translate', 'Custom SCSS'],
    },
    {
      title: 'APIs & Backend Basics',
      icon: 'bi-server',
      description:
        'Understanding backend workflows and integrating frontend apps with APIs.',
      items: ['Node.js', 'Express.js', 'ASP.NET Core', 'REST APIs'],
    },
    {
      title: 'Databases',
      icon: 'bi-database',
      description:
        'Working with relational and NoSQL databases in full-stack projects.',
      items: ['MS SQL Server', 'MongoDB'],
    },
    {
      title: 'Tools & Core Concepts',
      icon: 'bi-tools',
      description:
        'Development tools and software engineering foundations used in daily work.',
      items: [
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'Jasmine',
        'OOP',
        'Data Structures',
        'Algorithms',
        'Design Patterns',
        'SDLC',
      ],
    },
  ];
}
