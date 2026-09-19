import { ChangeDetectionStrategy, Component } from '@angular/core';

interface HeroTech {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly techs: readonly HeroTech[] = [
    { name: 'Angular', icon: 'bi-braces' },
    { name: 'TypeScript', icon: 'bi-filetype-tsx' },
    { name: 'RxJS', icon: 'bi-arrow-repeat' },
    { name: 'REST APIs', icon: 'bi-plug' },
  ];
}
