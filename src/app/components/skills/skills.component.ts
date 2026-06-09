import { Component } from '@angular/core';

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
})
export class SkillsComponent {
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Core Concepts',
      icon: 'bi bi-lightbulb',
      description: 'Strong foundation in programming and problem solving.',
      items: ['OOP', 'Data Structures', 'Algorithms', 'Design Patterns'],
    },
    {
      title: 'Software Engineering',
      icon: 'bi bi-diagram-3',
      description:
        'Understanding software analysis, design, and documentation.',
      items: [
        'SDLC',
        'Use Cases',
        'Flowcharts',
        'DFD',
        'Context Diagrams',
        'Activity Diagrams',
        'Sequence Diagrams',
      ],
    },
    {
      title: 'Frontend Development',
      icon: 'bi bi-code-slash',
      description:
        'Building responsive, maintainable, and modern web interfaces.',
      items: [
        'HTML5',
        'CSS3',
        'Responsive Design',
        'Bootstrap 5',
        'SASS',
        'JavaScript',
        'ES6',
        'TypeScript',
        'Angular',
      ],
    },
    {
      title: 'Backend Development',
      icon: 'bi bi-server',
      description: 'Working with backend fundamentals and RESTful APIs.',
      items: ['Node.js', 'Express.js'],
    },
    {
      title: 'Database',
      icon: 'bi bi-database',
      description: 'Designing and working with relational and NoSQL databases.',
      items: ['MS SQL Server', 'MongoDB'],
    },
    {
      title: 'UI/UX Design',
      icon: 'bi bi-easel',
      description: 'Designing clean layouts and user-friendly interfaces.',
      items: ['Figma', 'Wireframes', 'UI Design'],
    },
    {
      title: 'Programming Languages',
      icon: 'bi bi-terminal',
      description:
        'Programming languages used in academic and practical projects.',
      items: ['C', 'C++', 'JavaScript', 'Python'],
    },
    {
      title: 'Testing & Tools',
      icon: 'bi bi-tools',
      description:
        'Tools used for testing, version control, and development workflow.',
      items: ['Jasmine', 'Postman', 'Git', 'GitHub'],
    },
  ];
}
