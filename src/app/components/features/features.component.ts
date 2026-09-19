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
  readonly features: readonly FeatureItem[] = [
    {
      icon: 'bi-code-slash',
      title: 'Angular Development',
      description:
        'Building maintainable Angular applications with TypeScript, RxJS, reusable components, forms, routing, and REST APIs.',
    },
    {
      icon: 'bi-speedometer2',
      title: 'Admin Dashboards & Systems',
      description:
        'Developing dashboards with data tables, filters, forms, authentication, role-based interfaces, and responsive layouts.',
    },
    {
      icon: 'bi-layout-text-window-reverse',
      title: 'Responsive & RTL Interfaces',
      description:
        'Creating responsive, user-friendly interfaces with careful attention to usability, typography, accessibility, and Arabic RTL support.',
    },
  ];
}
