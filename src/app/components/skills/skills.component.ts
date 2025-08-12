import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Concepts',
      icon: 'bi bi-lightbulb',
      items: ['OOP', 'Data Structure', 'Algorithms', 'Design Pattern'],
    },
    {
      title: 'Software Engineering',
      icon: 'bi bi-diagram-3',
      items: [
        'SW Life Cycle',
        'Use Case',
        'FlowChart',
        'DFD',
        'Context',
        'Activity',
        'Sequence',
      ],
    },
    {
      title: 'Frontend Development',
      icon: 'bi bi-code-slash',
      items: [
        'HTML5',
        'CSS3',
        'Responsive Design',
        'Bootstrap5',
        'SASS',
        'JavaScript',
        'ES6',
        'Typescript',
        'Angular',
      ],
    },
    {
      title: 'Backend Development',
      icon: 'bi bi-code-slash',
      items: ['Node JS', 'Express JS'],
    },
    {
      title: 'Database',
      icon: 'bi bi-database',
      items: ['MS SQL Server', 'Mongo DB'],
    },
    {
      title: 'UI/UX Design',
      icon: 'bi bi-easel',
      items: ['Figma'],
    },
    {
      title: 'Languages',
      icon: 'bi bi-terminal',
      items: ['C', 'C++', 'JavaScript', 'Python'],
    },
    {
      title: 'Testing & Version Control',
      icon: 'bi bi-git',
      items: ['Jasmine', 'Postman', 'Git', 'GitHub'],
    },
  ];
}
