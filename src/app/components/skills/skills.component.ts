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
        'Responsive Design',
        'Bootstrap 5',
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
        'REST API Integration',
      ],
    },
    {
      title: 'APIs & Backend Basics',
      icon: 'bi-server',
      description:
        'Understanding backend workflows and integrating frontend apps with APIs.',
      items: ['Node.js', 'Express.js', 'ASP.NET Core', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: 'bi-database',
      description:
        'Working with relational and NoSQL databases in full-stack projects.',
      items: ['MS SQL Server', 'MongoDB'],
    },
    {
      title: 'Testing & Tools',
      icon: 'bi-tools',
      description:
        'Tools used for development workflow, testing, debugging, and collaboration.',
      items: ['Jasmine', 'Postman', 'Git', 'GitHub', 'VS Code'],
    },
    {
      title: 'Core Concepts',
      icon: 'bi-diagram-3',
      description:
        'Computer science and software engineering foundations used in development.',
      items: [
        'OOP',
        'Data Structures',
        'Algorithms',
        'Design Patterns',
        'SDLC',
        'Problem Solving',
      ],
    },
  ];
}
