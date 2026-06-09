import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  codeSnippet = `const developer = {
  name: 'Mahmoud',
  role: 'Angular Developer',
  focus: 'Clean UI'
};`;
}
