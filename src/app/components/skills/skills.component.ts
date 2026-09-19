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
  readonly skillCategories: readonly SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'bi-code-slash',
      description:
        'Building responsive, maintainable, and accessible web interfaces.',
      items: [
        'HTML5',
        'CSS3',
        'SCSS',
        'JavaScript',
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
        'Building structured Angular applications with modern framework patterns.',
      items: [
        'Angular',
        'Signals',
        'RxJS',
        'Standalone Components',
        'Routing',
        'Guards',
        'Interceptors',
        'Reactive Forms',
        'Lazy Loading',
      ],
    },
    {
      title: 'UI & Frontend Libraries',
      icon: 'bi-window-sidebar',
      description:
        'Using component libraries, visualization, and localization tools.',
      items: [
        'PrimeNG',
        'Chart.js',
        'ngx-translate',
        'Lucide Icons',
        'ngx-markdown',
        'Custom SCSS',
      ],
    },
    {
      title: 'APIs & Backend',
      icon: 'bi-server',
      description:
        'Integrating frontend applications with APIs and backend services.',
      items: ['REST APIs', 'Node.js', 'Express', 'ASP.NET Core', 'Gemini API'],
    },
    {
      title: 'Databases',
      icon: 'bi-database',
      description:
        'Working with relational and NoSQL databases in full-stack projects.',
      items: ['SQL Server', 'MongoDB'],
    },
    {
      title: 'Tools & Core Concepts',
      icon: 'bi-tools',
      description:
        'Development tools and software engineering fundamentals used in my workflow.',
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
