import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Angular', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'HTML', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
  ];
}
