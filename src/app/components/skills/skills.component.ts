import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface SkillCategory {
  titleKey: string;
  descriptionKey: string;
  icon: string;
  items: readonly string[];
  primary?: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly skillCategories: readonly SkillCategory[] = [
    {
      titleKey: 'skills.categories.frontend.title',
      descriptionKey: 'skills.categories.frontend.description',
      icon: 'bi-code-slash',
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
      titleKey: 'skills.categories.angular.title',
      descriptionKey: 'skills.categories.angular.description',
      icon: 'bi-lightning-charge',
      primary: true,
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
      titleKey: 'skills.categories.ui.title',
      descriptionKey: 'skills.categories.ui.description',
      icon: 'bi-window-sidebar',
      items: [
        'PrimeNG',
        'Chart.js',
        'ngx-translate',
        'Lucide Angular',
        'ngx-markdown',
      ],
    },
    {
      titleKey: 'skills.categories.backend.title',
      descriptionKey: 'skills.categories.backend.description',
      icon: 'bi-server',
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
      titleKey: 'skills.categories.tools.title',
      descriptionKey: 'skills.categories.tools.description',
      icon: 'bi-tools',
      items: ['Jasmine', 'Git', 'GitHub', 'Postman', 'Vercel', 'Figma'],
    },
    {
      titleKey: 'skills.categories.engineering.title',
      descriptionKey: 'skills.categories.engineering.description',
      icon: 'bi-diagram-3',
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
