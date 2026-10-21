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
      title: 'Angular Web Applications',
      description:
        'Building structured Angular applications with standalone components, Signals, RxJS, Reactive Forms, routing, and REST API integration.',
    },
    {
      icon: 'bi-speedometer2',
      title: 'Dashboards & Business Systems',
      description:
        'Developing data-driven interfaces with tables, filters, forms, authentication, role-based access, analytics, and responsive layouts.',
    },
    {
      icon: 'bi-layout-text-window-reverse',
      title: 'Responsive & Arabic RTL Experiences',
      description:
        'Creating accessible, responsive interfaces with thoughtful UX, reusable UI patterns, and full Arabic RTL support.',
    },
  ];
}
