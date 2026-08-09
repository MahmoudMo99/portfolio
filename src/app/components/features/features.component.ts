import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  readonly features: FeatureItem[] = [
    {
      icon: 'bi-code-slash',
      title: 'Angular Development',
      description:
        'Building responsive and scalable web applications using Angular, TypeScript, RxJS, REST APIs, and clean component-based architecture.',
    },
    {
      icon: 'bi-window-sidebar',
      title: 'UI Implementation',
      description:
        'Turning designs into clean, accessible, and responsive interfaces with attention to spacing, typography, usability, and user experience.',
    },
    {
      icon: 'bi-person-video3',
      title: 'Mentoring & Code Review',
      description:
        'Supporting learners and junior developers through debugging, code reviews, frontend guidance, and practical project implementation.',
    },
  ];
}
